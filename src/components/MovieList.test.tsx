import React from "react";
import "jest-styled-components";
import { render, waitForElement, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import MovieList, { Container } from "./MovieList";
import moment from "moment";
import { MockedProvider } from "@apollo/react-testing";
import { getMovies } from "../graphql/queries/queries";

describe("MovieList", () => {
  const props = {};
  const movie = {
    popularity: 188.965,
    vote_count: 901,
    video: false,
    poster_path: "/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg",
    id: 559969,
    adult: false,
    backdrop_path: "/uLXK1LQM28XovWHPao3ViTeggXA.jpg",
    original_language: "en",
    original_title: "El Camino: A Breaking Bad Movie",
    genre_ids: [80, 18, 53],
    title: "El Camino: A Breaking Bad Movie",
    vote_average: 7.2,
    overview:
      "In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.",
    release_date: "2019-10-11"
  };
  const movies = [movie];

  const watchlistMovie = { ...movie };
  watchlistMovie.id = 1;
  const watchlist = [watchlistMovie];

  let mocks = [
    {
      request: {
        query: getMovies
      },
      result: {
        data: {
          movies: movies
        }
      }
    }
  ];

  let mockWatchlist = [
    {
      request: {
        query: getMovies
      },
      result: {
        data: {
          movies: watchlist
        }
      }
    }
  ];

  describe("MovieList component", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      const fetch = Promise.resolve({
        ok: true,
        json() {
          return {
            results: movies
          };
        }
      });
      return fetch;
    });

    describe("user interface", () => {
      test("should display one Container styled component", async () => {
        const { container } = render(
          <MockedProvider mocks={mocks} addTypename={false}>
            <MovieList />
          </MockedProvider>
        );
        await wait(() => {
          const styledComponentName = Container.displayName;
          expect((container.firstChild as HTMLElement).className).toContain(
            styledComponentName
          );
        });
      });
    });

    describe("events", () => {
      test("it should fetch movies and create a Card component for each movie", async () => {
        const { getByText, getByAltText } = render(
          <MockedProvider mocks={mocks} addTypename={false}>
            <MovieList />
          </MockedProvider>
        );
        await waitForElement(() =>
          getByText("El Camino: A Breaking Bad Movie")
        );
        await waitForElement(() =>
          getByAltText("El Camino: A Breaking Bad Movie poster")
        );
      });

      test("should return inWatchlist false if movie not in watchlist", async () => {
        const { getByTitle } = render(
          <MockedProvider mocks={mockWatchlist} addTypename={false}>
            <MovieList />
          </MockedProvider>
        );

        await wait(() => expect(getByTitle("Add")).toBeDefined());
      });

      test("should return inWatchlist true if movie in watchlist", async () => {
        const { queryByTitle } = render(
          <MockedProvider mocks={mocks} addTypename={false}>
            <MovieList />
          </MockedProvider>
        );
        await wait(() => expect(queryByTitle("Add")).toBeNull());
      });

      test("fetch should be called with the right dates", () => {
        const date_start = moment()
          .subtract(1, "M")
          .format("YYYY-MM-DD");
        const date_end = moment()
          .add(1, "M")
          .format("YYYY-MM-DD");
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=7d452802073548c625912b988e9cffd6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=${date_start}&release_date.lte=${date_end}&with_release_type=4`;

        expect(fetch).toHaveBeenCalledWith(url);
      });
    });
  });
});

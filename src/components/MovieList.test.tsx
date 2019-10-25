import React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";
import { render, waitForElement, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import MovieList, { Container } from "./MovieList";
import moment from "moment";

describe("MovieList", () => {
  const props = {};

  const movies = [
    {
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
        const { container } = render(<MovieList />);
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
        const { getByText, getByAltText } = render(<MovieList />);
        await waitForElement(() =>
          getByText("El Camino: A Breaking Bad Movie")
        );
        await waitForElement(() =>
          getByAltText("El Camino: A Breaking Bad Movie poster")
        );
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

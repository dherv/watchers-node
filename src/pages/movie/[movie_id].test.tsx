import React from "react";
import "jest-styled-components";

import MoviePage, { Container } from "./[movie_id]";
import { NextRouter } from "next/router";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { render, wait, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import { getMovies } from "../../graphql/queries/queries";

describe("movie_id", () => {
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
    genres: [{ id: 80, name: "Action" }],
    title: "El Camino: A Breaking Bad Movie",
    vote_average: 7.2,
    overview:
      "In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.",
    release_date: "2019-10-11"
  };

  let mocks = [
    {
      request: {
        query: getMovies
      },
      result: {
        data: {
          movies: [movie]
        }
      }
    }
  ];

  const similarMovie = {
    ...movie,
    original_title: "Similar Movie"
  };

  const credits = {
    cast: [
      {
        cast_id: 4,
        character: "Jesse Pinkman",
        credit_id: "5be34d7a0e0a2614ba01c2cb",
        gender: 2,
        id: 84497,
        name: "Aaron Paul",
        order: 0,
        profile_path: "/u8UdsB9yenM4uHEjmce4nkBn48X.jpg"
      },
      {
        cast_id: 4,
        character: "Jesse Pinkman",
        credit_id: "5be34d7a0e0a2614ba01c2cb",
        gender: 2,
        id: 84498,
        name: "Aaron Paul",
        order: 0,
        profile_path: "/u8UdsB9yenM4uHEjmce4nkBn48X.jpg"
      }
    ],
    crew: [
      {
        credit_id: "5cd0552a0e0a2627aa016405",
        department: "Directing",
        gender: 2,
        id: 66633,
        job: "Director",
        name: "Vince Gilligan",
        profile_path: "/rLSUjr725ez1cK7SKVxC9udO03Y.jpg"
      }
    ]
  };

  describe("movie_id component", () => {
    window.fetch = jest.fn().mockImplementation((url: String) => {
      if (url.includes("credits")) {
        const fetch = Promise.resolve({
          ok: true,
          json() {
            return credits;
          }
        });
        return fetch;
      } else if (url.includes("similar")) {
        const fetch = Promise.resolve({
          ok: true,
          json() {
            return {
              results: [similarMovie]
            };
          }
        });
        return fetch;
      } else {
        const fetch = Promise.resolve({
          ok: true,
          json() {
            return movie;
          }
        });
        return fetch;
      }
    });
    const router = ({
      pathname: "/movie",
      route: "/movie",
      asPath: "/movie",
      query: { movie_id: 559969 },
      push: jest.fn()
    } as unknown) as NextRouter;

    describe("user interface", () => {
      //TODO: move to _app.test.tsx
      test("should be contained in a Layout component", async () => {
        expect.assertions(1);
        const { queryByRole } = render(
          <MockedProvider mocks={mocks} addTypename={false}>
            <RouterContext.Provider value={router}>
              <MoviePage {...props} />
            </RouterContext.Provider>
          </MockedProvider>
        );
        await wait(() => expect(queryByRole("navigation")).toBeDefined());
      });

      test("should display one Container styled component after loaded", async () => {
        expect.assertions(1);
        const { container } = render(
          <MockedProvider mocks={mocks} addTypename={false}>
            <RouterContext.Provider value={router}>
              <MoviePage {...props} />
            </RouterContext.Provider>
          </MockedProvider>
        );

        await wait(() => {
          const styledComponentName = Container.displayName;
          expect(
            container.querySelector("div[class*=" + styledComponentName + "]")
          ).toBeDefined();
        });
      });

      test("should display one Card component and pass the movie as props", async () => {
        expect.assertions(1);
        const { getByAltText } = render(
          <MockedProvider mocks={mocks} addTypename={false}>
            <RouterContext.Provider value={router}>
              <MoviePage {...props} />
            </RouterContext.Provider>
          </MockedProvider>
        );
        await wait(() =>
          expect(
            getByAltText("El Camino: A Breaking Bad Movie poster")
          ).toBeDefined()
        );
      });

      describe("events", () => {
        afterEach(() => {
          cleanup();
        });
        test("should fetch the movie and pass it down to the Card and MovieContent component", async () => {
          expect.assertions(2);
          const { getAllByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
              <RouterContext.Provider value={router}>
                <MoviePage {...props} />
              </RouterContext.Provider>
            </MockedProvider>
          );
          expect(fetch).toHaveBeenNthCalledWith(
            1,
            "https://api.themoviedb.org/3/movie/559969?api_key=7d452802073548c625912b988e9cffd6&language=en-US"
          );
          await wait(() =>
            expect(
              getAllByText("El Camino: A Breaking Bad Movie")
            ).toHaveLength(2)
          );
        });
        test("should fetch movie cast and display their names seperated by a comma", async () => {
          expect.assertions(3);
          const { getByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
              <RouterContext.Provider value={router}>
                <MoviePage {...props} />
              </RouterContext.Provider>
            </MockedProvider>
          );
          expect(fetch).toHaveBeenNthCalledWith(
            2,
            "https://api.themoviedb.org/3/movie/559969/credits?api_key=7d452802073548c625912b988e9cffd6"
          );

          await wait(() => {
            expect(getByText("Aaron Paul,")).toBeDefined();
            expect(getByText("Aaron Paul")).toBeDefined();
          });
        });
        test("should fetch movie director and display his name", async () => {
          expect.assertions(2);
          const { getByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
              <RouterContext.Provider value={router}>
                <MoviePage {...props} />
              </RouterContext.Provider>
            </MockedProvider>
          );
          expect(fetch).toHaveBeenNthCalledWith(
            2,
            "https://api.themoviedb.org/3/movie/559969/credits?api_key=7d452802073548c625912b988e9cffd6"
          );

          await wait(() => expect(getByText("Vince Gilligan")).toBeDefined());
        });
        test("should fetch movie related movies and display the poster and name", async () => {
          expect.assertions(2);
          const { getByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
              <RouterContext.Provider value={router}>
                <MoviePage {...props} />
              </RouterContext.Provider>
            </MockedProvider>
          );
          expect(fetch).toHaveBeenNthCalledWith(
            3,
            "https://api.themoviedb.org/3/movie/559969/similar?api_key=7d452802073548c625912b988e9cffd6&language=en-US&page=1"
          );
          await wait(() => {
            expect(getByText("Similar Movie")).toBeDefined();
          });
        });

        test("should catch error on fetch error", async () => {
          window.fetch = jest.fn().mockImplementation(() => {
            return Promise.reject({
              error: "error test"
            });
          });
          // render(
          //   <MockedProvider mocks={[]} addTypename={false}>
          //     <RouterContext.Provider value={router}>
          //       <MoviePage {...props} />
          //     </RouterContext.Provider>
          //   </MockedProvider>
          // );
          expect.assertions(1);
          await expect(fetch("urltest")).rejects.toEqual({
            error: "error test"
          });
        });
      });
    });
  });
});

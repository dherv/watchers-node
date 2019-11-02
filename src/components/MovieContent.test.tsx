import React from "react";
import "jest-styled-components";

import MovieContent from "./MovieContent";
import { render, wait } from "@testing-library/react";
import { NextRouter } from "next/router";
import { RouterContext } from "next/dist/next-server/lib/router-context";

describe("MovieContent", () => {
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
  const similarMovies = [
    {
      ...movie,
      original_title: "Similar Movie"
    }
  ];

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

  const props = {
    movie,
    similarMovies,
    cast: credits.cast,
    director: credits.crew
  };
  const router = ({
    pathname: "/movie",
    route: "/movie",
    asPath: "/movie",
    query: { movie_id: 559969 },
    push: jest.fn()
  } as unknown) as NextRouter;

  describe("MovieContent component", () => {
    describe("user interface", () => {
      test("should display the movie title", async () => {
        const { getByText } = render(
          <RouterContext.Provider value={router}>
            <MovieContent {...props} />
          </RouterContext.Provider>
        );
        await wait(() =>
          expect(getByText("El Camino: A Breaking Bad Movie")).toBeDefined()
        );
      });
      test("should display the movie release date", async () => {
        const { getByText } = render(
          <RouterContext.Provider value={router}>
            <MovieContent {...props} />
          </RouterContext.Provider>
        );
        await wait(() => expect(getByText("October 11, 2019")).toBeDefined());
      });
      test("should display the movie overview", async () => {
        const { getByText } = render(
          <RouterContext.Provider value={router}>
            <MovieContent {...props} />
          </RouterContext.Provider>
        );
        await wait(() =>
          expect(
            getByText(
              "In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future."
            )
          ).toBeDefined()
        );
      });
      test("should display similar movies poster", async () => {
        const { getByAltText } = render(
          <RouterContext.Provider value={router}>
            <MovieContent {...props} />
          </RouterContext.Provider>
        );
        await wait(() =>
          expect(getByAltText("Similar Movie poster")).toBeDefined()
        );
      });
    });
  });
});

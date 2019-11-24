import React from "react";
import { mount } from "enzyme";
//import "jest-styled-components";

import Card, { Container } from "../components/card/Card";
import { NextRouter } from "next/router";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { MockedProvider } from "@apollo/react-testing";
import { render } from "@testing-library/react";

describe("Card", () => {
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
  const props = { movie, inWatchlist: true };

  describe("Card component", () => {
    describe("user interface", () => {
      test("should display one CardImageContainer", () => {
        const { getByAltText } = render(
          <MockedProvider mocks={[]} addTypename={false}>
            <Card {...props} />
          </MockedProvider>
        );
        expect(
          getByAltText(`${props.movie.original_title} poster`)
        ).toBeDefined();
      });
      test("should display one CardContent", () => {
        const { getByText } = render(
          <MockedProvider mocks={[]} addTypename={false}>
            <Card {...props} />
          </MockedProvider>
        );
        expect(getByText(`${props.movie.original_title}`)).toBeDefined();
      });
    });
    describe("events", () => {
      test("should send to the movie page with movie id when clicked", () => {
        const router = ({
          pathname: "/movie",
          route: "/movie",
          asPath: "/movie",
          push: jest.fn()
        } as unknown) as NextRouter;

        const wrapper = mount(
          <MockedProvider mocks={[]} addTypename={false}>
            <RouterContext.Provider value={router}>
              <Card {...props} />
            </RouterContext.Provider>
          </MockedProvider>
        );

        expect.assertions(1);
        wrapper.find(Container).simulate("click", { preventDefault() {} });
        expect(router.push).toHaveBeenCalledWith(
          "/movie/[movie_id]",
          "/movie/559969"
        );
      });
    });
  });
});

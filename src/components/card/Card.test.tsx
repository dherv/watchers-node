import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Card, { Container } from "./Card";
import CardImage from "./CardImage";
import CardContent from "./CardContent";
import { NextRouter } from "next/router";
import { RouterContext } from "next/dist/next-server/lib/router-context";

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
  const props = { movie };
  const wrapper = shallow(<Card {...props} />);

  describe("Card component", () => {
    describe("user interface", () => {
      test("should display one CardImageContainer", () => {
        expect(wrapper.find(CardImage)).toHaveLength(1);
      });
      test("should display one CardContent", () => {
        expect(wrapper.find(CardContent)).toHaveLength(1);
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
          <RouterContext.Provider value={router}>
            <Card {...props} />
          </RouterContext.Provider>
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

  describe("snapshot", () => {
    test("should match", () => {
      expect.assertions(1);
      const tree = renderer.create(<Card {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

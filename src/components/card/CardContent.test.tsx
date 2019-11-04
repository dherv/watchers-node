import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import CardContent, { Title } from "./CardContent";
import { MockedProvider } from "@apollo/react-testing";

describe("CardContent", () => {
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
  const props = { movie, theme: {} };
  const wrapper = mount(
    <MockedProvider mocks={[]} addTypename={false}>
      <CardContent {...props} />
    </MockedProvider>
  );

  describe("CardContent component", () => {
    describe("user interface", () => {
      test("should display a Title styled component with prop.title", () => {
        expect.assertions(1);
        expect(wrapper.find(Title).text()).toEqual(props.movie.original_title);
      });
    });
    describe("events", () => {});
  });

  describe("snapshot", () => {
    test("should match", () => {
      expect.assertions(1);
      const tree = renderer
        .create(
          <MockedProvider mocks={[]} addTypename={false}>
            <CardContent {...props} />
          </MockedProvider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

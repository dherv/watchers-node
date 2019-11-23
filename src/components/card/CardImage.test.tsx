import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";

import CardImage, { Image } from "./CardImage";
import CardRating from "./CardRating";

describe("CardImage", () => {
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
  const props = {
    movie,
    theme: {
      rating: {
        size: "48",
        line: "4px",
        leftLine: "20%",
        rightLine: "25%",
        fontSize: ".9rem"
      }
    }
  };
  const wrapper = shallow(<CardImage {...props} />);

  describe("CardImage component", () => {
    describe("user interface", () => {
      test("should display one CardRating", () => {
        expect.assertions(1);
        expect(wrapper.find(CardRating)).toHaveLength(1);
      });
      test("should display an Image styled component with src = props.image_url", () => {
        expect.assertions(1);
        expect(wrapper.find(Image)).toHaveLength(1);
      });
    });
    describe("events", () => {});
  });

  // describe("snapshot", () => {
  //   test("should match", () => {
  //     expect.assertions(1);
  //     const tree = renderer.create(<CardImage {...props} />).toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
  // });
});

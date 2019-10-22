import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";

import CardImage, { Image } from "./CardImage";
import CardRating from "./CardRating";

describe("CardImage", () => {
  const props = {
    src: "",
    rating: 9.0,
    title: "El Camino: A Breaking Bad Movie"
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

  describe("snapshot", () => {
    test("should match", () => {
      expect.assertions(1);
      const tree = renderer.create(<CardImage {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

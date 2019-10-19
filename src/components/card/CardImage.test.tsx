import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";

import CardImage from "./CardImage";

describe("CardImage", () => {
  const props = { src: "" };
  const wrapper = shallow(<CardImage {...props} />);

  describe("CardImage component", () => {
    describe("user interface", () => {
      test("should display one CardRating", () => {});
      test("should display an image with src = props.image_url", () => {});
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

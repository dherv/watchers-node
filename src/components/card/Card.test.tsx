import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Card from "./Card";
import CardImage from "./CardImage";
import CardContent from "./CardContent";

describe("Card", () => {
  const props = {};
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
    describe("events", () => {});
  });

  describe("snapshot", () => {
    test("should match", () => {
      expect.assertions(1);
      const tree = renderer.create(<Card {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

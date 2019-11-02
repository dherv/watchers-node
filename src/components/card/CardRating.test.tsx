import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";

import CardRating, {
  Square,
  BorderRise,
  BorderDrop,
  Rating,
  SquareContainer
} from "./CardRating";

describe("CardRating", () => {
  const props = {
    rating: 8.0,
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
  const wrapper = shallow(<CardRating {...props} />);

  describe("CardRating component", () => {
    describe("user interface", () => {
      describe("should display a Square", () => {
        const square_container = wrapper.find(SquareContainer);

        test("should display a green square with correct size = props.size", () => {
          expect.assertions(5);
          expect(square_container.find(Square)).toHaveLength(1);
          const tree = renderer.create(<Square theme={props.theme} />).toJSON();
          expect(tree).toHaveStyleRule("background-color", "#2e8e89");
          expect(tree).toHaveStyleRule("width", `${props.theme.rating.size}px`);
        });

        test("should display one rating", () => {
          expect.assertions(1);
          expect(square_container.find(Rating)).toHaveLength(1);
        });
      });

      test("should display a two white border", () => {
        expect.assertions(2);
        expect(wrapper.find(BorderRise)).toHaveLength(1);
        expect(wrapper.find(BorderDrop)).toHaveLength(1);
      });
    });
    describe("events", () => {});
  });

  describe("snapshot", () => {
    test("should match", () => {
      expect.assertions(1);
      const tree = renderer.create(<CardRating {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

import React from "react";
import { shallow } from "enzyme";
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
    size: 48,
    rating: 8.0
  };
  const wrapper = shallow(<CardRating {...props} />);

  describe("CardRating component", () => {
    describe("user interface", () => {
      describe("should display a Square", () => {
        const square_container = wrapper.find(SquareContainer);

        test("should display a green square with correct size = props.size", () => {
          expect.assertions(2);
          expect(square_container.find(Square)).toHaveLength(1);
          expect(square_container.find(Square).prop("size")).toEqual(
            props.size
          );
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

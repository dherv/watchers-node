import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Series from "./Series";
import Movies from "./movies";

describe("Series", () => {
  const props = {};
  const wrapper = shallow(<Series {...props} />);

  describe("Series component", () => {
    describe("user interface", () => {
      test("should display one Movie component", () => {
        expect.assertions(1);
        expect(wrapper.find(Movies)).toHaveLength(1);
      });
    });
    describe("events", () => {});
  });

  // describe("snapshot", () => {
  //   test("should match", () => {
  //     expect.assertions(1);
  //     const tree = renderer.create(<Series {...props} />).toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
  // });
});

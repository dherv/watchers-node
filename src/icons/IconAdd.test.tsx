import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";

import IconAdd from "./IconAdd";

describe("IconAdd", () => {
  const props = { onClick: jest.fn() };
  const wrapper = shallow(<IconAdd {...props} />);

  describe("IconAdd component", () => {
    describe("user interface", () => {
      test("", () => {});
    });
    describe("events", () => {});
  });

  describe("snapshot", () => {
    test("should match", () => {
      expect.assertions(1);
      const tree = renderer.create(<IconAdd {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

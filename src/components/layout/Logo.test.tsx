import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Logo, { Heading } from "./Logo";

describe("Logo component", () => {
  const wrapper = shallow(<Logo />);
  describe("user interface", () => {
    test("should display one Heading component", () => {
      expect(wrapper.find(Heading).text()).toEqual("watchers");
    });
  });

  describe("snapshot", () => {
    test("should match", () => {
      expect.assertions(1);
      const wrapper = renderer.create(<Logo />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });
});

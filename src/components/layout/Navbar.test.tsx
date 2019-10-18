import { shallow } from "enzyme";
import React from "react";
import Navbar, { Nav } from "./Navbar";
import Menu from "./Menu";
import Logo from "./Logo";

describe("Navbar component", () => {
  const wrapper = shallow(<Navbar />);
  describe("UI", () => {
    test("should display one Nav component", () => {
      expect.assertions(1);
      expect(wrapper.find(Nav)).toHaveLength(1);
    });
    test("should display one Menu component", () => {
      expect.assertions(1);
      expect(wrapper.find(Menu)).toHaveLength(1);
    });
    test("should display one Logo component", () => {
      expect.assertions(1);
      expect(wrapper.find(Logo)).toHaveLength(1);
    });
  });
});

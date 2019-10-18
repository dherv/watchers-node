import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Navbar, { Nav } from "./Navbar";
import Menu from "./Menu";
import Logo from "./Logo";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: ""
    };
  }
}));

describe("Navbar component", () => {
  const wrapper = shallow(<Navbar />);
  describe("user interface", () => {
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

  describe("snapshot", () => {
    test("should match", () => {
      expect.assertions(1);
      const wrapper = renderer.create(<Menu />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });
});

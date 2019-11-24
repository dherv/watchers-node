import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
//import "jest-styled-components";

import Menu, { List } from "../components/layout/Menu";
import ActiveLink from "../components/layout/ActiveLink";

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

describe("Menu component", () => {
  const wrapper = shallow(<Menu />);

  describe("user interface", () => {
    test("should display one list", () => {
      expect.assertions(1);
      expect(wrapper.find(List)).toHaveLength(1);
    });

    test("should display 4 links with the correct text and href", () => {
      expect.assertions(5);
      const items = [
        { href: "/movies", children: "movies" },
        { href: "/series", children: "series" },
        { href: "/watchlist", children: "watchlist" },
        { href: "/likelist", children: "likelist" }
      ];
      const links = wrapper.find(ActiveLink);
      expect(links).toHaveLength(4);
      links.forEach((item, index) => {
        expect(item.props()).toStrictEqual(items[index]);
      });
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

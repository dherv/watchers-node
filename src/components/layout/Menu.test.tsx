import { shallow } from "enzyme";
import React from "react";
import Menu, { List, ListItem } from "./Menu";
import ActiveLink from "./ActiveLink";

describe("Menu component", () => {
  const wrapper = shallow(<Menu />);

  test("should display one list", () => {
    expect.assertions(1);
    expect(wrapper.find(List)).toHaveLength(1);
  });

  test("should display 4 list items", () => {
    expect.assertions(1);
    expect(wrapper.find(ListItem)).toHaveLength(4);
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

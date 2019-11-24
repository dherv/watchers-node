import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
//import "jest-styled-components";

import ActiveLink, { ListItem, Anchor } from "../components/layout/ActiveLink";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { NextRouter } from "next/router";

describe("ActiveLink component", () => {
  const router = ({
    pathname: "/movies",
    route: "/movies",
    asPath: "/movies",
    push: jest.fn()
  } as unknown) as NextRouter;

  const props = {
    href: "/movies",
    children: "movies"
  };

  const wrapper = mount(
    <RouterContext.Provider value={router}>
      <ActiveLink {...props} />
    </RouterContext.Provider>
  );

  describe("user interface", () => {
    test("should display one list item", () => {
      expect.assertions(1);
      expect(wrapper.find(ListItem)).toHaveLength(1);
    });

    test("should display an anchor", () => {
      expect.assertions(1);
      expect(wrapper.find(Anchor)).toHaveLength(1);
    });

    test("should use the props correctly within the anchor tag", () => {
      expect.assertions(2);
      expect(wrapper.find(Anchor).prop("href")).toEqual(props.href);
      expect(wrapper.find(Anchor).text()).toEqual(props.children);
    });
  });

  describe("events", () => {
    test("should call router.push on click", () => {
      expect.assertions(1);
      const link = wrapper.find(Anchor).first();
      link.simulate("click", { preventDefault() {} });
      expect(router.push).toHaveBeenCalledWith(props.href);
    });
  });

  describe("snapshot", () => {
    test("should match", () => {
      expect.assertions(1);
      // wrapper use mount instead of shallow so no need for renderer.create
      expect(wrapper).toMatchSnapshot();
    });
  });
});

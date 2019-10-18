import { shallow, mount } from "enzyme";
import React from "react";
import ActiveLink from "./ActiveLink";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { NextRouter } from "next/router";

describe("ActiveLink component", () => {
  const props = {
    href: "/movies",
    children: "movies"
  };
  const router = ({
    pathname: "/users/$user",
    route: "/users/$user",
    query: { user: "nikita" },
    asPath: "/users/nikita",
    push: jest.fn()
  } as unknown) as NextRouter;

  const wrapper = mount(
    <RouterContext.Provider value={router}>
      <ActiveLink {...props} />
    </RouterContext.Provider>
  );

  describe("UI", () => {
    test("should display an anchor", () => {
      expect.assertions(1);
      expect(wrapper.find("a")).toHaveLength(1);
    });

    test("should use the props correctly within the anchor tag", () => {
      expect.assertions(2);
      expect(wrapper.find("a").prop("href")).toEqual(props.href);
      expect(wrapper.find("a").text()).toEqual(props.children);
    });
  });

  describe("Events", () => {
    test("should call router.push on click", () => {
      expect.assertions(1);
      const link = wrapper.find("a").first();
      link.simulate("click");
      expect(router.push).toHaveBeenCalledWith(props.href);
    });
  });
});

import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Index from "./index";
import Router from "next/router";
jest.mock("next/router", () => ({
  push: jest.fn(),
  prefetch: () => {},
  route: "/",
  pathname: ""
}));

describe("Index", () => {
  const res = { writeHead: jest.fn(), end: jest.fn() };

  describe("Index component", () => {
    describe("user interface", () => {
      test("should redirect to /movies if called from server", async () => {
        expect.assertions(2);
        const props = await Index.getInitialProps({
          res
        });
        const wrapper = shallow(<Index {...props} />);
        expect(res.writeHead).toHaveBeenCalledWith(302, {
          Location: "/movies"
        });
        expect(res.end).toHaveBeenCalledWith();
      });

      test("should redirect to /movies if called from client", async () => {
        expect.assertions(1);
        const props = await Index.getInitialProps({ res: null });
        const wrapper = shallow(<Index {...props} />);
        expect(Router.push).toHaveBeenCalledWith("/movies");
      });
    });
    describe("events", () => {});
  });

  // describe("snapshot", () => {
  //   test("should match", () => {
  //     expect.assertions(1);
  //     const tree = renderer.create(<Index {...props} />).toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
  // });
});

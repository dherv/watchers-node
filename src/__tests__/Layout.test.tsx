import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
//import "jest-styled-components";

import Layout, { Container } from "../components/layout/Layout";
import Navbar from "../components/layout/Navbar";

describe("Layout", () => {
  const props = {
    children: [<div key="1" />, <div key="2" />]
  };
  const wrapper = shallow(<Layout {...props} />);

  describe("Layout component", () => {
    describe("user interface", () => {
      test("should have one Container component", () => {
        expect.assertions(1);
        expect(wrapper.find(Container)).toHaveLength(1);
      });
      test("should display props children inside Container", () => {
        expect.assertions(1);
        expect(wrapper.prop("children")).toHaveLength(2);
      });
      test("should display one Navbar component", () => {
        expect.assertions(1);
        expect(wrapper.find(Navbar)).toHaveLength(1);
      });
    });
    describe("events", () => {});
  });

  // describe("snapshot", () => {
  //   test("should match", () => {
  //     expect.assertions(1);
  //     const tree = renderer.create(<Layout {...props} />).toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
  // });
});

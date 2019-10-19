import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Index from "./index";
import MovieList from "../components/MovieList";
import Layout from "../components/layout/Layout";

describe("Index", () => {
  const props = {};
  const wrapper = shallow(<Index {...props} />);

  describe("Index component", () => {
    describe("user interface", () => {
      test("should display one Layout component", () => {
        expect.assertions(1);
        expect(wrapper.find(Layout)).toHaveLength(1);
      });

      test("should display one MovieList component inside Layout", () => {
        expect.assertions(1);
        const layout = wrapper.find(Layout);
        expect(layout.props().children).toEqual(<MovieList />);
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

import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";

import CardContent, { Title, Metacritic, IMDb } from "./CardContent";

describe("CardContent", () => {
  const props = { title: "Title", theme: {} };
  const wrapper = shallow(<CardContent {...props} />);

  describe("CardContent component", () => {
    describe("user interface", () => {
      test("should display a Title styled component with prop.title", () => {
        expect.assertions(1);
        expect(wrapper.find(Title).text()).toEqual(props.title);
      });
      describe("should display a ScoreContainer", () => {
        test("should display a Metracritic styled component", () => {
          expect.assertions(2);
          expect(wrapper.find(Metacritic)).toHaveLength(1);
          expect(
            wrapper
              .find(Metacritic)
              .find("span")
              .first()
              .text()
          ).toEqual("Metacritic");
        });
        test("should display a IMDb styled component", () => {
          expect.assertions(2);
          expect(wrapper.find(IMDb)).toHaveLength(1);
          expect(
            wrapper
              .find(IMDb)
              .find("span")
              .first()
              .text()
          ).toEqual("IMDb");
        });
      });
    });
    describe("events", () => {});
  });

  describe("snapshot", () => {
    test("should match", () => {
      expect.assertions(1);
      const tree = renderer.create(<CardContent {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

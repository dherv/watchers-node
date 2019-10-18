import { shallow } from "enzyme";
import React from "react";
import Logo, { Heading } from "./Logo";

describe("Logo component", () => {
  test("should have one Heading", () => {
    const logo = shallow(<Logo />);
    expect(logo.find(Heading).text()).toEqual("watchers");
  });
});

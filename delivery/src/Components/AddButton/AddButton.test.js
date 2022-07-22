import React from "react";
import { shallow } from "enzyme";
import Button from "./AddButton.test";

describe("Button", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});

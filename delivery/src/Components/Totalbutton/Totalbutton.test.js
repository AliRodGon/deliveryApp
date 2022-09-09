import React from "react";
import { shallow } from "enzyme";
import Totalbutton from "./Totalbutton";

describe("Totalbutton", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Totalbutton />);
    expect(wrapper).toMatchSnapshot();
  });
});

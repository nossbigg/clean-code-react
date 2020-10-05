import React from "react";
import { mount, shallow } from "enzyme";
import { SomePage } from "./SomePage";
import { MyDatePicker } from "../MyDatePicker/MyDatePicker";

describe("SomePage", () => {
  it("bad: creates an unmaintanably large snapshot", () => {
    const wrapper = mount(<SomePage />);
    expect(wrapper).toMatchSnapshot();
  });

  it("matches snapshot", () => {
    const wrapper = shallow(<SomePage />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders 3 MyComponents with correct props", () => {
    const wrapper = shallow(<SomePage />);

    const matchedMyComponents = wrapper.find(MyDatePicker);
    expect(matchedMyComponents.length).toBe(3);
    const expectedPlaceholders = [
      "placeholder-1",
      "placeholder-2",
      "placeholder-3",
    ];
    matchedMyComponents.forEach((myComponent, idx) => {
      expect(myComponent.prop("placeholder")).toEqual(
        expectedPlaceholders[idx]
      );
    });
  });
});

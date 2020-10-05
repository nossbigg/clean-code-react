import React from "react";
import { mount, shallow } from "enzyme";
import { MyDatePicker } from "./MyDatePicker";
import { DatePicker } from "antd";

describe("MyDatePicker", () => {
  it("bad: creates an unmaintanably large snapshot", () => {
    const wrapper = mount(<MyDatePicker placeholder="some-placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("matches snapshot", () => {
    const wrapper = shallow(<MyDatePicker placeholder="some-placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("passes correct props to DatePicker", () => {
    const wrapper = shallow(<MyDatePicker placeholder="some-placeholder" />);

    const datePicker = wrapper.find(DatePicker);
    expect(datePicker.exists()).toBe(true);

    const expectedProps = { picker: "month", placeholder: "some-placeholder" };
    expect(datePicker.props()).toEqual(expectedProps);
  });
});

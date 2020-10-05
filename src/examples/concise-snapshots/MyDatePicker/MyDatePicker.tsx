import React from "react";
import { DatePicker } from "antd";

type MyDatePickerProps = { placeholder: string };

export const MyDatePicker: React.FC<MyDatePickerProps> = (props) => {
  const { placeholder } = props;
  return <DatePicker placeholder={placeholder} picker="month" />;
};

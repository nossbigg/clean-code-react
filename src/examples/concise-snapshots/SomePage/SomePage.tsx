import React from "react";
import { MyDatePicker } from "../MyDatePicker/MyDatePicker";

export const SomePage: React.FC = () => {
  return (
    <div>
      Some Page
      <MyDatePicker placeholder="placeholder-1" />
      <MyDatePicker placeholder="placeholder-2" />
      <MyDatePicker placeholder="placeholder-3" />
    </div>
  );
};

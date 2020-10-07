import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MyReactComponent, MyReactComponentEdit } from "./MyReactComponent";

describe("MyReactComponent", () => {
  it("displays counter", () => {
    const { getByText } = render(<MyReactComponent />);
    getByText("Counter: 0");
  });

  it("updates counter upon increment", () => {
    const { getByText, getByTestId } = render(<MyReactComponent />);

    const incrementButton = getByTestId("button-increment");
    userEvent.click(incrementButton);

    getByText("Counter: 1");
  });
});

describe("MyReactComponent_Edit", () => {
  it("displays counter", () => {
    const { getByText } = render(<MyReactComponentEdit />);
    getByText("Counter: 0");
  });

  it("updates counter upon increment", () => {
    const { getByText, getByTestId } = render(<MyReactComponentEdit />);

    const incrementButton = getByTestId("button-increment");
    userEvent.click(incrementButton);

    getByText("Counter: 1");
  });
});

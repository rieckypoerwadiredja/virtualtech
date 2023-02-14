import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import CircleButton from "../../component/Button/CircleButton";

test("Circle Button render", () => {
  render(
    <BrowserRouter>
      <CircleButton text="Testing Button" redirectTo="/porto" />
    </BrowserRouter>
  );
  const buttonText = screen.getByText("Testing Button");
  expect(buttonText).toBeInTheDocument();

  fireEvent.click(buttonText);
  expect(window.location.pathname).toBe("/porto");
});

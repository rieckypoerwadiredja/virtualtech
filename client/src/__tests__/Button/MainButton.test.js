import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import MainButton from "../../component/Button/MainButton";

test("Burger Button render", () => {
  render(
    <BrowserRouter>
      <MainButton text="Testing Button" />
    </BrowserRouter>
  );
  const buttonText = screen.getByText("Testing Button");
  expect(buttonText).toBeInTheDocument();
});

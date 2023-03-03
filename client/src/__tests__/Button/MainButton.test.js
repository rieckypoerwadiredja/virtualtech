import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import MainButton from "../../component/Button/MainButton";

const text = "Test Button";
const redirectTo = "/test";

test("Burger Button render", () => {
  render(
    <BrowserRouter>
      <MainButton text={text} redirectTo={redirectTo} />
    </BrowserRouter>
  );
  const buttonText = screen.getByText(text);
  expect(buttonText).toBeInTheDocument();
});

test("redirects to the correct page when clicked", () => {
  render(
    <BrowserRouter>
      <MainButton text={text} redirectTo={redirectTo} />
    </BrowserRouter>
  );
  const button = screen.getByRole("link");
  userEvent.click(button);
  expect(window.location.pathname).toEqual(redirectTo);
});

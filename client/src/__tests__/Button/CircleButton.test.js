import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import CircleButton from "../../component/Button/CircleButton";

const text = "Test Button";
const redirectTo = "/test";

test("Circle Button render", () => {
  render(
    <BrowserRouter>
      <CircleButton text={text} redirectTo={redirectTo} />
    </BrowserRouter>
  );
  const btn = screen.getByTestId("circle-btn");
  expect(btn).toBeInTheDocument();
});

test("redirects to the correct page when clicked", () => {
  render(
    <BrowserRouter>
      <CircleButton text={text} redirectTo={redirectTo} />
    </BrowserRouter>
  );
  const btn = screen.getByRole("link");
  userEvent.click(btn);
  expect(window.location.pathname).toEqual(redirectTo);
});

// TODO: resposive
test("render Circle Button in mobile phone 375px", () => {
  render(
    <BrowserRouter>
      <CircleButton text={text} redirectTo={redirectTo} />
    </BrowserRouter>
  );
  const btn = screen.getByTestId("circle-btn");
  expect(btn).toHaveClass("w-[150px] h-[150px]");
});

test("render Circle Button in mobile phone 425px", () => {
  render(
    <BrowserRouter>
      <CircleButton text={text} redirectTo={redirectTo} />
    </BrowserRouter>
  );
  const btn = screen.getByTestId("circle-btn");
  expect(btn).toHaveClass("w-[150px] h-[150px]");
});

test("render Circle Button in tablet 550px", () => {
  render(
    <BrowserRouter>
      <CircleButton text={text} redirectTo={redirectTo} />
    </BrowserRouter>
  );
  const btn = screen.getByTestId("circle-btn");
  expect(btn).toHaveClass("w-[150px] h-[150px]");
});

test("render Circle Button in tablet 768px", () => {
  render(
    <BrowserRouter>
      <CircleButton text={text} redirectTo={redirectTo} />
    </BrowserRouter>
  );
  const btn = screen.getByTestId("circle-btn");
  expect(btn).toHaveClass("w-[150px] h-[150px]");
});

test("render Circle Button in tablet 850px", () => {
  render(
    <BrowserRouter>
      <CircleButton text={text} redirectTo={redirectTo} />
    </BrowserRouter>
  );
  const btn = screen.getByTestId("circle-btn");
  expect(btn).toHaveClass("w-[150px] h-[150px]");
});

test("render Circle Button in dekstop 1024px", () => {
  render(
    <BrowserRouter>
      <CircleButton text={text} redirectTo={redirectTo} />
    </BrowserRouter>
  );
  const btn = screen.getByTestId("circle-btn");
  expect(btn).toHaveClass("w-[150px] h-[150px]");
});

test("render Circle Button in dekstop 1281px", () => {
  render(
    <BrowserRouter>
      <CircleButton text={text} redirectTo={redirectTo} />
    </BrowserRouter>
  );
  const btn = screen.getByTestId("circle-btn");
  expect(btn).toHaveClass("xlX:w-[200px] xlX:h-[200px]");
});

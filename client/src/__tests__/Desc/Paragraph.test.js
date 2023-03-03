import React from "react";
import { screen, render } from "@testing-library/react";

import Paragraph from "../../component/Desc/Paragraph";

const text = "Testing Button";

test("Paragraph Button render", () => {
  render(<Paragraph text={text} />);
  const paragraph = screen.getByText(text);
  expect(paragraph).toBeInTheDocument();
  expect(paragraph.textContent).toBe(text);
});

test("renders paragraph with default style", () => {
  render(<Paragraph text={text} />);
  const paragraph = screen.getByText(text);
  expect(paragraph).toBeInTheDocument();
  expect(paragraph).not.toHaveClass("font-semibold");
  expect(paragraph).not.toHaveClass("font-normal");
});

test("renders paragraph with bold style", () => {
  render(<Paragraph text={text} bold={true} />);
  const paragraph = screen.getByText(text);
  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveClass("font-semibold");
});

test("renders paragraph with medium style", () => {
  render(<Paragraph text={text} medium={true} />);
  const paragraph = screen.getByText(text);
  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveClass("font-medium");
});

// TODO: resposive
test("render paragraph page in mobile phone", () => {
  render(<Paragraph text={text} />);
  const paragraph = screen.getByText(text);
  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveClass("text-lg");
});

test("render paragraph page in tablet", () => {
  render(<Paragraph text={text} />);
  const paragraph = screen.getByText(text);
  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveClass("text-lg");
});

test("render paragraph page in dekstop", () => {
  render(<Paragraph text={text} />);
  const paragraph = screen.getByText(text);
  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveClass("text-lg");
});

import React from "react";
import { screen, render } from "@testing-library/react";

import MiniTitleDesc from "../../component/Desc/MiniTItleDesc";

const title = "Test Title";
const desc = "Test Description";

test("MiniTitleDesc render", () => {
  render(<MiniTitleDesc title="Test Title" desc="Test Description" />);
  const title = screen.getByText("Test Title");
  const desc = screen.getByText("Test Description");
  expect(title).toBeInTheDocument();
  expect(desc).toBeInTheDocument();
});

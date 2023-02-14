import React from "react";
import { screen, render } from "@testing-library/react";

import MiniTitleDesc from "../../component/Desc/MiniTItleDesc";

test("Paragraph Button render", () => {
  render(<MiniTitleDesc title="Title" desc="Desc" />);
  const title = screen.getByText("Title");
  const desc = screen.getByText("Desc");

  expect(title).toBeInTheDocument();
  expect(desc).toBeInTheDocument();
});

import React from "react";
import { screen, render } from "@testing-library/react";

import Paragraph from "../../component/Desc/Paragraph";

test("Paragraph Button render", () => {
  render(<Paragraph text="Testing Button" />);
  const text = screen.getByText("Testing Button");

  expect(text).toBeInTheDocument();
});

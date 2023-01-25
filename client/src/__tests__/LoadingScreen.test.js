import React from "react";
import { screen, render } from "@testing-library/react";

import LoadingScreen from "../component/Loading/LoadingScreen";

test("render loading screen", () => {
    render(<LoadingScreen />);
    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeInTheDocument()
})

test("reder slide when getData true in loading screen", () => {
    render(<LoadingScreen getdata/>)
    const slideDiv = screen.getByTestId("slide")
    expect(slideDiv).toBeInTheDocument()
})
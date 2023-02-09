/* eslint-disable testing-library/no-node-access */
import React from "react";
import { screen, render, act, fireEvent } from "@testing-library/react";

import TitlePage from "../../component/Heading/PageTitle.jsx";


test("render title page with same text and wthout highlighter", () => {
    render(<TitlePage text="Photography Services" />)
    const title = screen.getByText("Photography Services")
    expect(title).toBeInTheDocument()
    expect(title.querySelector(".highlighter")).not.toBeInTheDocument()
})

test("render title page with same text and with highlighter", () => {
    render(<TitlePage text="Photography" highlighter="Services"/>)
    const title = screen.getByText("Photography")
    const highlighter = screen.getByText("Services")

    expect(title).toBeInTheDocument()
    expect(highlighter).toBeInTheDocument()
    expect(title.querySelector(".highlighter")).toBeInTheDocument()
})

// TODO: resposive
test("render title page in mobile phone", () => {
    render(<TitlePage text="Photography" highlighter="Services"/>)
    // eslint-disable-next-line testing-library/no-unnecessary-act
    // act(() => {
    //     window.innerWidth = 450
    //     fireEvent(window, new Event('resize'))
    // })
    // render(<TitlePage text="Photography Services" />)
      
    const title = screen.getByRole("heading")
    expect(title).toBeInTheDocument()
    expect(title.textContent).toBe("Photography Services")
    // expect(title).toHaveStyle({fontSize: '55px' })
    expect(title).toHaveClass("text-title-xs")
    expect(title).toHaveClass("smX:text-title-sm")    
})

test("render title page in tablet", () => {
    render(<TitlePage text="Photography" highlighter="Services"/>)

    const title = screen.getByRole("heading")
    expect(title).toBeInTheDocument()
})

test("render title page in dekstop", () => {
    render(<TitlePage text="Photography" highlighter="Services"/>)

    const title = screen.getByRole("heading")
    expect(title).toBeInTheDocument()
})
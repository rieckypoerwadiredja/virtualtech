/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      inset: {
        "web-sm": "1.25rem",
        "web-md": "2.50rem",
        "web-lg": "5rem",
      },
      margin: {
        "section-sm": "1.75rem",
      },
      padding: {
        "web-sm": "1.25rem",
        "web-md": "2.50rem",
        "web-lg": "5rem",
        "section-sm": "1.75rem",
      },
      fontSize: {
        "title-xs": [
          "50px",
          {
            lineHeight: "1",
            letterSpacing: "-0.050em",
          },
        ],
        "title-sm": [
          "55px",
          {
            lineHeight: "1",
            letterSpacing: "-0.050em",
          },
        ],
        "title-md": [
          "85px",
          {
            lineHeight: "1",
            letterSpacing: "-0.050em",
          },
        ],
        "title-lg": [
          "115px",
          {
            lineHeight: "1",
            letterSpacing: "-0.050em",
          },
        ],
        "h2-sm": [
          "44px",
          {
            lineHeight: "1",
            letterSpacing: "-0.050em",
          },
        ],
        "h2-md": [
          "48px",
          {
            lineHeight: "1",
            letterSpacing: "-0.050em",
          },
        ],
        "h2-lg": [
          "68px",
          {
            lineHeight: "1",
            letterSpacing: "-0.050em",
          },
        ],
        "h3-sm": [
          "38px",
          {
            lineHeight: "1",
            letterSpacing: "-0.050em",
          },
        ],
        "h3-md": [
          "50px",
          {
            lineHeight: "1",
            letterSpacing: "-0.050em",
          },
        ],
        "h3-card-sm": [
          "26px",
          {
            lineHeight: "1",
            letterSpacing: "-0.050em",
          },
        ],
        "h3-card-lg": [
          "32px",
          {
            lineHeight: "1",
            letterSpacing: "-0.050em",
          },
        ],
        "quote-sm": [
          "27px",
          {
            lineHeight: "1.5",
          },
        ],
        "quote-md": [
          "30px",
          {
            lineHeight: "1.5",
          },
        ],
        "quote-lg": [
          "40px",
          {
            lineHeight: "1.5",
          },
        ],
        "big-text-sm": [
          "90px",
          {
            lineHeight: "1",
            letterSpacing: "1",
          },
        ],
        "big-text-md": [
          "111px",
          {
            lineHeight: "1",
            letterSpacing: "1",
          },
        ],
      },
      colors: {
        blackScreen: {
          800: "#252925",
          400: "#383c38",
        },
        whiteFont: {
          400: "#FFFFFFB3",
        },
        blackFont: {
          800: "#1c201c",
          400: "#939dac",
        },
        "custome-green": {
          800: "#2d9d6e",
          400: "#adbf64",
        },
        "trans-white": {
          400: "#ffffff33",
          800: "#ffffff80",
        },
      },
      screens: {
        smX: "375px",
        smXL: "550px",
        mdXL: "850px",
        xlX: "1281px",
      },
    },
  },
  plugins: [],
};

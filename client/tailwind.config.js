/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        "web-sm": "1.25rem",
        "web-md": "2.50rem",
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

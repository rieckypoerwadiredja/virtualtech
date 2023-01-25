/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blackScreen":{
          "800": "#252925",
          "400": "#383c38"
        },
        "blackFont": {
          "800":"#1c201c",
          "400":"#939dac",
        },
        "custome-green":{
          "800": "#2d9d6e",
          "400": "#adbf64"
        }
      }
    },
  },
  plugins: [],
}

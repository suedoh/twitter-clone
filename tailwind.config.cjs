/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // list of available themes https://daisyui.com/docs/themes/
  daisyui: {
    themes: ["dark"]
  }
};

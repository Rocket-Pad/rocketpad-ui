/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#28DBD1",
        primary: "#0A1F2F",
      },
      backgroundImage: {
        btn: "linear-gradient(90.37deg, #28DBD1 0.27%, #1DA1F3 30%, #2890DB 98.69%), linear-gradient(0deg, #D9D9D9, #D9D9D9)",
      },
      fontFamily: {
        raj: ["Rajdhani", "sans-serif"], // 'CustomFont' is the name you want to use for the font
      },
    },
  },
  plugins: [],
};

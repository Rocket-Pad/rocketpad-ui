/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A1F2F",
        secondary: "#28DBD1",
        tertiary: '#02121D',
        "white-50": "#FFFFFF50", 
      },
      backgroundImage: {
        btn: "linear-gradient(90.37deg, #28DBD1 0.27%, #1DA1F3 30%, #2890DB 98.69%), linear-gradient(0deg, #D9D9D9, #D9D9D9)",
        stakingDesktop: "url('./src/assets/images/stakingBanner.png')",
        stakingMobile: "url('./src/assets/images/stakingBannerMobile.png')"
      },
      fontFamily: {
        raj: ["Rajdhani", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"]
      },
      spacing: {
        '5.5': '22px',
        '7.5': '30px'
      },
    },
  },
  plugins: [],
};

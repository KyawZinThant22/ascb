/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: "1px",
    },
    extend: {
      colors: {
        primary: "#5a5ab5",
        pink: "#ff8399",
        lightBlue: "#7ca6fa",
        darkGray: "#48476d",
        yellow: "#fadfa4",
        violet: "#cda6ec",
        green: "#8df3ab",
        lightGray: "#e9e9ed",
        pureLight: "#ececf266",
        veryLightBlue: "#d3f5f3",
        veryLightYellow: "##ffe1a1",
        bgWhite: "#ffffff",
      },
    },
  },
  plugins: [],
};

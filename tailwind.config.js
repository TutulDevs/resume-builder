module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat"],
      },
      colors: {
        header: "#0077b6",
        footer: "#03045e",
      },
      minHeight: {
        7: "7vh",
        10: "10vh",
        15: "15vh",
        83: "83vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

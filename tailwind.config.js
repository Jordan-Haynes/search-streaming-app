module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      bebas: ["Bebas Neue", "cursive"],
      poppins: ["Poppins", "sans-serif"],
    },
    /*
    colors: {
      background: "#000000",
      primary: "#FFFFFF",
      secondary: "#9E9E9E",
      active: "#F40812",
      light: "#121212",
    },
    */
    // Work in progress color scheme
    colors: {
      background: "#ACF2E5",
      primary: "#F2622E",
      secondary: "#F28D35",
      active: "#F2762E",
      light: "#5EBFAD",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};

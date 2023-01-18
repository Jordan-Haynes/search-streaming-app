module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      bebas: ["Bebas Neue", "cursive"],
      poppins: ["Poppins", "sans-serif"],
    },
    
    // Work in progress color scheme
    colors: {
      background: "#2d444b",
      primary: "#FFFFFF",
      secondary: "#878189",
      active: "#20cc7b",
      light: "#ffffff",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};

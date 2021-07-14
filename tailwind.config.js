module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // extend: {
    //   colors:{
    //     white: "var(--white: hsl(0, 0%, 100%)",
    //     "light-gray": "var(--light-gray: hsl(0, 0%, 98%)",
    //     "dark-gray": "var(-dark-gray:hsl(0, 0%, 52%)",
    //     "dark-blue": "var(--dark-blue)",
    //     "lightmode-blue-bg": "var(--lightmode-blue-bg:hsl(200, 15%, 8%)",
    //     "darkmode-blue-bg": "var(--darkmode-blue-bg:hsl(207, 26%, 17%)",
    //   }
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        desRed: "hsl(0, 36%, 70%)",
        softRed: "hsl(0, 93%, 68%)",
        darkRed: "hsl(0, 6%, 24%)",
        bagcol: "#fff8f8",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        grad: "linear-gradient(135deg, #f8bfbf, #ee8c8c)",
      },
      screens: {
        lg: "1130px",
      },
    },
  },

  plugins: [],
};

module.exports = config;

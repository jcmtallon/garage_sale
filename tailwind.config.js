module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "-apple-system",
        "system-ui",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        primary: {
          50: "#E9FAF7",
          100: "#BEE7E0",
          200: "#93D3C8",
          300: "#68BFB0",
          400: "#40AD9A",
          500: "#179A83",
          600: "#008F76",
          700: "#027763",
          800: "#046453",
          900: "#054E42",
        },
      },
    },
  },
};

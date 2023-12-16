export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { cyan: "#00a6d6" },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
        serif: ["Roboto Slab Medium", "Roboto Slab", "serif"],
      },
      fontSize: {
        "3xl": ["1.9375rem", { lineHeight: "1.3", fontWeight: "500" }],
        "5xl": ["3rem", { lineHeight: "1.25", fontWeight: "500" }],
      },
    },
  },
  plugins: [],
};

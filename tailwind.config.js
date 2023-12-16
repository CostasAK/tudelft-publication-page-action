import plugin from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "#00a6d6",
        white: "#ffffff",
        black: "#000000",
        "dark-blue": "#0c2340",
        turquoise: "00b8c8",
        blue: "#0076c2",
        purple: "#6f1d77",
        pink: "#ef60a3",
        raspberry: "#a50034",
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
        serif: ["Roboto Slab Medium", "Roboto Slab", "serif"],
        code: [
          "Fira Code",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      fontSize: {
        base: ["1rem", { lineHeight: "1.625", fontWeight: "400" }],
        xl: ["1.3125rem", { lineHeight: "1.3", fontWeight: "500" }],
        "3xl": ["1.9375rem", { lineHeight: "1.3", fontWeight: "500" }],
        "5xl": ["3rem", { lineHeight: "1.25", fontWeight: "500" }],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("all-child", "& *");
    }),
  ],
};

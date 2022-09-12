/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      pink: "#E64980",
      dark: "#25262B",
      white: "#FFFFFF",
      gray: "#E9ECEF",
      link: "#228BE6",
    },
    fontFamily: {
      yugothic: [
        "Yu Gothic",
        "游ゴシック",
        "YuGothic",
        "游ゴシック体",
        "ヒラギノ角ゴ Pro W3",
        "メイリオ",
        "sans-serif",
      ],
      avenir: ["Avenir Next"],
    },
  },
  plugins: [],
};

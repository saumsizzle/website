/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#002b36",
        white: "#fdf6e3",
        indigo: {
          100: "#ebf4ff",
          200: "#c3dafe",
          300: "#a3bffa",
          400: "#7f9cf5",
          500: "#667eea",
          600: "#5a67d8",
          700: "#4c51bf",
          800: "#434190",
          900: "#3c366b",
        },
        purp: {
          100: "#FAF0E6",
          200: "#B9B4C7",
          300: "#5C5470",
          400: "#352F44"
        }
      },
    },
  },
  plugins: [],
};

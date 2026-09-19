/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
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
        black: "#0D0D0D",
        white: "#f3f4f6",
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

        // Light mode: pastel keycap palette - dusty pink, sage mint, powder blue, lavender
        "mint-mist": "#d8ebe6",
        "sage-mint": "#a8d8c9",
        "powder-blue": "#a9cfe0",
        "dusty-pink": "#f2b8c6",
        "pink-card": "#f6d2d9",
        lavender: "#c9c2e8",
        cream: "#f2ecdf",
        "ink-light": "#3a3454",

        // Dark mode: solarized-dark-inspired eeriness
        "solarized-void": "#021b20",
        "solarized-base03": "#002b36",
        "solarized-base02": "#073642",
        "solarized-base01": "#586e75",
        "solarized-base1": "#93a1a1",
        "solarized-red": "#dc322f",
        "solarized-orange": "#cb4b16",
        "ink-dark": "#eee8d5",
      },
      fontFamily: {
        "dark-title": ["var(--font-title-dark)", "serif"],
        "dark-body": ["var(--font-body-dark)", "serif"],
        "light-title": ["var(--font-title-light)", "sans-serif"],
        "light-body": ["var(--font-body-light)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

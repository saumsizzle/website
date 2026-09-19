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

        // Light mode: cute pastels - lavender, periwinkle, cream
        lavender: "#e6defb",
        periwinkle: "#c2c5f5",
        "periwinkle-deep": "#8b8ee0",
        cream: "#fdfbff",
        blush: "#f6d6e3",
        "ink-light": "#3a3454",

        // Dark mode: truly dark, gothic gremlin palette
        void: "#08070b",
        "void-deep": "#020103",
        plum: "#1c1024",
        blood: "#7a1030",
        "blood-bright": "#c81e4a",
        "ink-dark": "#e7def0",
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

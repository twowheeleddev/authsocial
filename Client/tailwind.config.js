// tailwind.config.js
export default {
  darkMode: "class", // Corrected to 'darkMode'
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in src
  ],
  theme: {
    extend: {
      // Custom colors and styles
      colors: {
        magenta: {
          DEFAULT: "#FF00FF", // Default magenta color
          light: "#FF66FF", // Light variant of magenta (added #)
          dark: "#CC00CC", // Dark variant of magenta (added #)
        },
        // Fixed placement of custom colors
        "neon-pink": "#FF69B4",
        "neon-green": "#39FF14",
        "neon-blue": "#1B03A3",
        "neon-yellow": "#FFFF33",
        "neon-red": "#FF073A",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom font family
      },
    },
  },
  plugins: [],
};

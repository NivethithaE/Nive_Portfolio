// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // 🔑 CRITICAL FIX: Tell Tailwind to look for classes in all files in the 'src' directory
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pl: ['Playfair Display', 'serif'],
        hk: ['Hanken Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

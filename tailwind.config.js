/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        glock: ['Gloock', 'serif'],
        rubix: ['Rubik', 'sans-serif'],

      },
    },
  },
  plugins: [],
}



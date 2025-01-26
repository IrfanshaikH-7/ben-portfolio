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
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'scroll': 'scroll 20s linear infinite',
      },
      colors: {
        'primary': '#8EB486',
        white: '#e3e0d8',
      },
    },
  },
  plugins: [],
}



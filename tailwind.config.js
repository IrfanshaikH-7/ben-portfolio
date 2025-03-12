/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '88rem', // 1408px
      },
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
        'para':'#16404D',
        'primary': '#8EB486',
        white: '#e3e0d8',
        'greeny': '#8EB486'
      },
    },
  },
  plugins: [],
}



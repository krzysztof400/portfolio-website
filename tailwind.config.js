/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1E2429',
          secondary: '#ABB2B9',
          accent: '#b0c4de',
        },
        fontFamily: {
          sans: ['Arial', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
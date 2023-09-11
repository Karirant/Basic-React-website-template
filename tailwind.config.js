/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        'primary': '#dfcdc9',
        'secondary': '#34302d', 
        'tertiary': '#8b7e78',
        'quaternary': '#dde1e0'
      }
    },
  },
  plugins: [],
}


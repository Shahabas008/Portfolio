/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'PrimaryColor': '#e2dfdc',
      'SecondaryColor': '#a6a6a6',
      'TertiaryColor': '#483C32',
      'Black': '#030303',
      'White': '#FFFFFF',
    },
    extend: {
      fontFamily: {
        'Urbanist': ['Urbanist', 'sans-serif'],
        'Gravitica': ["Gravitica", "sans-serif"],
        'Gilroy': ["Gilroy", "sans-serif"],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "sm": "320px",
      'md': '640px',
      'lg': '1080px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    colors: {
      'PrimaryColor': '#3F418C',
      'SecondaryColor': '#F9EDED',
      'TertiaryColor': '#9A9A8F',
      'Black': '#15141A',
      'White': '#FFFFFF',
      "Red": "#FF2B00",
    },
    extend: {
      fontFamily: {
        'Cabinet': ["Cabinet", "serif"],
        'Gilroy': ["Gilroy", "sans-serif"],
      },
    },
  },
  plugins: [],
}


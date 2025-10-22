/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lgx': '1240px',
      },
      fontFamily: {
        playFair: ['Playfair Display', 'serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Space: ['Space Grotesk', 'sans-serif']
      },
      colors: {
        'Main': '#262728',
        'Main_Hv': '#262728e6',
        'Main_Tx': '#292929'
      },
      boxShadow: {
        'SDW_1': '0 0 5px 0 rgba(0, 0, 0, 0.2)',
        'SDW_2': '0 10px 25px rgba(38,39,40,.1)'
      },
    },
  },
  plugins: [],
}

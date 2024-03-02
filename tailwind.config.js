/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors:{
        'primaryBg':'#000814',
        'primaryWhite':'##F1F2FF',
        'secondaryText':'#FFD60A',
        'blackText':'#000814',
        'topBar':'#161D29',
        'boxBorder':'##2C333F',
        'topbarText':'#DBDDEA',
      },
    },
  },
  plugins: [],
}

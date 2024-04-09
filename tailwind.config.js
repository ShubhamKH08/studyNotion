/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
   
    extend: {
      colors:{
        'primaryBg':'#000814',
        'primaryWhite':'#F1F2FF',
        'secondaryText':'#FFD60A',
        'blackText':'#000814',
        'topBar':'#161D29',
        'grayPopUp':'#161D29',
        'grayWhite':'#2C333F',
        'boxBorder':'##2C333F',
        'topbarText':'#DBDDEA',
        'yellowBg':'#FFD60A',
        'grayText':'#999DAA',
        
        
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

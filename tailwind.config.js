/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
  
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js",
     'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fffaf4',
        dark:'#212121',//for dark mode
        secondary: '#8e8a1f', // Added quotes around color value
        shantaFooter: '#f3ebdd', // Added quotes around color value
        Color: '#3c3c3b', //text color
        headertogol:'#f3ebdd',
        manubar:'#15171bf2' //manubar bg color
      },
      spacing: {
        '7.5p': '7.5%',
      },
    }
  }, // Added comma here
  plugins: [
    require('flowbite/plugin')
  ],
}

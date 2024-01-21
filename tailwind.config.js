/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        secondary : '#F3F6F8',
        accent : '#FCC841',
        lightBlue : '#385FF6',
        background: 'white',
        grey: '#666892',
        linkBlue: '#385FF6',
      },
      backgroundImage: {
        'hero_left-cube': "url('./img/hero/hero_left-cube.webp')",
        'desktop-background': "url('./img/benefits/desktop-background.webp')",
      },
      screens: {
        'd2xl': {'max': '1535px'},
        'dxl': {'max': '1279px'},
        'dlg': {'max': '1023px'},
        'dmd': {'max': '767px'},
        'dsm': {'max': '639px'},
      }
      
    },
  },
  plugins: [ 'prettier-plugin-tailwindcss',
  function ({ addVariant }) {
    addVariant('child', '& > *');
    addVariant('child-hover', '& > *:hover');
  }]
}

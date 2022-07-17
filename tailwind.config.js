/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        lightgray: '#424549',
        mediumgray: '	#36393e',
        darkgray: '#282b30',
        tonedblack: '#1e2124',
        lightblack: '#111',
        bordergray: '#2f2f2f'

      },

      fontFamily: {
        'os': ['Open Sans', 'sans-serif'],
        'popp': ['Poppins', 'sans-serif'],
      },


    },
  },

  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],

}

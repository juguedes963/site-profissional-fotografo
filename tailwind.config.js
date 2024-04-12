/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    height:{
      '150': '35rem',
      '120': '30rem',
      '110': '28rem'
    },
    extend: {
      backgroundImage: {
        'section-home-one': "url('/src/assets/home-1.jpg')",
        'section-home-orcar': "url('/src/assets/home-2.png')"
      },
      colors: {
        'tahiti': {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        '999999': "#999999",
        'E3E3E3': "#E3E3E3",
        'transparent-black': "#00000085"
      },
      margin: {
        '1/4': '25%',
        '2/4': '50%'
      },
      padding: {
        '18': '4.5rem'
      },
      width: {
        '150': '35rem',
        '120': '30rem',
        '110': '28rem'
      },
      fontFamily: {
        'pixel': ['Pixelify Sans', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive']
      },
      height: theme => ({
        auto: 'auto',
        ...theme('spacing'),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '1/14': '7.1428%',
        '2/14': '14.2857%',
        '3/14': '21.4309%',
        '4/14': '28.5737%',
        '5/14': '35.7165%',
        '6/14': '42.8593%',
        '7/14': '50.0021%',
        '8/14': '57.1449%',
        '9/14': '64.2898%',
        '10/14': '71.4326%',
        '11/14': '78.5808%',
        '12/14': '85.7288%',
        '13/14': '92.8716%',
        '14/14': '99%',
        customMenu: '45%',
        full: '100%',
        section: '60vh',
        screen: '100vh',
        headerImage: '10rem',
        fit: 'fit-content',
      })
    },
  },
  plugins: [],
}
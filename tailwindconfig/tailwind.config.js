/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../frontend/html/*.html","../frontend/script/*.js"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 12s linear normal forwards',
        'move-back': 'moveBack 5s linear normal forwards',
        'move-forward': 'moveForward 5s linear normal forwards',
      },
      keyframes: {
        'spin': {
          '100%': {transform: 'rotateZ(360deg)'},
        },
        'moveBack': {
          '0%': {
            bottom: '0',
            right: '0',
          },
          '25%': {
            bottom: '11rem',
            right: '0',
          },
          '50%': {
            bottom: '11rem',
            right: '34.5rem',
          },
          '100%': {
            bottom: '0rem',
            right: '34.5rem',
          }
        },
        'moveForward': {
          '0%': {
            top: '0',
            left: '0',
          },
          '25%': {
            top: '11rem',
            left: '0',
          },
          '50%': {
            top: '11rem',
            left: '34.5rem',
          },
          '100%': {
            top: '0',
            left: '34.5rem'
          },
        }
      },
      backgroundImage: {
        'gradientColor': "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
        'gradientColor2': 'linear-gradient(to right, #42275a, #734b6d)',
      },
      backgroundColor: {
        'gradientColor': "#FF3CAC",
        'gradientColor2': '#42275a',
      },
      colors: {
        'gray-yes': '#d2d0dd',
        'gray-no': "#f3f4f8",
      },
    },
  },
  plugins: [],
}



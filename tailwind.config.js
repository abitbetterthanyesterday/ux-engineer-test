/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   safelist: [
      {
         pattern: /delay-*/
      }
   ],

   theme: {
      extend: {
         container: {
            center: true,
            padding: '2rem'
         },
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
         },
         fontFamily: {
            display: [`'Press Start 2P'`, 'sans-serif']
         }
      },
      transitionProperty: {
         width: 'width'
      },
      animation: {
         spin: 'spin 1s linear infinite',
         slideUp: 'slideUp 360s linear alternate-reverse infinite',
         slideDown: 'slideDown 360s linear alternate-reverse infinite',
         fadeIn: 'fadeIn 1s ease-out',
         snack: 'snack 300ms ease-in forwards'
      },
      keyframes: {
         snack: {
            '0%': {
               transform: 'translateX(0)'
            },
            '100%': {
               transform: 'translateX(110%)',
            }
         },
         spin: {
            '0%': {
               transform: 'rotate(0deg)'
            },
            '100%': {
               transform: 'rotate(360deg)'
            }
         },
         slideUp: {
            '0%': {
               transform: '-translateY(100%)'
            },
            '100%': {
               transform: 'translateY(0%)'
            }
         },
         slideDown: {
            '0%': {
               transform: 'translateY(0)'
            },
            '100%': {
               transform: '-translateY(100%)'
            }
         },
         fadeIn: {
            '0%': {
               opacity: 0
            },
            '100%': {
               opacity: 1
            }
         }
      }
   },
   plugins: []
}


/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         container: {
            center: true,
            padding: "2rem",
         },
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          }
      },
      animation: {
         slideUp: "slideUp 360s linear alternate-reverse infinite",
         slideDown: "slideDown 360s linear alternate-reverse infinite",
      },
      keyframes:{
         slideUp:{
            '0%':{
               transform: '-translateY(100%)',
            },
            '100%':{
               transform: 'translateY(0%)',
            }
         },
         slideDown:{
            '0%':{
               transform: 'translateY(0)',
            },
            '100%':{
               transform: '-translateY(100%)',
            }
      }
      }
   },
   plugins: [],
};


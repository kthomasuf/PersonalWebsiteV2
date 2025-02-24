/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        saira: ["Saira Extra Condensed", "sans-serif"],
        source: ["Source Code Pro", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        'bg-gray': '#092635',
        'bg-black': '#001220',
        'bg-cyan': '#00ADB5',
        'bg-red': "#EA5455",
        'bg-orange': '#F07B3F',
        'bg-yellow': '#FFD460',
        'bg-purple': '#22092C',
        'sp-white': '#EEEEEE',
        'green1': '#9EC8B9',
        'green2': '#5C8374',
        'green3': '#1B4242',
        'blue1': '#00A8CC',
        'blue2': '#0C7B93',
        'blue3': '#27496D',
        'blue4': '#142850'
      },
      clipPath: {
        'slanted': 'polygon(0_0, 100%_0, 100%_85%, 0_100%)',
      },
      backgroundImage: {
        'ocean': "url('./assets/ocean.svg')"
      }
    },
  },
  plugins: [],
}


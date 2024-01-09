import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'marrom': "#601802",
      'marromVermelho': "#AA2704",
      'pessego': "#FFB05D",
      'pessego2': "#fae7d4",
      'laranjao': "#FE800A",
      'vermelho': "#E5392C",
      'white': "#FFFFFF",
      'black': '#000000',
      'gray': '#E2DCE1',    },
    extend: {
    },
  },
  plugins: [nextui({ 
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#FFFFFF",
          },
          warning:{
            DEFAULT: "#FFB05D",
          }
        
        },
      },
    }
  })]
}

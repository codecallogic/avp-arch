/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
    },
    fontFamily: {
      'montserrat': ['var(--font-montserrat)'],
      'above': ['var(--font-above)']
    },
    colors: {
      'schemeone': '#98C62B',
      'schemetwo': '#247BA0',
      'schemethree': '#FF1654',
      'schemefour': '#564E58',
      'schemefive': '#252627',
      'schemesix': '#D8E3E5',
      'schemeseven': '#b7b7b7',
      'schemeeight': '#242529',
      'schemenine': '#404040',
      'schemeten': '#1E1F23',
      'schemeeleven': '#61B863',
      'error': '#C91618',
      'white': '#FFFFFF',
      'black': '#000000',
      'grey': '#2D2E33'
    },
  },
  plugins: [],
};

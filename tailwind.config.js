/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.ts',
    './src/**/*.tsx',
    './app/**/*.ts',
    './app/**/*.tsx',
  ],
  theme: {
    /**
     * Colors
     * @see https://colorhunt.co/palette/232931393e464ecca3eeeeee
     */
    colors: {
      transparent: 'transparent',
      primary: '#232931',
      secondary: '#393E46',
      accent: '#4ECCA3',
      write: '#EEEEEE',
    },
    fontFamily: {
      body: ['system-ui'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/container-queries')],
}

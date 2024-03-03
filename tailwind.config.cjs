const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        sans: ['Inter Tight Variable', ...defaultTheme.fontFamily.sans],
        sub: ['Arimo Variable', ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        'widesttt': '0.5em',
      },
    }
  },

  plugins: []
};

module.exports = config;
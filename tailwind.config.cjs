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
      fontSize: {
        // smaller than xs
        '2xs': '.65rem',
      },
      letterSpacing: {
        'widesttt': '0.4em',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    }
  },

  plugins: []
};

module.exports = config;
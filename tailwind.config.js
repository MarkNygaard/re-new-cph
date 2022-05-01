const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        132: '33rem',
      },
    },
  },
  safelist: ['grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'gap-2', 'gap-4'],
  plugins: [require('@tailwindcss/typography')],
};

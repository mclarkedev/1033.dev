module.exports = {
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  purge: {
    enabled: false,
    content: [
      './pages/**/*.{html,md,js,ts,jsx,tsx}',
      './components/**/*.{html,md,js,ts,jsx,tsx}',
      './content/**/*.{html,md,js,ts,jsx,tsx}',
      './styles/**/*.{html,md,js,ts,jsx,tsx}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-lato)'
      },

      colors: {
        gray: {          
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#868e96',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
        },
        blue: {
          50: '#c5f6fa',
          100: '#99e9f2',
          200: '#66d9e8',
          300: '#74c0fc',
          400: '#339af0',
          500: '#228be6',
          600: '#1c7ed6',
          700: '#1971c2',
          800: '#1b66ff',
        },
      },
    },
  },
  plugins: [],
};

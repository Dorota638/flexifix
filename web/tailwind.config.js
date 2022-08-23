module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#ebd3d3',
          200: '#e1bdbc',
          300: '#d7a7a6',
          400: '#cd9190',
          500: '#c37b7a',
          600: '#b96564',
          700: '#af4f4d',
          800: '#a53937',
          900: '#9b2321',
        },
        'secondary': '#9b2321',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
  corePlugins: {
    preflight: false,
  },
}
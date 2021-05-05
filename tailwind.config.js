module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroudImage: (theme) => ({
        home: `url(${process.env.PUBLIC_URL}/homeBG.png)`
      }),
      colors: {
        purple: {
          dark: '#251633',
          darkLight: '#271838',
          light: '#2E2157'
        },
        yellow: '#FAC60E',
        cyan: '#2DE2E6',
        red: '#FF4364',
        white: '#FFFFFF',
        black: '#000000'
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

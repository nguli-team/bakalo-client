module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      purple: {
        dark: '#251633',
        light: '#2E2157'
      },
      yellow: '#FAC60E',
      cyan: '#2DE2E6',
      red: '#FF4364',
      white: '#FFFFFF',
      black: '#000000'
    },
    extend: {
      backgroudImage: (theme) => ({
        home: `url(${process.env.PUBLIC_URL}/homeBG.png)`
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

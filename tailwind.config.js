const production = !process.env.ROLLUP_WATCH;
module.exports = {
  purge: {
    content: [
     "./src/**/*.svelte",

    ],
    enabled: production // disable purge in dev
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading1: ['Alegreya'],
        heading2: ['Caveat Brush' ],
        body: ['Source Sans Pro']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


//   future: {
  //   purgeLayersByDefault: true,
  //   removeDeprecatedGapUtilities: true,
  // },
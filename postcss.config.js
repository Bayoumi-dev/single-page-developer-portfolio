module.exports = {
   plugins: {
      'postcss-preset-env': {},
      // Plugins used in the production environment
      ...(process.env.NODE_ENV === 'production' && {
         autoprefixer: {},
      }),
   },
}

const sass = require('@stencil/sass');

exports.config = {
  namespace: 'mate',
  plugins: [
    sass()
  ],
  globalStyle: 'src/globals/mate.scss',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ]
};

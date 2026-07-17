// Pro Babel 8 musíme vytáhnout buď .default, nebo zavolat registraci přímo takto:
require('@babel/register').default({
  presets: ['@babel/preset-react'],
  extensions: ['.js', '.jsx'],
  rootMode: 'upward-optional',
});

require('./server.js');

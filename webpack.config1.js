import path from 'path';
import webpack from 'webpack';

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: `${__dirname}/src/app.js`,
  output: {
    path: `${__dirname}/build`,
    filename: '[name]-[hash].js',
    publicPath: '/static/',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      loaders: ['react-hot', 'babel'],
    }, {
      test: /\.scss$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      loaders: ['style', 'css', 'scss'],
    }, {
      test: /\.json$/,
      loader: 'json',
    }],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePluigin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __DEV__: true,
    }),
  ],
};

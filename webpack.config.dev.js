const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: [
            'webpack-hot-middleware/client',
            './src/app'
        ],
        vendors: ['react', 'react-dom', 'react-router']
    },
    output: {
        filename: '[name].js',
        publicPath: '/static/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            loaders: ['react-hot', 'babel']
        }, {
            test: /\.scss$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            loaders: ['style', 'css', 'scss']
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePluigin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            __DEV__: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

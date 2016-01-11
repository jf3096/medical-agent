var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',

    entry: [
        'webpack-hot-middleware/client',
        './app/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    eslint: {
        configFile: '.eslintrc'
    },
    /**
     * If need eslint, add it in loaders.
     * {test: /\.js$/,loader: "eslint-loader",exclude: /node_modules/,}
     */
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['react', 'stage-0', 'es2015'],
                cacheDirectory: true,
                plugins: [
                    "transform-runtime"
                ]
            }
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
        },
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}]
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            'react': 'node_modules/react-lite/dist/react-lite.min',
            'react-dom': 'node_modules/react-lite/dist/react-lite.min'
        }
    },

    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};

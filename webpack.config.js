var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: process.env.WEBPACK_DEVTOOL || 'source-map',

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
            test: /\.less/,
            loader: 'style!css!less'
        }, {
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
        },
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}]
    },

    resolve: {
        extensions: ['', '.js', '.jsx', 'tsx'],
        alias: {
            'react': path.join(__dirname, 'node_modules/react-lite/dist/react-lite.min'),
            'react-dom': path.join(__dirname, 'node_modules/react-lite/dist/react-lite.min')
        }
    },
    devServer: {
        contentBase: "./app",
        noInfo: true,
        hot: true,
        inline: true
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
        //new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    ]
};

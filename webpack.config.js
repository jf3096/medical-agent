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
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components|typings)/,
                loader: 'ts-loader',
            },
            {
                test: /\.less/,
                loader: 'style!css!less'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.tsx'],
        alias: {
            'react': path.join(__dirname, 'node_modules/react-lite/dist/react-lite.min'),
            'react-dom': path.join(__dirname, 'node_modules/react-lite/dist/react-lite.min'),
            'fastclick': path.join(__dirname, 'node_modules/fastclick/lib/fastclick')
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

var path = require('path');
var webpack = require('webpack');

var node_module_dir = __dirname + '/node_modules';

var config = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },

    devtool: process.env.WEBPACK_DEVTOOL || 'eval',

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
        ],
        noParse: [],
    },

    resolve: {
        extensions: ['', '.js', '.tsx'],
        alias: {
            'react': 'react-lite',
            'react-dom': 'react-lite',
        }
    },
    devServer: {
        contentBase: "./app",
        noInfo: true,
        hot: true,
        inline: true
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('main', null, false),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    ]
};
config.addVendor('fastclick', node_module_dir + "/fastclick/lib/fastclick.js");
module.exports = config;
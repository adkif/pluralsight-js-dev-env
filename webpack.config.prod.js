// import webpack from 'webpack';
import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

export default {
    devtool: 'source-map',
    mode: 'development',
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [],
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
        ],
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
        ]
    }
}
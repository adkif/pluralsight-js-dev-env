import webpack from 'webpack';
import path from 'path';

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
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true,
            noInfo: false,
        }),
        new webpack.optimize.DedupePlugin(), // Eliminate duplicate package when generating bundle
        new webpack.optimize.UglifyJsPlugin() // Minify JS
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
        ]
    }
}
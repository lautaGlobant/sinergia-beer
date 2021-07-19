const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// HtmlWebpackPlugin is used to inject our created bundles into this html file so // we need to create it.
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    target: 'web', 
    devServer: {
        port: 3000,
        contentBase: './dist',
    },
    entry: {
        app: ['./src/App.jsx'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: ['babel-loader'], // we use this to transpile es6 code on the web
              },
              {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader", "postcss-loader",
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
                    },
                    },
                ],
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css",
            chunkFilename: "styles.css"
        }),
        HtmlWebpackPluginConfig,
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    mode: 'development'
}
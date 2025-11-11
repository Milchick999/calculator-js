const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProduction ? 'js/[name].[contenthash].js' : 'js/bundle.js',
            clean: true,
        },

        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader', 
                        'css-loader',
                    ],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
            ],
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html', 
                title: 'Calculator', 
                inject: 'body', 
                minify: isProduction ? {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                } : false,
            }),
        ],

        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'), 
            },
            compress: true, 
            port: 9000, 
            open: true, 
            hot: true, 
        },

        optimization: {
             minimize: isProduction,
        },

        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? false : 'source-map',
    };
};
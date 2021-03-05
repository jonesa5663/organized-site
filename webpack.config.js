// const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: {
        // code from tutorial
        main: path.resolve(__dirname, './app/assets/scripts/App.js'),
    },
    // code from class
    // './app/assets/scripts/App.js',
        
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        before: function(app, server) {
            server._watch('./app/**/*.html')
          },
        contentBase: path.join(__dirname, 'app'),
        open: true,
        hot: true,
        port: 3000,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader", 
                    "css-loader?url=false", 
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: 
                                        postCSSPlugins,
                            },
                        },
                    },
                ],
            },
        ],
    },
    // plugins: [
    //     // new HtmlWebpackPlugin()
    // ]
};
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let htmlPageNames = ['batman', 'alfred', 'catWoman'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
      template: `./${name}.html`, // relative path to the HTML files
      filename: `${name}.html`, // output HTML files
      chunks: [`${name}`] // respective JS files
    })
  });

module.exports = {
    entry: {
        main: './src/index.js',
        batman: './src/pageBatman.js',
        alfred: './src/pageAlfred.js',
        catWoman: './src/pageCatWoman.js',
    },
    output: {
        filename: '[name].entry.js',
        path: path.resolve(__dirname, '..', 'wwwroot', 'dist')
    },
    mode: "development",
    devtool: "inline-source-map",
    target: "web",
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            chunks: ['main']
        }),        
    ].concat(multipleHtmlPlugins),
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                } 
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}
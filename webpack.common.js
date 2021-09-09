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
    main: './src/index.ts',
    batman: './src/pageBatman.ts',
    alfred: './src/pageAlfred.ts',
    catWoman: './src/pageCatWoman.ts',
},
  output: {
    filename: '[name].entry.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      chunks: ['main'],
    }),
  ].concat(multipleHtmlPlugins),
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts']
  },
}

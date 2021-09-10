const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
 
let htmlPageNames = ['batman', 'alfred', 'catWoman', 'batcueva'];
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
    batcueva: './src/pageBatcueva.ts'
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
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
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
    extensions: ['.ts', '.js'],
  },
}

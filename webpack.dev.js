 const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'development',
   devtool: "hidden-nosources-cheap-source-map",
   devServer: {
    contentBase: './dist'
  },
});













// devtool: "inline-source-map", 964kb => 964.000 debugeable

// devtool: "nosources-source-map", 391kb => 391.000 debugeable

// devtool: "eval", 395kb => 395.000 no debugeable

// devtool: "hidden-source-map", 382 debugeable  

// devtool: "hidden-nosources-cheap-source-map", 378 debugeable
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js'
  },

  mode: process.env.NODE_ENV || 'development',

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },

  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, 'src')
  },
  
  target: 'web',

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "sass-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ["file-loader"]
      }
    ]
  }

};
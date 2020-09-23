const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  devServer: {
    inline: true,
    stats: 'minimal',
    historyApiFallback: {
      disableDotRule: true
    },
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ],
  output: {
    filename: '[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  }
}

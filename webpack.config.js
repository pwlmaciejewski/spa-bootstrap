const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'ts-loader'
      }, {
        test: /\.(svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          { loader: 'file-loader' }
        ]
      }, {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root',
      title: 'SPA Bootstrap',
      mobile: true,
      links: [
        'https://fonts.googleapis.com/css?family=Playfair+Display:700|Roboto:300,400'
      ],
    })
  ]
}

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
      }, {
        test: /\.styl/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[name]--[local]--[hash:base64]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('postcss-cssnext')(),
                require('postcss-class-repeat')({ repeat: 3 })
              ]
            }
          },
          { loader: 'stylus-loader' }
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

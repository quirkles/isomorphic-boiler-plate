/* eslint-disable */
import webpack from 'webpack'
import path from 'path'

const webpackDevConfig = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: ['eslint-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      }, {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: ['url-loader?limit=8192']
      }, {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: ['file-loader']
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.BROWSER': JSON.stringify(true)
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
module.exports = webpackDevConfig
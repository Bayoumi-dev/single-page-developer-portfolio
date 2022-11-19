const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
   entry: './src/index.js',
   mode: 'production',
   devtool: 'source-map',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'assets/[name][ext]',
      clean: true,
   },
   module: {
      rules: [
         {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: ['babel-loader'],
         },
         {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
         },
         {
            test: /\.(png|svg|jpg|webp)$/i,
            type: 'asset/resource',
         },
         {
            test: /\.html$/i,
            loader: 'html-loader',
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/views/index.html',
         favicon: './src/views/favicon.ico',
         filename: './index.html',
         inject: 'body',
      }),
      new MiniCssExtractPlugin({ filename: '[name].css' }),
   ],
   optimization: {
      minimizer: [new CssMinimizerPlugin()],
   },
}

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   entry: './src/index.js',
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
      open: true,
      port: 3000,
   },
   output: {
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
            use: ['style-loader', 'css-loader', 'postcss-loader'],
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
   ],
}

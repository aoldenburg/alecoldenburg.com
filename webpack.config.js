// /* eslint-disable */
// var webpack = resolve('webpack');
// var path = resolve('path');

// var BUILD_DIR = path.resolve(__dirname, './build');
// var APP_DIR = path.resolve(__dirname, './src/client');

// module.exports = {
//   devtool: 'inline-source-map',
//   entry: ['./client/index.js'],
//   output: {
//     path: path.join(__dirname, 'build'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /(\.css|.scss)$/,
//         use: [
//           {
//             loader: "style-loader",
//           },
//           {
//             loader: "css-loader",
//             options: {
//               modules: true,
//             }
//           },
//           {
//             loader: 'postcss-loader',
//             options: {
//               sourceMap: true,
//             }
//           }
//         ]
//       },
//       {
//         test: /\.(jsx|js)?$/,
//         use: [
//           {
//             loader: 'babel-loader',
//             options: {
//               cacheDirectory: true,
//               include: path.join(__dirname, 'client'),
//               exclude: /node_modules/,
//               query: {
//                 presets: ['es2015', 'react']
//               }
//             }
//           }
//         ]
//       }
//     ]
//   }
// }

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./src/client/index.js'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /(\.css|.scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/react']
            }
          }
        ]
      }
    ]
  }
}

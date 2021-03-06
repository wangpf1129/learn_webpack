const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {DefinePlugin} = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader/dist/index');
module.exports = {
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
  entry: './src/main.js',
  devServer: {
    contentBase: './public',  // 找不到 的资源都往这个文件里找
    hot: true,
    open: true
  },
  resolve: {
    extensions: ['.js', '.mjs', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader', options: {postcssOptions: {plugins: [require('postcss-preset-env')]}}
        }]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      // {
      //   test: /\.(jpe?g|png|svg|gif)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: 'img/[name]_[hash:6].[ext]'
      //     }
      //   }
      // }
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]_[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      },
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env']]
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // 用来解决每次修改了一些配置，重新打包时，都需要手动删除dist文件夹
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: 'public', // 从哪里开始复制
        to: './', // 复制到哪里 这个 ./ 是根据 出口文件相关的
        globOptions: {
          ignore: ['**/index.html']  // 忽略哪个文件
        }
      }]
    }),
    new VueLoaderPlugin()
  ]
};

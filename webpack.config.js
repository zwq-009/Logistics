//path是node中的一个路径操作的模块
const path = require("path");
// 启用热更新的 第2步
const webpack = require("webpack");
// 导入自动生成HTMl文件的插件
const htmlWebpackPlugin = require("html-webpack-plugin");
//1.引入VueLoaderPlugin插件(在vue-loader15版本以后需要配置这个)
const VueLoaderPlugin = require('vue-loader/lib/plugin');

//module.exports是CommonJS下的模块化语法  导出模块
module.exports = {
  mode: "development",
  //指定webpack处理的入口文件
  entry: path.resolve(__dirname, "src/main.js"),
  //指定打包文件的出口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  //2.打包文件大小警告和错误的问题
  performance: {
    hints: false,
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.js",
    },
  },
  //配置devServer
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 3001,
    open: true,
    hot: true, // 启用热更新 的 第1步
  },
  plugins: [
    // 启用热更新第三步 配置插件
    new webpack.HotModuleReplacementPlugin(), // new 一个热更新的 模块对象， 这是 启用热更新的第 3 步
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html"
    }),
    // 2.配置VueLoaderPlugin插件
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|bmp|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, //当图片小于8kb的时候，就把图片进行base64编码。当图片大于8kb的时候，就用取别名的图片
              name: "[hash:8]-[name].[ext]", //给图片取别名
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      }, // 处理 字体文件的 loader
      //配置 babel 的 loader规则的时候，必须 把 node_modules 目录，通过 exclude 选项排除掉
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      //3.处理 .vue 文件的 loader
      { test: /\.vue$/, use: 'vue-loader' } 
    ],
  },
};

/*
"dev": "webpack-dev-server --contentBase src --open --port 3001 --hot"

--contentBase src   指定src目录为内容根目录(打开网页的时候默认显示的目录)
--open    自动打开浏览器(设置谷歌浏览器为默认浏览器)
--port 3001  设置dev-server占用的端口   ctrl+c终止对应的终端
--hot  热更新
*/

/*
格式化代码：alt+shift+f 
*/

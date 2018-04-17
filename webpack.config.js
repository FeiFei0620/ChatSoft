//webpack.config.js
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode: "development",
    devtool: 'source-map',          //浏览器调试代码

    entry: __dirname + "/app/main.js",        //打包
    output: {
        path: __dirname + "/build",
        filename: "bundle.js",
    },

    devServer: {       //以下是构建本地服务器用于实时刷新
        contentBase: "./build",        //本地服务器所加载的页面所在的目录
        historyApiFallback: true,     //不跳转
        inline: true,          //实时刷新
        host: '127.0.0.1',
        port: 3000,
        hot: true
    },

    module: {                  //loader调用外部的脚本或工具
        rules: [
            {                          //第一个规则，已经允许你使用ES6以及JSX的语法
                test: /(\.jsx|\.js)$/,              //一个用以匹配loaders所处理文件的拓展名的正则表达式
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/                      //屏蔽不需要处理的文件
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },{
                        loader: "css-loader"
                    },{
                        loader: "postcss-loader"
                    }
                ]
            },
            {
                test: /(\.less|\.sass|\.scss)$/,
                use: [
                    {
                        loader: "style-loader"
                    },{
                        loader: "postcss-loader"
                    },{
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {loader: 'url-loader'}
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({     //利用此插件，index.html文件会自动生成
            template: __dirname + "/app/index.tmpl.html"       //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),                //热加载插件
        new CleanWebpackPlugin('build/*.*',{
            root: __dirname,
            verbose: true,
            dry: false
        })
    ]
}
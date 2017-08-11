const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bule.js"
    },

    // html插件
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            inject: "body"
        })
    ],

    // css
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.tpl$/,
                use: [
                    "html-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    { loader: "url-loader", options: { limit: 8000 } },
                    // "image-webpack-loader"
                ]
            },

            // es6 转 es5
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["es2015"],
                            plugins: ["transform-runtime"]
                        }
                    }
                ]
            },

            // vue-loader配置
            {
                test: /\.vue$/,
                use: [
                    "vue-loader"
                ]
            }
        ]
    }
}
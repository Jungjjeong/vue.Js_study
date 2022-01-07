var path = require("path");
var webpack = require("webpack");

module.exports = {
  mode: "production", // 배포용 모드
  entry: "./src/main.js", // 진입 지점이자 웹팩 빌드 대상 -> main.js
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "build.js",
    // dist 디렉토리 안 build.js에 결과 저장
  },
  module: {
    // loader의 속성을 지정할 수 있음
    rules: [
      {
        test: /\.css$/,
        // css 파일에 대해 적용
        use: ["vue-style-loader", "css-loader"],
        // 적용될 loader
        // css-loader -> vue-style-loader 순으로 적용
        // 따라서 css 파일을 읽어오고, vue style을 적용한다.
      },
      {
        test: /\.vue$/,
        // vue 파일에 대해 적용
        loader: "vue-loader",
        // 적용될 loader
        options: {
          loaders: {},
          // other vue-loader options go here
        },
      },
      {
        test: /\.js$/,
        // js 파일에 대해 적용
        loader: "babel-loader",
        // 적용될 loader
        // babel -> ES6 문법을 어느 브라우저에도 호환될 수 있게 변환해줌
        exclude: /node_modules/, // node_modules는 제외한다.
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // img 파일에 적용
        loader: "file-loader", // 적용할 loader
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
    ],
  },
  resolve: {
    // 파일 간의 연관관계 해석 방식
    alias: {
      vue$: "vue/dist/vue.esm.js",
      // vue$는 오른쪽으로 이해하겠다 -> 별칭
    },
    extensions: ["*", ".js", ".vue", ".json"],
    // 확장자를 붙이지 않아도 된다. 자동으로 인식
  },
  devServer: {
    // webpack dev server
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
  },
  performance: {
    // 성능 관련 속성 (결과물의 사이즈가 초과되면 ~~)
    hints: false,
  },
  devtool: "#eval-source-map",
};

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }

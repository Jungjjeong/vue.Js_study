// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require("path"); //node path 모듈을 path에 저장

module.exports = {
  mode: "none",
  entry: "./src/index.js", // 이를 대상으로
  output: {
    // 결과를 낸다.
    // -> 파일에 대한 유연 경로를 잡아주기 위해 문자열로 넣지 않음
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // 경로를 잡아주는 api
  },
};

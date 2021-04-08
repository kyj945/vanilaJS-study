// webpack은 모든 파일을 모듈로 바라봄 (웹팩의 로더가 변환해주기 때문)
module.exports = function myWebpackLoader(content) {
    console.log("my-webpack-loader init");
    return content.replace('console.log(', 'alert(');
    //return content;
}
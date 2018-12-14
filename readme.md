dssdfsd

babel-preset-stage-3
//.babel
"presets": [
    "stage-3"
]
//处理(...)扩展运算符报错问题

babel-plugin-transform-runtime
//.babelrc
"plugins": [[
    "transform-runtime",
    {
        "helpers": false,
        "polyfill": false,
        "regenerator": true,
        "moduleName": "babel-runtime"
    }
]]
//处理async函数的regeneratorRuntime is not defined错误

less使用混合模式时候报错
注意webpack配置的引用顺序
use: ["css-loader","autoprefixer-loader","less-loader"]
"less-loader"要在"autoprefixer-loader"后面

antd使用：
npm install --save antd
npm install --save-dev babel-plugin-import
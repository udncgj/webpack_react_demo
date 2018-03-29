babel-preset-stage-3
//.babelrc
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
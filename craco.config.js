const path = require("path");

const resolve = dir => path.resolve(__dirname, dir);//拼接

module.exports = {
    webpack: {
        alias: {
            "@": resolve("src"),//只要写@找到的就是src的目录
            "components": resolve("src/components")
        }
    }
}

// 只要修改我们配置相关的东西都要重新跑一下我们的项目
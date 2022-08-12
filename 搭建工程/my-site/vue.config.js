// vue-cli的配置文件
module.exports = {
    devServer: {
        Proxy: {
            "/api": {
                target: "http//",
            }
        }
    }
}
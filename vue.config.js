module.exports = {
    devServer: {
        // 对本地服务进行配置
        port: '8099',
        // 代理配置
        proxy: {
            '/api': {
              target: 'http://localhost:3000',// 是接口所在的服务器地址
              ws: true,
              changeOrigin: true
            },
          }
    }
}
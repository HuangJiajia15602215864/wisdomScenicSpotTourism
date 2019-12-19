module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/WisdomScenicSpotTourism/'
        : '/',
    // 将构建好的文件输出到哪里
    outputDir: 'WisdomScenicSpotTourism',
    pages: {
        apply: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/apply.html 的输出
            filename: 'apply.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '导游导览系统',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'apply']
        }
    },
    // 请求代理
    devServer: {//跨域
        proxy: {// 配置跨域处理 可以设置多个
            '/MinstoneFileOnlinePreview': {// 预览文件接口
                target: 'http://192.168.0.152:8012',
                ws: true,
                changeOrigin: true
            }
        },
        // disableHostCheck: true,
        // port: 80,
    },
    // 生产环境下的sourceMap,生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config
                .externals({
                    'vue': 'Vue',
                    'vue-router': 'VueRouter'
                })
        } else {
            // 为开发环境修改配置...
        }
    },
    css: {
        loaderOptions: {
            sass: {
                data: `@import '@/assets/scss/utils.scss';`
            }
        }
    }
}

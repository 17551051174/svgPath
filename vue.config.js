const {
  pages,
  setInlineLimit
} = require('./config')

// 是否为生产环境
const isProductionEnv = process.env.NODE_ENV === 'production'

module.exports = {
  transpileDependencies: [
    ' vue-echarts ',
    ' resize-detector '
  ],
  baseUrl: './', // 打包后静态资源文件路径
  pages,
  css: {
    loaderOptions: {
      sass: {
        // 全局注入sass变量、函数、混合, 第一个@符号是css关键字, 第二个@符号代表src文件夹, 不可缺少分号(;)
        data: `
          @import '@/css/mixin.scss';
          @import '@/css/variable.scss';
          @import '@/css/_setcss.scss';
        `
      }
    }
  },
  devServer: {
    open: true,
    proxy: { // 过
      // axios 默认地址得写成 '/api/' 与下面的 '/api' 一模一样
      '/api': {
        // target: 'http://221.231.140.135:32001', // 后端的需要代理的地址
        target: 'http://wisdomsportspark.com:5004', // 后端的需要代理的地址
        ws: true, // 是否代理 websockets
        changeOrigin: true, // 跨域配置
        secure: false, // 如果是https接口，需要配置这个参数
        pathRewrite: {
          '^/api': '' // rewrite path
        }
      }
    }
  },
  // 加速生产环境构建 是否需要生产环境的 source map(报错)
  productionSourceMap: false,

  // 生产环境打包优化配置
  configureWebpack: config => {
    if (isProductionEnv) { // 生产环境
      // 代码分割
      config.optimization.splitChunks.cacheGroups = {
        vendors: {
          chunks: 'all',
          name: `chunk-vendors`,
          minChunks: 4,
          priority: -10
        },
        common: {
          chunks: 'all',
          name: `chunk-common`,
          minChunks: 4,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
    /* optimization: {
      splitChunks: {
        chunks: 'all', // 控制webpack选择哪些代码块用于分割（其他类型代码块按默认方式打包）。有3个可选的值：initial、async和all。
        minSize: 30000, // 形成一个新代码块最小的体积
        maxSize: 0,
        minChunks: 10, // 在分割之前，这个代码块最小应该被引用的次数（默认配置的策略是不需要多次引用也可以被分割）
        maxAsyncRequests: 5, // 按需加载的代码块，最大数量应该小于或者等于5
        maxInitialRequests: 3, // 初始加载的代码块，最大数量应该小于或等于3
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: { // 将所有来自node_modules的模块分配到一个叫vendors的缓存组
            test: /[\\/]node_modules[\\/]/,
            priority: -10 // 缓存组的优先级(priotity)是负数，因此所有自定义缓存组都可以有比它更高优先级
          },
          default: {
            minChunks: 2, // 所有重复引用至少N次的代码，会被分配到default的缓存组。
            priority: -20, // 一个模块可以被分配到多个缓存组，优化策略会将模块分配至跟高优先级别（priority）的缓存组
            reuseExistingChunk: true // 允许复用已经存在的代码块，而不是新建一个新的，需要在精确匹配到对应模块时候才会生效。
          }
        }
      }
    } */
  },

  // 配置 loader 选项
  chainWebpack: config => {
    // images、media、fonts文件处理
    setInlineLimit(config)
    if (isProductionEnv) {
      // css输出路径、命名
      config
        .plugin('extract-css')
        .tap(() => [{
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css'
        }])
    }
  }
}

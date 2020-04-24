const path = require('path')
const CONFIG = {}

/** 以下是单页面入口文件配置 */
CONFIG.pages = {
  index: {
    // page 的入口
    entry: path.resolve(__dirname, '../src/main.js'),
    // 以下可选项
    // 模板来源
    template: 'public/index.html',
    // 在 dist/index.html 的输出
    filename: 'index.html'
    // 当使用 title 选项时，
    // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    // title: 'Index Page',
    // 在这个页面中包含的块，默认情况下会包含
    // 提取出来的通用 chunk 和 vendor chunk。
    // chunks: ['chunk-vendors', 'chunk-common', 'index']
  }
  // 当使用只有入口的字符串格式时，
  // 模板会被推导为 `public/subpage.html`
  // 并且如果找不到的话，就回退到 `public/index.html`。
  // 输出文件名会被推导为 `subpage.html`。
  // subpage: 'src/subpage/main.js'
}
/** 以上是单页面入口文件配置 */

/** 以下是多页面入口文件配置 */
// const glob = require('glob') // 用于匹配入口文件
// // 多页面入口文件路径, 即 src/views 文件夹
// const PAGE_PATH = path.resolve(__dirname, '../src/views')

// // 获取多页面入口文件、HTML模板
// class GetPath {
//   constructor (extensionName) { // extensionName, 文件扩展名
//     // 获取文件路径
//     const entryFiles = glob.sync(PAGE_PATH + `/*/*.${extensionName}`)

//     entryFiles.forEach(filePath => {
//       const filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
//       this[filename] = filePath
//     })
//   }
// }

// // 多页面入口配置
// function entryConfig () {
//   const Config = {} // 入口文件配置
//   const ENTRIES = new GetPath('js') // 入口文件
//   const TEMPLATES = new GetPath('html') // 入口文件HTML模板

//   for (const [page, template] of Object.entries(TEMPLATES)) {
//     Config[page] = {
//       template,
//       inject: true,
//       entry: ENTRIES[page],
//       filename: `${page}.html`
//     }
//   }

//   return Config
// }

// CONFIG.pages = entryConfig()
/** 以上是多页面入口文件配置 */

// 静态资源低于阈值, 则转换为base64文件
const inlineLimit = 10000
// 静态资源处理
CONFIG.setInlineLimit = function (webpackConfig) {
  const staticAssetsConfig = [
    {
      name: 'img',
      type: 'images',
      regExp: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
      loader: 'url-loader'
    },
    {
      name: 'media',
      type: 'media',
      regExp: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader'
    },
    {
      name: 'fonts',
      type: 'fonts',
      regExp: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
      loader: 'url-loader'
    }
  ]

  staticAssetsConfig.forEach((item, index) => {
    webpackConfig.module
      .rule(item.type)
      .test(item.regExp)
      .use(item.loader)
      .loader(item.loader)
      .options({
        limit: inlineLimit,
        name: `${item.name}/[name].[hash:8].[ext]`
      })
  })
}

module.exports = CONFIG

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
module.exports = {
  css: {
    // 设置css 导入 取消*.module.less使用*.less
    requireModuleExtension: false
  },
  outputDir: "dist", // 部署应用包时url
  assetsDir: "static", // 打包后放置静态资源目录
  filenameHashing: true, // 打包后文件名包含hash
  lintOnSave: true, // 'error' eslint在保存时直接提示错误，编译不通过
  devServer: {
    open: true,
    port: 8089,
    proxy: ""
  },
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin(), new VuetifyLoaderPlugin()],
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 20000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace("@", "")}`;
            }
          }
        }
      }
    }
  },
  chainWebpack: config => {
    // 热加载
    config.resolve.symlinks(true);
    // config.optimization.delete('splitChunks');

    // 别名配置
    // config.resolve.alias
    //       .set('@src',resolve('src'))
    //       .set('@component',resolve('src/components'));
  }
};

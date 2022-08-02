const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:'/academy/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/variables.scss";
        `
      }
    }
  }
})

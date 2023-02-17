// postcss.config.js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 根元素的值
      rootValue ({ file }) {
        // obj ---处理的css属性
        return file.indexOf('vant') === -1 ? 75 : 37.5
      },
      // 配置转换css属性
      propList: ['*']
    }
  }
}

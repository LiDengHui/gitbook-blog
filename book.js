module.exports = {
  "title": "lixiaoyao",
  "description": "lixiaoyao的前端小册子",
  "author": "lixiaoyao",
  "language": "zh-hans",
  "links": {
    "sidebar": {
         
    }
  },
  "styles": {
    "website": "style.css"
  },
  "plugins": [
    "expandable-chapters",
    "search-plus", // 支持中文搜索
    "splitter",
    "github",
    "back-to-top-button",
    "summary-xy" // 自动生成目录
  ],
  "pluginsConfig": {
    "github": {
      "url": "https://github.com/lidenghui/gitbook-blog"
    },
    "summary-xy": {
      "ignorePath": ["**/images", "./script"],
      "subSubmmaryPath": "SUB_SUMMARY",
    },
    "theme-default": {
      "showLevel": true
    }
  },
  
}
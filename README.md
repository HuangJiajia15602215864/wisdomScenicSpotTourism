# wisdomScenicSpotTourism
毕业设计之移动端（游客端）导游导览系统——wisdomScenicSpotTourism

# 目录结构
```
|-- build            项目打包文件夹
|-- node_modules     项目依赖包（不上传到GitHub）
|-- public           公共文件
     * favicon.ico 项目ico图标
     * index.html  项目打包时会以该文件为母板
|-- src              资料文件夹
     * assets     资源文件夹，存放静态图片资源的目录
     * common     路由文件夹（包含每个模块的路由文件）
     * components 组件文件夹
     * utils      库文件夹
     * views      页面文件夹
     * App.vue    应用主组件
     * main.js    webpack入口文件
     * router.js  路由入口文件，决定了页面的跳转规则
     * store.js   vuex状态管理文件
|-- static            项目静态文件（用于存放需要使用的一些外部的js、css文件）
|-- .eslintrc.js      自定义elint代码检查
|-- .gitignore        忽略的文件
|-- package.json      项目描述文件
|-- vue.config.js     项目配置文件

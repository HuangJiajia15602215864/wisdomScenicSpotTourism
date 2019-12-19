// 中心介绍模块 ==================
const regionList = () => import('@/views/index.vue')

const introduction = [
  {
    path: '/index',
    name: 'regionList',
    component: regionList,
    meta: {
      level: 1, // 路由层级
      isRequireAuth: false, // 是否需要登录，会根据这个进行路由拦截
      title: '中心介绍' //  网页title
    }
  }
]

export default introduction

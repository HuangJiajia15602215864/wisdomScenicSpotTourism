// 登录注册模块 ==================
const login = () => import('@/views/user.vue')

const logins = [
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      level: 1,
      isRequireAuth: false,
      title: '登录' //  网页title
    }
  }
]

export default logins

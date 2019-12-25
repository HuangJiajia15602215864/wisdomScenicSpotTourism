// 登录注册模块 ==================
const userCenter = () => import('@/views/user/user-center.vue')
const login = () => import('@/views/user/login.vue')
const register = () => import('@/views/user/register.vue')

const logins = [
  {
    path: '/userCenter',
    name: 'userCenter',
    component: userCenter,
    meta: {
      level: 1,
      isRequireAuth: false,
      title: '个人中心' //  网页title
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      level: 2,
      isRequireAuth: false,
      title: '登录' //  网页title
    }
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {
      level: 2,
      isRequireAuth: false,
      title: '注册' //  网页title
    }
  },
]

export default logins

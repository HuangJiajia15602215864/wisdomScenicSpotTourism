// 登录注册模块 ==================
const userCenter = () => import('@/views/user/user-center.vue')
const login = () => import('@/views/user/login.vue')
const register = () => import('@/views/user/register.vue')
const ticketDetail = () => import('@/views/user/ticket-detail.vue')
const parkingDetail = () => import('@/views/user/parking-detail.vue')

const logins = [
  {
    path: '/userCenter',
    name: 'userCenter',
    component: userCenter,
    meta: {
      level: 1,
      isRequireAuth: true,
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
  {
    path: '/userCenter/ticketDetail',
    name: 'ticketDetail',
    component: ticketDetail,
    meta: {
      level: 2,
      isRequireAuth: true,
      title: '门票详情' //  网页title
    }
  },
  {
    path: '/userCenter/parkingDetail',
    name: 'parkingDetail',
    component: parkingDetail,
    meta: {
      level: 2,
      isRequireAuth: true,
      title: '停车详情' //  网页title
    }
  },
]

export default logins

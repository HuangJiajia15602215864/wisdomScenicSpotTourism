// 中心介绍模块 ==================
const home = () => import('@/views/home/home.vue')
const scenicSpotIntroduction = () => import('@/views/home/scenic-spot-introduction.vue')
const activityInformation = () => import('@/views/home/activity-information.vue')
const electronicMap = () => import('@/views/home/electronic-map.vue')
const electronicNavigation = () => import('@/views/home/electronic-navigation.vue')
const scenicSpotTraffic = () => import('@/views/home/scenic-spot-traffic.vue')
const stopAppointment = () => import('@/views/home/stop-appointment.vue')

const introduction = [
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      level: 1, // 路由层级
      isRequireAuth: false, // 是否需要登录，会根据这个进行路由拦截
      title: '掌上导游' //  网页title
    }
  },
  {
    path: '/scenicSpotIntroduction',
    name: 'scenicSpotIntroduction',
    component: scenicSpotIntroduction,
    meta: {
      level: 2, // 路由层级
      isRequireAuth: false, // 是否需要登录，会根据这个进行路由拦截
      title: '景区介绍' //  网页title
    }
  },
  {
    path: '/activityInformation',
    name: 'activityInformation',
    component: activityInformation,
    meta: {
      level: 2, // 路由层级
      isRequireAuth: false, // 是否需要登录，会根据这个进行路由拦截
      title: '活动资讯' //  网页title
    }
  },
  {
    path: '/electronicMap',
    name: 'electronicMap',
    component: electronicMap,
    meta: {
      level: 2, // 路由层级
      isRequireAuth: false, // 是否需要登录，会根据这个进行路由拦截
      title: '电子地图' //  网页title
    }
  },
  {
    path: '/electronicNavigation',
    name: 'electronicNavigation',
    component: electronicNavigation,
    meta: {
      level: 2, // 路由层级
      isRequireAuth: false, // 是否需要登录，会根据这个进行路由拦截
      title: '电子导游' //  网页title
    }
  },
  {
    path: '/scenicSpotTraffic',
    name: 'scenicSpotTraffic',
    component: scenicSpotTraffic,
    meta: {
      level: 2, // 路由层级
      isRequireAuth: false, // 是否需要登录，会根据这个进行路由拦截
      title: '数据感知' //  网页title
    }
  },
  {
    path: '/stopAppointment',
    name: 'stopAppointment',
    component: stopAppointment,
    meta: {
      level: 2, // 路由层级
      isRequireAuth: true, // 是否需要登录，会根据这个进行路由拦截
      title: '预约停车' //  网页title
    }
  }
]

export default introduction

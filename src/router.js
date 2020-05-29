import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入公共路由
import {
   user,
   introduction,
   buyTicket
} from '@/common/routes'

Vue.use(VueRouter)

const router = new VueRouter({
   mode: 'hash',
   routes: [{
         path: '/',
         redirect: '/home'
      },
      {
         path: '*',
         redirect: '/home'
      },
      ...user,
      ...introduction,
      ...buyTicket
   ]
})

// 路由拦截
router.beforeEach((to, from, next) => {
   // 设置全局标题
   document.title = to.meta.title || '导游导览系统'
   var userTel = sessionStorage.getItem('userTel');
   console.log(userTel)
   if (to.meta.isRequireAuth) { // 判断该路由是否需要登录权限
      if (userTel) {
         console.log(1111)
         next();
      } else {
         console.log(2222)
         next({
            path: 'login',
            query: {
               redirect:to.path
            }
         })
      }
   } else {
      console.log(3333)
      next();
   }
})

export default router
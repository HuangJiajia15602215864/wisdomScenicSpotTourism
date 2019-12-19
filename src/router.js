import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入公共路由
 import {
   logins,
   introduction
 } from '@/common/routes'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '*',
            redirect: '/index'
        },
        ...logins,
        ...introduction      
        ]
    })

// 路由拦截
router.beforeEach((to, from, next) => {
    // 设置全局标题
    document.title = to.meta.title || '导游导览系统'
    next();
})

export default router
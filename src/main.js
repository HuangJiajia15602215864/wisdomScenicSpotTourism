import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
// import '@/assets/scss/reset.scss';
import '@/assets/iconfont/iconfont.css' // 引入字体样式
import '@/assets/iconfont/iconfont.js'  // 引入symbol样式
import { NavBar, Tabbar, TabbarItem,Icon} from 'vant';

Vue.config.productionTip = false
Vue.use(NavBar);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

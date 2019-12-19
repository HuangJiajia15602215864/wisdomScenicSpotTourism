<template>
  <div id="app">
   <span>这里是App.vue</span>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            isWechat: false,
        };
    },
    computed: {
    
    },
    watch: {
        
    },
    components: {
       
    },
    methods: {
        // 检查运行环境
        checkEnv() {
            const ua = navigator.userAgent.toLowerCase();
            if (String(ua.match(/MicroMessenger/i)) === 'micromessenger') {
                this.isWechat = true;
            } else {
                this.isWechat = false;
            }
            console.log(this.isWechat)
        }
    },
    created() {
        this.checkEnv();
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

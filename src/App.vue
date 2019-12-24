<template>
    <div id="app">
        <van-nav-bar :title="title" left-arrow fixed right-text="···" v-if="!isWechat" @back="goBack">
            <van-icon name="weapp-nav" slot="right" />
        </van-nav-bar>
        <div :class="['main', isShowHead ? 'main-showhead' : '']">
            <router-view></router-view>
        </div>
        <van-tabbar v-model="active" active-color="#22129f" inactive-color="#717171" route>
            <van-tabbar-item icon="browsing-history" to="/home">玩转景区</van-tabbar-item>
            <van-tabbar-item icon="shop-collect" to='/login'>购票入口</van-tabbar-item>
            <van-tabbar-item icon="manager">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import {
        NavBar,
        Tabbar,
        TabbarItem,
        Icon
    } from 'vant';
    export default {
        name: 'app',
        data() {
            return {
                isWechat: false,
                title: '掌上导游',
                active: 0
            };
        },
        computed: {
            isShowHead() {
                return !this.isWechat;
            }
        },
        watch: {
            // 监听路由变化
            $route(to, from) {
                this.title = to.meta.title || '项目看板';
            }
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
            },
            goBack() {
                this.$router.go(-1)
            },
        },
        created() {
            this.checkEnv();
        }
    };
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    .main {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        overflow: auto;
    }

    .main-showhead {
        margin-top: px2rem(130px);
    }

    .van-nav-bar {
        height: px2rem(100px);
        color: #22129f;
        border-bottom: px2rem(1px) solid #ccc;
        line-height: px2rem(100px);
        font-size: px2rem(34px);

        &__title{
            color: #22129f;
            line-height: px2rem(100px);
            font-size: px2rem(30px);
        }

        .van-icon {
            color: #22129f;
            font-size: px2rem(32px);
            line-height: px2rem(100px);
        }
    }
    .van-tabbar {
        height: px2rem(80px);
        border-top: px2rem(1px) solid #ccc;
        .van-tabbar-item{
            font-size: px2rem(20px);
            line-height:px2rem(24px);
        }
        .van-icon {
            font-size: px2rem(38px);
            line-height: px2rem(30px);
            margin-top: px2rem(5px);
        }
    }
</style>
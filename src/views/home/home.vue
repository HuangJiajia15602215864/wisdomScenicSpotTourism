<template>
  <div id="home">
    <van-swipe :autoplay="3000" :loop="true" class="swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="swipe-img" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :column-num="3" class="grid">
      <van-grid-item v-for="(grid,index) in grids" :key="index" :to="grid.to" class="grid-item">
        <span :class="['icon','iconfont',grid.icon]"></span>
        <span class="grid-text">{{grid.text}}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
  import {
    Icon,
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    Lazyload
  } from 'vant';
  export default {
    name: 'home',
    data() {
      return {
        images: [
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577271721217&di=cd9ee3124e5880734682f6fde760271f&imgtype=0&src=http%3A%2F%2Fimg1.juimg.com%2F140915%2F330508-14091520514636.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577271750036&di=8d14f3395815f8e5505ea67e6fa31bc3&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F6t%2F9h%2FQJ9106150115.jpg%3Fx-oss-process%3Dstyle%2Fshows',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577271639513&di=9baee638b3cb067410adc618e3daa386&imgtype=0&src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0621%2Ff53a66fda171a74be8e8c5b7e593321c.jpg'
        ],
        grids: [{
            icon: "icon-jingqu",
            text: "景区介绍",
            to: "/scenicSpotIntroduction"
          },
          {
            icon: "icon-fabu",
            text: "活动资讯",
            to: "/activityInformation"
          },
          {
            icon: "icon-daolan",
            text: "电子地图",
            to: "/electronicMap"
          },
          {
            icon: "icon-daoyoufuwu",
            text: "电子导游",
            to: "/electronicNavigation"
          },
          {
            icon: "icon-keliuqushi",
            text: "数据感知",
            to: "/scenicSpotTraffic"
          },
          {
            icon: "icon-tingchechang",
            text: "预约停车",
            to: "/stopAppointment"
          },
        ]

      };
    },
    computed: {
      isShowHead() {
        return !this.isWechat;
      }
    },
    watch: {},
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
      }
    },
    created() {
      this.checkEnv();
    }
  };
</script>

<style lang="scss" scope>
  .swipe {
    width: 100%;
    height: px2rem(380px);

    .swipe-img {
      height: 100%;
      width: 100%;
    }
  }

  .grid {
    width: 100%;
    height: px2rem(380px);

    .iconfont {
      height: px2rem(50px);
      width: px2rem(50px);
      font-size: px2rem(50px);
      margin: px2rem(20px) 0;
      color: #3D11EE;
    }
  }
</style>
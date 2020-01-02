<template>
  <div id="scenicSpotIntroduction" class="contain">
    <Search @search="search"></Search>
    <div class="spotList">
      <div class="spot" v-for="spot in spots">
        <img class="spot-image" :src="spot.image" />

        <div class="spot-detail">
          <span class="spot-title">{{spot.title}}</span>
          <div class="spot-time">适游时间：{{spot.time}}</div>
          <div class="spot-desc">{{spot.desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Search from '@/components/search.vue'
  export default {
    name: 'scenicSpotIntroduction',
    data() {
      return {
        spots: [{
            title: '水生植物馆',
            desc: 'Whitehaven beachWhitesunday Island，Whitesunday Islands',
            time: '每年4月~7月',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577271721217&di=cd9ee3124e5880734682f6fde760271f&imgtype=0&src=http%3A%2F%2Fimg1.juimg.com%2F140915%2F330508-14091520514636.jpg'
          },
          {
            title: '海洋馆',
            desc: 'Whitehaven beachWhitesunday Island，Whitesunday Islands',
            time: '每年6月~9月',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577271750036&di=8d14f3395815f8e5505ea67e6fa31bc3&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F6t%2F9h%2FQJ9106150115.jpg%3Fx-oss-process%3Dstyle%2Fshows'
          },
          {
            title: '星空印象园',
            desc: 'Whitehaven beachWhitesunday Island，Whitesunday Islands',
            time: '全年',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577271639513&di=9baee638b3cb067410adc618e3daa386&imgtype=0&src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0621%2Ff53a66fda171a74be8e8c5b7e593321c.jpg'
          }
        ],
      };
    },
    computed: {},
    watch: {},
    components: {
      Search
    },
    methods: {
      search(searchWord) {
        console.log(searchWord)
      }
    },
    created() {}
  };
</script>

<style lang="scss" scope>
  .contain {
    background: #F8F8FA;
    width: 100%;
    height: 100%;
  }

  .spotList{
    margin-top: px2rem(120px);
  }

  .spot {
    margin: px2rem(30px) px2rem(30px) 0;
    background-color: #fff;
    box-shadow: 0px 0px px2rem(3px) px2rem(2px) rgba(0, 0, 0, 0.1);
    border-radius: px2rem(10px);
  }

  .spot-image {
    width: 100%;
    height: px2rem(300px);
  }

  .spot-detail {
    padding: 0 px2rem(20px) px2rem(20px) px2rem(20px);
  }

  .spot-title {
    position: relative;
    left: px2rem(20px);
    top: px2rem(-80px);
    color: #fff;
    font-size: px2rem(40px);
  }

  .spot-desc {
    color: #333;
  }

  .spot-time {
    color: #3D11EE;
    font-size: px2rem(30px);
    position: relative;
    left: 0;
    top: px2rem(-25px);

  }
</style>
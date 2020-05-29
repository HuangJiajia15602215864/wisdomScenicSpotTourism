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
  import {
    Toast
  } from 'vant';
  import Search from '@/components/search.vue'
  import {
    spots,findSpot
  } from '@/utils/apply.url';
  export default {
    name: 'scenicSpotIntroduction',
    data() {
      return {
        spots: [],
      };
    },
    computed: {},
    watch: {},
    components: {
      Search
    },
    mounted() {
      console.log(242354242)
      this.spots=[];
      spots({}, 'get').then(res => {
        console.log(11)
        if (res.length != 0) {
          var obj = {};
          for (let i = 0; i < res.length; i++) {
            obj = {
              title: res[i].title,
              time: this.timestampToTime(res[i].startDate) + '~' + this.timestampToTime(res[i].endDate),
              desc: res[i].descs,
              image: res[i].image
            };
            this.spots.push(obj)
          }
          console.log(this.spots)
        } else {
          Toast(res.msg);
        }
      }).catch(err => {
        console.log(22)
        Toast('获取失败' || res.msg);
      });
    },
    methods: {
      timestampToTime(timestamp) {
        var date = new Date(timestamp);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() + ' ';
        return Y + M + D ;
      },
      search(searchWord) {
        console.log('清空数据')
        this.spots=[];
        console.log(searchWord)
        const params = {
          searchWord: searchWord
        }
        findSpot(params, 'get').then(res => {
            this.spots = res;
        }).catch(err => {
          Toast('获取失败' || res.msg);
        });
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

  .spotList {
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
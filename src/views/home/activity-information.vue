<template>
  <div id="activityInformation" class="contain">
    <form action="/">
      <van-search placeholder="请输入关键词" v-model="value" @search="onSearch" @clear="onClear" />
    </form>
    <div class="activityInfoList">
      <div class="activity-info" v-for="activityInfo in activityInfoList">
        <div class="activity-info-detail">
          <span class="activity-info-title">{{activityInfo.title}}</span>
          <div class="activity-info-desc">{{activityInfo.desc}}</div>
        </div>
        <div>
        <img class="activity-info-image" :src="activityInfo.image" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    Search
  } from 'vant';
  export default {
    name: 'activityInformation',
    data() {
      return {
        value: '',
        activityInfoList: [{
            title: '水生植物馆',
            desc: 'Whitehaven beachWhitesunday Island，Whitesunday Islands',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577271721217&di=cd9ee3124e5880734682f6fde760271f&imgtype=0&src=http%3A%2F%2Fimg1.juimg.com%2F140915%2F330508-14091520514636.jpg'
          },
          {
            title: '海洋馆',
            desc: 'Whitehaven beachWhitesunday Island，Whitesunday Islands',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577271750036&di=8d14f3395815f8e5505ea67e6fa31bc3&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F6t%2F9h%2FQJ9106150115.jpg%3Fx-oss-process%3Dstyle%2Fshows'
          },
          {
            title: '星空印象园',
            desc: 'Whitehaven beachWhitesunday Island，Whitesunday Islands',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577271639513&di=9baee638b3cb067410adc618e3daa386&imgtype=0&src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0621%2Ff53a66fda171a74be8e8c5b7e593321c.jpg'
          }
        ],
      };
    },
    computed: {},
    watch: {},
    components: {},
    methods: {
      onSearch() {
        console.log(2222)
      },
      focus() {

      },
      onClear() {
        console.log(1111);
        this.value = '';
      }
    },
    created() {}
  };
</script>

<style lang="scss" scope>
  .contain {
    width: 100%;
    height: 100%;
  }

  .activity-info {
    background-color: #fff;
    padding: px2rem(20px);
    border-bottom: px2rem(1px) solid #ddd;
    display: flex;
    justify-content:space-between;
    align-items: center;
  }

  .activity-info-image {
    width: px2rem(220px);
    height: px2rem(180px);
  }

  .activity-info-title {
    font-size: px2rem(36px);
    color: #3D11EE;
    font-weight: 600;
    
  }

  .activity-info-desc {
    color: rgba(114, 116, 117, 1);
    margin-top: px2rem(30px);
  }
</style>
<template>
  <div id="activityInformation" class="contain">
    <Search @search="search"></Search>
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
  import Search from '@/components/search.vue'
  import {
    activityinfo,findActivity
  } from '@/utils/apply.url';
  export default {
    name: 'activityInformation',
    data() {
      return {
        activityInfoList: [],
      };
    },
    computed: {},
    watch: {},
    components: {
      Search
    },
    mounted() {
      this.activityInfoList = [];
      activityinfo({}, 'get').then(res => {
        console.log(11)
        if (res.length != 0) {
          var obj = {};
          for (let i = 0; i < res.length; i++) {
            obj = {
              title: res[i].title,
              desc: res[i].descs,
              image: res[i].image
            };
            this.activityInfoList.push(obj)
          }
          console.log(this.activityInfoList)
        } else {
          Toast(res.msg);
        }
      }).catch(err => {
        console.log(22)
        Toast('获取失败' || res.msg);
      });
    },
    methods: {
      search(searchWord) {
        this.activityInfoList = [];
        console.log(searchWord)
        const params = {
          searchWord: searchWord
        }
        findActivity(params, 'get').then(res => {
          this.activityInfoList = res;
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
    width: 100%;
    height: 100%;
  }

  .activityInfoList {
    margin-top: px2rem(100px);
  }

  .activity-info {
    background-color: #fff;
    padding: px2rem(20px);
    border-bottom: px2rem(1px) solid #ddd;
    display: flex;
    justify-content: space-between;
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
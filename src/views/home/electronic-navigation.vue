<template>
  <div class="electronic-navigation">
    <baidu-map :zoom="zoom" :scroll-wheel-zoom="true" ak="0o9pEEqKvk43AIHVDmrvtAWKAMmBpFdH" @ready="handler">
      <bm-view class="bm-view"></bm-view>
      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
    </baidu-map>
    <div class="intro-title">当前位置：{{address}}</div>
    <div class="intro-title">音频介绍：</div>
    <audio controls class="intro-audio">
      <source src="http://img.tukuppt.com/newpreview_music/09/00/19/5c890964aede516882.mp3" type="audio/mpeg">
      <source src="http://img.tukuppt.com/newpreview_music/09/00/19/5c890964aede516882.mp3" type="audio/ogg">
      <embed height="50" width="100" src="http://img.tukuppt.com/newpreview_music/09/00/19/5c890964aede516882.mp3">
    </audio>
    <div class="intro-title">客流量：</div>
    <div id="flowTrend" class="chart"></div>
  </div>
</template>
<script>
  var _this={};
  import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
  import {
    BmView,
    BmMapType,
    BmMarker,
    BmLabel
  } from 'vue-baidu-map'
  import echarts from 'echarts'
  import chartsOptions from './chartsOptions.js'
  export default {
    data() {
      return {
        zoom: 18,
        flowTrendCharts: '', // 客流趋势折线图（每天）
        address:''
      }
    },
    components: {
      BmView,
      BaiduMap,
      BmMapType,
      BmMarker,
      BmLabel
    },
    beforeCreate(){
        _this = this;
      },
    mounted() {
      // 绘制图表
      this.$nextTick(function () {
        this.drawCharts('flowTrend', 'flowTrendCharts', chartsOptions.flowTrendOption);
      })
    },
    methods: {
      // 地图自动定位
      handler({
        BMap,
        map
      }) {
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            var point = new BMap.Point(r.point.lng, r.point.lat);
            var gc = new BMap.Geocoder();
            gc.getLocation(point, function (rs) {
              _this.address = rs.address;
            })
          } else {
            alert('failed' + this.getStatus());
          }
        })
      },
      // 绘制图表公共函数
      drawCharts(id, chart, option) {
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption(option);
        window.addEventListener('resize', () => {
          this.chart.resize();
        });
      },
    }
  }
</script>
<style>
  .bm-view {
    width: 100%;
    height: 400px;
    margin-bottom: 20px;
  }

  .anchorBL img {
    display: none;
  }

  .intro-title {
    margin: 5px 0px 5px 5px;
    color: #3D11EE;
    font-weight: 600;
  }

  .intro-audio {
    width: 90%;
    margin: 0 5%;
  }

  .chart {
    width: 100%;
    height: 220px;
    margin-top: -40px;
    margin-left: 15px;
  }
</style>
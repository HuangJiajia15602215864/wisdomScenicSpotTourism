<template>
  <div class="electronic-navigation">
    <baidu-map :zoom="zoom" :scroll-wheel-zoom="true" ak="0o9pEEqKvk43AIHVDmrvtAWKAMmBpFdH"
      :center="{lng: 113.3737850000, lat: 23.1878410000}">
      <bm-view class="bm-view"></bm-view>
      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_PERSPECTIVE_MAP','BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
      <bm-marker :position="{lng:  113.3737850000, lat: 23.1878410000}" :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE">
        <bm-label content="您在BICC CENTER" :labelStyle="{color: 'blue', fontSize : '14px'}"
          :offset="{width: -35, height: 30}" />
      </bm-marker>
    </baidu-map>
    <div class="intro-title">当前位置：BICC CENTER</div>
    <div class="intro-title">音频介绍：</div>
    <audio controls class="intro-audio">
      <source src="horse.mp3" type="audio/mpeg">
      <source src="horse.ogg" type="audio/ogg">
      <embed height="50" width="100" src="horse.mp3">
    </audio>
    <div class="intro-title">客流量：</div>
    <div id="flowTrend" class="chart"></div>
  </div>
</template>
<script>
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
      }
    },
    components: {
      BmView,
      BaiduMap,
      BmMapType,
      BmMarker,
      BmLabel
    },
    mounted() {
      // 绘制图表
      this.$nextTick(function () {
        this.drawCharts('flowTrend', 'flowTrendCharts', chartsOptions.flowTrendOption);
      })
    },
    methods: {
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
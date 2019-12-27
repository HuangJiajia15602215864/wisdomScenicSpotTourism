<template>
  <div id="scenicSpotTraffic" class="contain">
    <van-tabs v-model="active" animated>
      <van-tab title="景区客流">
        <div class="chart-title">入园客流情况（每周）</div>
        <div id="flowSituation" class="chart"></div>
        <div class="chart-title">入园客流趋势（每天）</div>
        <div id="flowTrend" class="chart"></div>
        <div class="chart-title">各景点售票情况</div>
        <div id="ticketSales" class="chart"></div>
        <div class="chart-title">各景点客流变化（每天）</div>
        <div id="flowChange" class="chart"></div>
      </van-tab>

      <van-tab title="景区天气">
        <div class="chart-title">温度走势</div>
        <div id="temperatureChange" class="chart"></div>
        <div class="chart-title">湿度走势</div>
        <div id="humidityChange" class="chart"></div>
        <div class="chart-title">空气质量走势</div>
        <div id="airQualityChange" class="chart"></div>
      </van-tab>

      <van-tab title="景区车流">
        <div class="chart-title">车流拥挤程度</div>
        <div id="TrafficCongestion" class="chart"></div>
        <div class="chart-title">停车场空余位置</div>
        <div id="parkingSpace" class="chart"></div>

      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import {
    Tab,
    Tabs
  } from 'vant';
  import chartsOptions from './chartsOptions.js'
  export default {
    name: 'scenicSpotTraffic',
    data() {
      return {
        active: 0,
        flowSituationCharts: '', //入园客流情况柱状图（每周）
        flowTrendCharts: '', // 入园客流趋势折线图（每天）
        ticketSalesCharts: '', // 各景点售票情况（长期统计）
        flowChangeCharts: '', // 各景点客流变化（每天）

        temperatureChangeChange: '', // 温度走势（折线图）
        humidityChangeCharts: '', // 湿度走势（折线图）
        airQualityChangeCharts: '', // 空气质量走势 （折线图）

        TrafficCongestionCharts: '',// 车流拥挤程度
        parkingSpaceCharts: '',// 停车场空余位置
      };
    },
    computed: {},
    watch: {},
    components: {},
    mounted() {
      this.$nextTick(function () {
        this.drawCharts('flowSituation','flowSituationCharts',chartsOptions.flowSituationOption);
        this.drawCharts('flowTrend','flowTrendCharts',chartsOptions.flowTrendOption);
        this.drawCharts('ticketSales','ticketSalesCharts',chartsOptions.ticketSalesOption);
        this.drawCharts('flowChange','flowChangeCharts',chartsOptions.flowChangeOption);
      })
    },
    methods: {
      // 绘制图表公共函数
      drawCharts(id,chart,option){
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption(option);
        window.addEventListener('resize', () => {
          this.chart.resize();
        });        
      },
    },
  };
</script>

<style lang="scss">
  .contain {
    width: 100%;
    height: 100%;
  }

  .chart-title {
    /* border-bottom:px2rem(1px) solid #ccc; */
    color: #333;
    font-size: px2rem(34px);
    padding: px2rem(20px);
  }

  .chart {
    width: 100%;
    border-bottom: px2rem(1px) solid #888;
    margin-bottom: px2rem(50px);
  }

  #flowSituation {
    height: px2rem(500px);
    margin-top: px2rem(-50px);
  }

  #flowTrend {
    height: px2rem(450px);
    margin-top: px2rem(-50px);
  }

  #ticketSales{
    height: px2rem(500px);
  }

  #flowChange {
    height: px2rem(800px);
    margin-top: px2rem(20px);
  }
</style>
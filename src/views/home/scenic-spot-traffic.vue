<template>
  <div id="scenicSpotTraffic" class="contain">
    <div class="chart-title">景区客流变化</div>
    <div id="flowChange"></div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    name: 'scenicSpotTraffic',
    data() {
      return {
        flowChangeCharts: '',

      };
    },
    computed: {},
    watch: {},
    components: {},
    methods: {
      drawFlowChange(id) {
        this.flowChangeCharts = echarts.init(document.getElementById(id));
        var option = {
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['海洋馆', '热带温室植物馆', '水上乐园', '星空印象馆', '游乐场']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['7:00', '9:00', '11:00', '13:00', '15:00', '17:00', '19:00']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
              name: '海洋馆',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '热带温室植物馆',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '水上乐园',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '星空印象馆',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '游乐场',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        };
        this.flowChangeCharts.setOption(option);
        window.addEventListener('resize', () => {
          this.flowChangeCharts.resize();
        });
      }


    },
    mounted() {
      this.drawFlowChange('flowChange');
    },
    created() {}
  };
</script>

<style lang="scss">
  .contain {
    width: 100%;
    height: 100%;
  }
  .chart-title{
    border-bottom:px2rem(1px) solid #ddd;
    color:#333;
    font-size:px2rem(34px);
    padding:px2rem(20px);
  }
  #flowChange{
    // width:px2rem(700px);
    width:100%;
    height:px2rem(800px);
  }
</style>
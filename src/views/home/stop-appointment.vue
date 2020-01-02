<template>
  <div id="stopAppointment" class="contain">
    <div class="image"></div>
    <van-cell-group>
      <van-field v-model="carNum" clearable label="车牌号" placeholder="请输入车牌号" />
      <van-cell is-link @click="showPopup('date')">停车日期<span class="parking-time"
          id="parking-date">{{parkingDate}}</span></van-cell>
      <van-cell is-link @click="showPopup('time')">停车时间<span class="parking-time"
          id="parking-time">{{parkingTime}}</span></van-cell>
    </van-cell-group>

    <van-popup v-model="showSelectPopup" position="bottom">
      <van-datetime-picker class="datetime-picker" @confirm="confirmSelect" @cancel="cancelSelect" @change="getValues"
        v-model="currentDate" :title="title" :type="type" :min-date="minDate" :max-date="maxDate" :max-hour="maxHour"
        :min-hour="minHour" />
    </van-popup>
    <div class="appoint-button">确认预约</div>
  </div>
</template>
<script>
  import {
    Field,
    DatetimePicker,
    Popup
  } from 'vant';
  export default {
    name: 'stopAppointment',
    data() {
      return {
        carNum: '',
        parkingDate: '',
        parkingTime: '',
        currentSelectDate:'',
        showSelectPopup: false,
        title: "请选择停车日期",
        type: "date", //type:date/time
        minDate: new Date(),
        maxHour: 21,
        minHour: 7,
        currentDate: new Date()
      };
    },
    computed: {
      // 预约最大的日期（可提前七天预约）
      maxDate() {
        var currentDate = new Date().valueOf();
        var maxDate = currentDate + 7 * 24 * 60 * 60 * 1000;
        maxDate = new Date(maxDate);
        return maxDate;
      }
    },
    watch: {},
    components: {},
    methods: {
      // 弹出选择器
      showPopup(value) {
        if (value == 'date') {
          this.title = "请选择停车日期";
          this.type = "date";
        } else {
          this.title = "请选择停车时间";
          this.type = "time";
        }
        this.showSelectPopup = true;
      },
      // 确定选择
      confirmSelect() {
        this.showSelectPopup = false;
         if (this.currentSelectDate.indexOf('-')>-1) {
           this.parkingDate=this.currentSelectDate;
         }else{
           this.parkingTime=this.currentSelectDate;
         }
      },
      // 取消选择
      cancelSelect() {
        this.showSelectPopup = false;
      },
      // 获取选择数据
      getValues(value) {
        if (value.children.length==3) { // 日期
        var year=value.children[0].options[value.children[0].currentIndex];
        var month=value.children[1].options[value.children[1].currentIndex];
        var date=value.children[2].options[value.children[2].currentIndex];
        this.currentSelectDate=year+'-'+month+'-'+date;
       } else { // 时间
        var hour = value.children[0].options[value.children[0].currentIndex];
        var minute= value.children[1].options[value.children[1].currentIndex];
        this.currentSelectDate=hour+':'+minute;
        }
      }

    },
  };
</script>

<style lang="scss" scope>
  .image {
    width: 100%;
    height: px2rem(380px);
    margin-bottom: px2rem(30px);
    background: url("../../assets/images/parking.jpg") center center no-repeat;
    background-size: 100% 100%;
  }

  .datetime-picker {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: px2rem(600px);
  }

  .van-cell {
    font-size: px2rem(32px);
  }

  .parking-time {
    margin-left: px2rem(40px);
    color: #969799;
  }

  .appoint-button{
    background-color: #3D11EE;
    color: #fff;
    font-size: px2rem(32px);
    width: 86%;
    border-radius: px2rem(10px);
    margin: px2rem(120px) 7%;
    padding: px2rem(25px) 0;
    text-align: center;
  }
</style>
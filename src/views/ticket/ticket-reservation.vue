<template>
  <div id="ticketReservation">
    <div class="ticket-line">
      <div>
        <span class="icon iconfont iconfont-title">&#xe60c;</span>
        <span class="ticket-title">购票类型</span>
      </div>
      <span class="ticket-select">{{selectTicketType}}</span>
    </div>
    <van-collapse v-model="ticketType" accordion>
      <van-collapse-item v-for="item in ticketList" :name="item.id">
        <div slot="title">{{item.title}}
          <span class="ticket-price">￥{{item.price}}</span>
        </div>
        <div class="ticket-detail">
          <span class="ticket-desc">{{item.desc}}</span>
          <span class="ticket-select-button" @click="select(item)">确定</span>
        </div>
      </van-collapse-item>
    </van-collapse>

    <div class="ticket-line" @click="showPopup">
      <div>
        <span class="icon iconfont iconfont-title">&#xe60a;</span>
        <span class="ticket-title">游玩日期</span>
      </div>
      <span class="ticket-select" v-if="selectPlayDate">{{selectPlayDate}}</span>
      <span class="icon iconfont ticket-select" v-if="!selectPlayDate" 
        style="margin-right: 25px">&#xe62c;</span>

    </div>

    <div class="ticket-line">
      <div>
        <span class="icon iconfont iconfont-title">&#xe611;</span>
        <span class="ticket-title">游玩人数</span>
      </div>
      <span class="ticket-select">{{touristList.length}}</span>
    </div>
    <div class="tourist-list">
      <div class="tourist-info" v-for="tourist in touristList">
        <div style="display: flex;">
        <div @click="editTourist(tourist)"><span class="icon iconfont operator">&#xe626;</span></div>
        <div class="tourist-detail">
          <div>
            <span class="tourist-name">{{tourist.name}}</span>
            <span class="tourist-tag" v-if="tourist.ticketType==0">普通票</span>
            <span class="tourist-tag" v-if="tourist.ticketType==1">儿童票</span>
            <span class="tourist-tag" v-if="tourist.ticketType==2">学生票</span>
            <span class="tourist-tag" v-if="tourist.ticketType==3">老人票</span>
            <span class="tourist-tag" v-if="tourist.ticketType==4">残疾票</span>
          </div>
          <div class="tourist-idCard">{{tourist.idCard}}</div>
        </div>
      </div>
        <span class="icon iconfont delete" @click="deleteTourist(tourist)">&#xe62d;</span>
      </div>
      <div class="addTourist">
        <span class="icon iconfont icon-jia"></span>
        <span class="addTourist-text" @click="addTourist">添加游客</span>
      </div>
    </div>

    <div class="pay-button">￥{{ticketPay}}/确认支付</div>
    <van-popup v-model="showSelectPopup" position="bottom">
      <van-datetime-picker class="datetime-picker" @confirm="confirmSelect" @cancel="cancelSelect" @change="getValues"
        v-model="currentDate" :title="title" :type="type" :min-date="minDate" :max-date="maxDate" />
    </van-popup>
  </div>
</template>
<script>
  import {
    Collapse,
    CollapseItem,
    DatetimePicker,
    Popup,
    Dialog
  } from 'vant';
  export default {
    name: 'ticketReservation',
    data() {
      return {
        ticketType: '0',
        selectTicketType: '',
        currentPlayDate:'',// 当前选择器上时间
        selectPlayDate: '',// 确认选择时间
        touristsNumber: '',
        showSelectPopup: false,
        title: "请选择游玩日期",
        type: "date",
        minDate: new Date(),
        currentDate: new Date(),
        ticketList: [{
            id: '1',
            title: '入园票',
            price: '100',
            desc: '开放时间可入园游玩！'
          },
          {
            id: '2',
            title: '入园票+海洋馆+游乐场',
            price: '200',
            desc: '开放时间可入园游玩，畅游海洋馆和游乐场！'
          },
          {
            id: '3',
            title: 'VIP票',
            price: '500',
            desc: '一票在手，全园畅游！'
          }
        ],
        touristList: [{
            name: '黄佳佳',
            ticketType: '0',
            idCard: '445221199811184561'
          },
          {
            name: '黄佳佳',
            ticketType: '1',
            idCard: '445221199811184562'
          },
          {
            name: '黄佳佳',
            ticketType: '2',
            idCard: '445221199811184563'
          },
          {
            name: '黄佳佳',
            ticketType: '3',
            idCard: '445221199811184564'
          },
        ],
      };
    },
    computed: {
      ticketPay() {
        var sum = 0;
        for (var i = 0; i < this.ticketList.length; i++) {
          if (this.selectTicketType = this.ticketList[i].title) {
            var unitPrice = this.ticketList[i].price;
            break;
          }
        }
        for (var j = 0; j < this.touristList.length; j++) {
          var price = unitPrice;
          if (this.touristList[j].ticketType != '0') {
            price = unitPrice / 2;
          }
          sum += Number(price);
        }
        return sum;
      },
            // 预约最大的日期（可提前七天预约）
            maxDate() {
        var currentDate = new Date().valueOf();
        var maxDate = currentDate + 7 * 24 * 60 * 60 * 1000;
        maxDate = new Date(maxDate);
        return maxDate;
      }
    },
    mounted() {
      if (this.$route.query.tourist != undefined) {
        this.touristList.push(this.$route.query.tourist);
        console.log(this.touristList)
      } else {
        console.log('主页跳进来')
      }
    },
    methods: {
      // 选择购票类型
      select(item) {
        this.selectTicketType = item.title;
      },
      // 弹出选择器
      showPopup() {
        this.showSelectPopup = true;
      },
      // 获取选择数据
      getValues(value) {
        var year=value.children[0].options[value.children[0].currentIndex];
        var month=value.children[1].options[value.children[1].currentIndex];
        var date=value.children[2].options[value.children[2].currentIndex];
        this.currentPlayDate=year+'-'+month+'-'+date;
      },
      // 确定选择
      confirmSelect() {
        this.showSelectPopup = false;
        this.selectPlayDate = this.currentPlayDate;
      },
      // 取消选择
      cancelSelect() {
        this.showSelectPopup = false;
      },
      // 添加游客
      addTourist() {
        this.$router.push({
          path: '/ticketReservation/editTourist'
        });
      },
      // 编辑游客
      editTourist(tourist) {
        console.log('编辑')
        this.touristList.forEach((item,index) => {
          if (item.idCard == tourist.idCard) {
            this.touristList.splice(index, 1);
            index ++;
          }
        });
        console.log(this.touristList)
        this.$router.push({
          path: '/ticketReservation/editTourist',
          query: {tourist: tourist} 
        });
      },
      // 删除游客
      deleteTourist(tourist) {
        Dialog.confirm({
          title: '温馨提示',
          message: '确定删除该游客信息？'
        }).then(() => {
          var index=0;
          this.touristList.forEach((item,index) => {
          if (item.idCard == tourist.idCard) {
            this.touristList.splice(index, 1);
            index ++;
          }
        });
        }).catch(() => {      
        });
      }
    },
  };
</script>

<style lang="scss" scoped>
  .ticket-line {
    width: 100%;
    padding: px2rem(20px);
    margin-right: px2rem(50px);
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    background-color: #fff;

    .iconfont-title {
      color: #3D11EE;
      font-size: px2rem(40px);
    }

    .ticket-title {
      color: #3D11EE;
      font-size: px2rem(36px);
      margin-left: px2rem(20px);
    }

    .ticket-select {
      color: #ccc;
      margin-right: px2rem(30px);
    }
  }

  .van-cell {
    .van-cell__title {
      font-size: px2rem(34px);
    }

    .ticket-price {
      border: px2rem(1px) solid #ff3300;
      color: #ff3300;
      font-size: px2rem(24px);
      border-radius: px2rem(5px);
      padding: 0 px2rem(10px);
      margin-left: px2rem(20px);
    }
  }


  .ticket-detail {
    border-bottom: px2rem(1px) solid #ddd;
    font-size: px2rem(30px);
    padding: px2rem(20px) 0;
    margin-top: px2rem(-50px);
    display: flex;
    justify-content: space-between;
  }

  .ticket-desc {
    width: px2rem(550px);
  }

  .ticket-select-button {
    background-color: #00b300;
    color: #fff;
    font-size: px2rem(30px);
    border-radius: px2rem(10px);
    padding: px2rem(10px) px2rem(20px);
    position: absolute;
    top: px2rem(70px);
    right: 0;
  }

  .tourist-list {
    margin-bottom: px2rem(20px);
    padding: px2rem(20px) 0 px2rem(10px) 0;
    background-color: #eee;

    .tourist-info {
      background-color: #fff;
      padding: px2rem(20px);
      margin: 0 px2rem(20px) px2rem(20px) px2rem(20px);
      border-radius: px2rem(10px);
      display: flex;
      justify-content: space-between;
      text-align: center;
      align-items: center;

      .operator {
        font-size: px2rem(40px);
        color: green;
      }

      .delete {
        font-size: px2rem(40px);
        color: red;
      }

      .tourist-detail {
        margin-left: px2rem(20px);
        display: flex;
        flex-direction: column;
        align-items: center;
        align-items: flex-start;
        text-align: left;

        .tourist-tag {
          border: px2rem(1px) solid #888;
          color: #888;
          padding: 0 px2rem(10px);
          margin-left: px2rem(20px);
          font-size: px2rem(28px);
          border-radius: px2rem(10px);
        }

        .tourist-idCard {
          font-size: px2rem(28px);
          color: #888;
          margin-top: px2rem(20px);
        }
      }
    }

    .addTourist {
      background-color: #fff;
      padding: px2rem(20px);
      margin: 0 px2rem(20px) px2rem(20px) px2rem(20px);
      text-align: center;
      border-radius: px2rem(10px);

      .icon-jia {
        color: green;
        font-size: px2rem(32px);
        font-weight: 800;
        margin-right: px2rem(30px);
      }
    }
  }

  .pay-button {
    background-color: #3D11EE;
    color: #fff;
    font-size: px2rem(32px);
    width: 86%;
    border-radius: px2rem(10px);
    margin: px2rem(20px) 7% px2rem(120px) 7%;
    padding: px2rem(25px) 0;
    text-align: center;
  }
</style>
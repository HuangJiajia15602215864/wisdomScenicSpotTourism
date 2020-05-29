<template>
  <div id="ticketReservation">
    <div class="ticket-line">
      <div>
        <span class="icon iconfont iconfont-title">&#xe60c;</span>
        <span class="ticket-title">购票类型</span>
      </div>
      <span class="ticket-select">{{ticketInfo.selectTicketType}}</span>
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
      <span class="ticket-select" v-if="ticketInfo.selectPlayDate">{{ticketInfo.selectPlayDate}}</span>
      <span class="icon iconfont ticket-select" v-if="!ticketInfo.selectPlayDate"
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
              <!-- <span class="tourist-tag" v-if="tourist.ticketType==0">普通票</span>
              <span class="tourist-tag" v-if="tourist.ticketType==1">儿童票</span>
              <span class="tourist-tag" v-if="tourist.ticketType==2">学生票</span>
              <span class="tourist-tag" v-if="tourist.ticketType==3">老人票</span>
              <span class="tourist-tag" v-if="tourist.ticketType==4">残疾票</span> -->
            </div>
            <div class="tourist-idCard">{{tourist.idCard| idCardFilter}}</div>
          </div>
        </div>
        <span class="icon iconfont delete" @click="deleteTourist(tourist)">&#xe62d;</span>
      </div>
      <div class="addTourist" @click="addTourist">
        <span class="icon iconfont icon-jia"></span>
        <span class="addTourist-text">添加游客</span>
      </div>
    </div>

    <div class="pay-button" @click="pay">￥{{ticketPay}}/确认支付</div>

    <van-popup v-model="showSelectPopup" position="bottom">
      <van-datetime-picker class="datetime-picker" @confirm="confirmSelect" @cancel="cancelSelect" @change="getValues"
        v-model="currentDate" :title="title" :type="type" :min-date="minDate" :max-date="maxDate" />
    </van-popup>

    <van-popup v-model="isEdit">
      <van-cell-group>
        <van-field class="cellEdit" v-model="name" clearable label="姓名" placeholder="请输入姓名" />
        <van-field class="cellEdit" v-model="idCard" clearable label="证件号码" placeholder="请输入证件号码" />
      </van-cell-group>
      <div class="confirm-button" @click="editTourists">确定</div>
    </van-popup>
  </div>
</template>
<script>
  import {
    Collapse,
    CollapseItem,
    DatetimePicker,
    Popup,
    Dialog,
    Toast,
    CellGroup,
    Field
  } from 'vant';
  import {
    buy,
    tickets
  } from '@/utils/apply.url';
  import {
    isNoValue,
    isName,
    isCardID
  } from '@/utils/verify'
  export default {
    name: 'ticketReservation',
    data() {
      return {
        ticketType: '', // 控制手风琴关闭
        currentPlayDate: '', // 当前选择器上时间
        showSelectPopup: false,
        title: "请选择游玩日期",
        type: "date",
        userTel: '',
        minDate: new Date(),
        currentDate: new Date(),
        ticketInfo: { // 购票信息
          ticketId: '',
          selectPlayDate: '',
          touristsNumber: '',
          ticketPay: '',
          uTel:'',
          selectTicketType:''
        },
        name:'',
        idCard: '',
        isEdit: false,
        ticketList: [],
        touristList: [],
      };
    },
    filters: {
      idCardFilter(idCard) {
        return idCard.substr(0, 6) + "****" + idCard.substr(14);
      }
    },
    computed: {
      ticketPay() {
        var sum = 0; // 总价
        var unitPrice = 0; // 单价
        for (var i = 0; i < this.ticketList.length; i++) {
          if (this.ticketInfo.selectTicketType == this.ticketList[i].title) {
            unitPrice = this.ticketList[i].price;
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
      this.userTel = sessionStorage.getItem('userTel');
      // if (this.$route.query.tourist != undefined) {
      //   console.log(this.$route.query.tourist)
      //   this.touristList.push(this.$route.query.tourist);
      //   console.log(this.touristList)
      //   this.ticketInfo.ticketType = sessionStorage.getItem("ticketType");
      //   this.ticketInfo.selectTicketType = sessionStorage.getItem("selectTicketType");
      //   this.ticketInfo.selectPlayDate = sessionStorage.getItem("selectPlayDate");
      // } else {
      //   console.log('主页跳进来')
      // }
      this.getTicketData();
    },
    methods: {
      // 获取电子门票数据
      getTicketData() {
        this.ticketList = [];
        tickets({}, 'get').then(res => {
          if (res.length != 0) {
            var obj = {};
            for (let i = 0; i < res.length; i++) {
              obj = {
                id: res[i].id,
                title: res[i].title,
                desc: res[i].descs,
                price: res[i].price
              };
              this.ticketList.push(obj)
            }
          } else {
            this.$message.success(res.msg);
          }
        }).catch(err => {
          console.log(22)
          this.$message.success('获取失败' || res.msg);
        });
      },
      // 选择购票类型
      select(item) {
        this.ticketInfo.ticketId = item.id;
        this.ticketInfo.selectTicketType = item.title;
        this.ticketType = '';
      },
      // 弹出选择器
      showPopup() {
        this.showSelectPopup = true;
      },
      // 获取选择数据
      getValues(value) {
        var year = value.children[0].options[value.children[0].currentIndex];
        var month = value.children[1].options[value.children[1].currentIndex];
        var date = value.children[2].options[value.children[2].currentIndex];
        this.currentPlayDate = year + '-' + month + '-' + date;
      },
      // 确定选择(日期)
      confirmSelect() {
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;
        var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
        var today = year + "-" + month + "-" + day;
        this.showSelectPopup = false;
        this.ticketInfo.selectPlayDate = this.currentPlayDate == '' ? today : this.currentPlayDate;
      },
      // 取消选择
      cancelSelect() {
        this.showSelectPopup = false;
      },
      // 添加游客
      addTourist() {
        this.isEdit=true;
        this.name='';
        this.idCard='';
      },
      // 编辑游客
      editTourist(tourist) {
        this.isEdit=true;
        console.log('编辑')
        this.touristList.forEach((item, index) => {
          if (item.idCard == tourist.idCard) {
            this.touristList.splice(index, 1);
            index++;
          }
        });
        console.log(this.touristList)
      },
      // 删除游客
      deleteTourist(tourist) {
        Dialog.confirm({
          title: '温馨提示',
          message: '确定删除该游客信息？'
        }).then(() => {
          var index = 0;
          this.touristList.forEach((item, index) => {
            if (item.idCard == tourist.idCard) {
              this.touristList.splice(index, 1);
              index++;
            }
          });
        }).catch(() => {});
      },
      // 点击确认支付按钮
      pay() {
        this.ticketInfo.touristsNumber = this.touristList.length;
        this.ticketInfo.ticketPay = this.ticketPay;
        if (isNoValue(this.ticketInfo.selectTicketType)) {
          Toast('购票类型不能为空')
          return
        }
        if (isNoValue(this.ticketInfo.selectPlayDate)) {
          Toast('游玩日期不能为空')
          return
        }
        if (this.ticketInfo.touristsNumber == 0) {
          Toast('游玩人数不能为0')
          return
        }
        console.log(this.ticketInfo)
        var params = {
          selectPlayDate: this.ticketInfo.selectPlayDate,
          number: Number(this.ticketInfo.touristsNumber),
          ticketPay: this.ticketPay,
          uTel: this.userTel,
          ticketId:this.ticketInfo.ticketId
        }
        console.log(params)
        buy(params, 'post').then(res => {
          if (res.code == '200') { // 购票成功
            Toast('购票成功，可前往个人中心查看购票信息');
          } else { // 该车对应时间段已购票
            Toast('您已预约对应时间段');
          }
        }).catch(err => {
          Toast('登录失败' || res.msg);
        });
        Toast.success('支付成功');
      },
      // 点击确定按钮，完成编辑
      editTourists() {
        var tourist={
          name:this.name,
          idCard:this.idCard,
          ticketType:0
        };
        if (isNoValue(tourist.name)) {
          Toast('姓名不能为空')
          return
        }
        if (isNoValue(tourist.idCard)) {
          Toast('证件号码不能为空')
          return
        }
        if (!isName(tourist.name)) {
          Toast('姓名格式有误')
          return
        }
        if (!isCardID(tourist.idCard)) {
          Toast('证件号码格式有误')
          return
        }
        console.log(tourist);
        this.touristList.push(tourist)
        console.log(this.touristList)
        this.isEdit=false;
      }
    },
  };
</script>

<style lang="scss" scoped>
  /* 电子门票类型 */
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
      margin-right: px2rem(40px);
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

  .parking-time {
    margin-left: 12% !important;
    color: #323233 !important;
  }

  .confirm-button {
    background-color: #3D11EE;
    color: #fff;
    font-size: px2rem(32px);
    width: 86%;
    border-radius: px2rem(10px);
    margin: px2rem(120px) 7%;
    padding: px2rem(15px) 0;
    text-align: center;
  }
  .cellEdit{
    padding: px2rem(10px);
    margin-top:px2rem(20px) ;
  }

  .van-popup--center{
    width: px2rem(550px);
  }
</style>
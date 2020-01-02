<template>
  <div class="editTourist">
    <van-cell-group>
      <van-cell is-link @click="showPopup">游客类型
        <span class="parking-time">{{ticketTypeDesc}}</span>
      </van-cell>
      <van-field v-model="tourist.name" clearable label="姓名" placeholder="请输入姓名" />
      <van-field v-model="tourist.idCard" clearable label="证件号码" placeholder="请输入证件号码" />
    </van-cell-group>

    <div class="confirm-button" @click="editTourist">确定</div>

    <van-popup v-model="showPicker" position="bottom">
      <van-picker show-toolbar :columns="columns" :title="title" @cancel="showPicker = false" @confirm="onConfirm" />
    </van-popup>
  </div>
</template>
<script>
  import {
    Field,
    Popup,
    Picker,
    Cell,
    CellGroup,
  } from 'vant';
  export default {
    name: 'editTourist',
    data() {
      return {
        ticketType: '',
        ticketTypeDesc: '',
        name: '',
        idCard: '',
        showPicker: false,
        columns: ['普通票', '儿童票', '学生票', '老人票', '残疾票'],
        title: '请选择游客类型',
        tourist: {
          name: '',
          ticketType: '',
          idCard: ''
        }
      };
    },
    mounted() {
      if (this.$route.query.tourist != undefined) {
        console.log(this.$route.query.tourist)
        this.tourist = this.$route.query.tourist;
        this.ticketTypeDesc = this.columns[this.tourist.ticketType];
      } else {
        console.log('新增')
      }
    },
    methods: {
      // 弹出选择框
      showPopup() {
        this.showPicker = true;
      },
      // 点击确定按钮
      onConfirm(value, index) {
        this.ticketTypeDesc = value;
        this.tourist.ticketType = index;
        this.showPicker = false;
      },
      // 点击确定按钮，完成编辑
      editTourist() {
        console.log(this.tourist);
        this.$router.push({
          path: '/ticketReservation',
          query: {
            tourist: this.tourist
          }
        });
      }
    },
  };
</script>

<style lang="scss" scope>
  .van-cell {
    font-size: px2rem(32px);
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
    padding: px2rem(25px) 0;
    text-align: center;
  }
</style>
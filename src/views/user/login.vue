<template>
  <div id="login">
    <div class="image"></div>
    <van-cell-group>
      <van-field v-model="tel" clearable label="手机号" placeholder="请输入手机号码" type="tel" left-icon="user-circle-o" />
      <van-field v-model="password" clearable type="password" label="密码" placeholder="请输入密码" left-icon="lock" />
    </van-cell-group>
    <div class="login-box">
    <span class="register">没有账号</span>
    <span class="register">忘记密码</span>
  </div>
    <div class="login-button">登录</div>
  </div>
</template>
<script>
  import {
    Field,
    Icon,
    CellGroup
  } from 'vant';
  export default {
    name: 'login',
    data() {
      return {
        tel: '',
        password: '',
      };
    },
    computed: {

    },
    watch: {},
    components: {

    },
    methods: {

    },
    created() {

    }
  };
</script>

<style lang="scss">
  .van-cell {
    color: #3D11EE;
    font-size: px2rem(32px);
    line-height: px2rem(48px);

    .van-field__left-icon .van-icon{
      font-size: px2rem(45px);
    }

    .van-field__label {
      width: px2rem(130px);
      margin-right: px2rem(40px);
      text-align: left;
    }

    .van-field__body {
      ::-webkit-input-placeholder {
        /*Webkit browsers 谷歌*/
        font-size: px2rem(30px);
      }

      :-moz-placeholder {
        /*Mozilla Firefox 4 to 8 火狐*/
        font-size: px2rem(30px);
      }

      ::moz-placeholder {
        /*Mozilla Firefox 19+ 火狐*/
        font-size: px2rem(30px);
      }

      :-ms-input-placeholder {
        /*Internet Explorer 10+ IE10以上*/
        font-size: px2rem(30px);
      }

    }
  }
  .image{
    width: 100%;
    height: px2rem(380px);
    margin-bottom: px2rem(30px);
    /* background-image: url(""); */
    border:1px solid red;
  }
  .login-box{
    display: flex;
    justify-content: space-between;
    margin: px2rem(20px) px2rem(20px);
    .register{
    color: #888;
    font-size: px2rem(28px);
  }
  }
  .login-button{
    background-color: #3D11EE;
    color: #fff;
    font-size: px2rem(32px);
    width: px2rem(600px);
    border-radius: px2rem(10px);
    margin: px2rem(120px) px2rem(50px);
    padding: px2rem(25px) 0;
  }
</style>
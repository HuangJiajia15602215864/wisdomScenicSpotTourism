<template>
  <div id="login">
    <div class="image"></div>
    <van-cell-group>
      <van-field v-model="userInfo.tel" clearable label="手机号" placeholder="请输入手机号码" type="tel" left-icon="user-circle-o" />
      <van-field v-model="userInfo.password" clearable type="password" label="密码" placeholder="请输入密码" left-icon="lock" />
    </van-cell-group>
    <div class="login-box">
      <span class="register" @click="goRegister">没有账号</span>
      <span class="register">忘记密码</span>
    </div>
    <div class="login-button" @click="login">登录</div>
  </div>
</template>
<script>
  import {
    Field,
    Icon,
    CellGroup,
    Toast
  } from 'vant';
    import {
    isNoValue,isPhone,isPwdOrAccount
  } from '@/utils/verify'
  export default {
    name: 'login',
    data() {
      return {
        userInfo:{
        tel: '',
        password: '',
        }
      };
    },
    computed: {

    },
    watch: {},
    components: {

    },
    methods: {
      // 点击没有账号
      goRegister() {
        this.$router.push({
          path: '/register',
        });
      },
      // 点击登录按钮
      login(){
        if (isNoValue(this.userInfo.tel)) {
          Toast('手机号码不能为空')
          return
        }
        if (isNoValue(this.userInfo.password)) {
          Toast('密码不能为空')
          return
        }
        if (!isPhone(this.userInfo.tel)) {
          Toast('手机号码格式有误')
          return
        }
        if (!isPwdOrAccount(this.userInfo.password)) {
          Toast('密码格式有误'+'\n'+'正确格式:8~32位数字+英文')
          return
        }
        this.$router.push({
          path: '/userCenter',
        });
      }

    },

  };
</script>

<style lang="scss" scope>
  .van-cell {
    color: #3D11EE;
    font-size: px2rem(32px);
    line-height: px2rem(48px);

    .van-field__left-icon .van-icon {
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

  .image {
    width: 100%;
    height: px2rem(380px);
    margin-bottom: px2rem(30px);
    /* background-image: url(""); */
    border: 1px solid red;
  }

  .login-box {
    display: flex;
    justify-content: space-between;
    margin: px2rem(20px) px2rem(20px);

    .register {
      color: #888;
      font-size: px2rem(28px);
    }
  }

  .login-button {
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
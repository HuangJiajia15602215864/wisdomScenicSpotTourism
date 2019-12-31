import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 用户信息
        userInfo: {
            userCode: '',
            userName: '',
            userTel: '',
            userType: '',
            portrait: '',
            idCard: '',
        },
        isWechat: false, //是否为微信环境  
    },
    mutations: {
        setUserInfo(state, userInfo) {
            if (!userInfo) {
                state.userInfo = {
                    userCode: '',
                    userName: '',
                    userTel: '',
                    userType: '',
                    portrait: '',
                    idCard: '',
                }
            } else {
                setObj(state.userInfo, userInfo)
            }
        },
        setIsWechat(state, isWechat) {
            state.isWechat = isWechat
        },
    },
    actions: {}
})
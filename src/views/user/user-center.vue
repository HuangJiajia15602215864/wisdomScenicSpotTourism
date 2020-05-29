<template>
    <div class="userCenter">
        <div class="user-info">
            <div class="user-card">
                <div class="user-type" v-if="isLogin"></div>
                <div class="user-type-desc" v-if="isLogin">{{user.userType?'尊贵会员':'普通用户'}}</div>
                <div class="user-portrait"></div>
                <div class="user-name" v-if="isLogin">{{user.nickName}}</div>
                <div class="user-tel" v-if="isLogin">{{telShow}}</div>

                <div class="user-login" v-if="!isLogin" @click="goLogin">尚未登录，请跳转登录
                    <span class="icon-go">
                        <span class="icon iconfont icon-xiangyou"></span>
                    </span>
                </div>
            </div>
        </div>
        <van-collapse v-model="activeNames" accordion style="margin-top: 90px;">
            <van-collapse-item name="myTicket" :class="activeNames=='myTicket'?'active':''">
                <div slot="title" class="collapse-title"><span
                        class="icon iconfont collapse-icon">&#xe67b;</span><span>我的门票</span></div>
                <!-- 手风琴——门票 -->
                <van-card v-for="(item,index) in ticketList" :key="index" :num="item.number" :price="item.ticketPay"
                    :title="item.title" :thumb="item.image" @click="showTicketDetail('ticket',item)">
                    <div slot="tags">
                        <div>{{item.descs}}</div>
                        <div>日期：{{item.selectPlayDate}}</div>
                        <!-- <van-tag plain type="danger" v-if="item.ticketType1==0">普通票</van-tag>
                        <van-tag plain type="danger" v-if="item.ticketType1==1">儿童票</van-tag>
                        <van-tag plain type="danger" v-if="item.ticketType1==2">学生票</van-tag>
                        <van-tag plain type="danger" v-if="item.ticketType1==3">老人票</van-tag>
                        <van-tag plain type="danger" v-if="item.ticketType1==4">残疾票</van-tag> -->
                        <!-- <div class="logo used" v-if="item.status==0">已使用</div> -->
                        <div class="logo unused" v-if="item.status==1">未使用</div>
                        <div class="logo overdue" v-if="item.status==2">已使用</div>
                    </div>
                </van-card>
            </van-collapse-item>
            <van-collapse-item name="myParking" :class="activeNames=='myParking'?'active':''">
                <div slot="title" class="collapse-title"><span
                        class="icon iconfont collapse-icon">&#xe6ca;</span><span>我的停车</span></div>
                <!-- 手风琴——停车 -->
                <van-card v-for="(item,index) in parkingList" :key="index" :price="item.price" :title="item.carNum"
                    :desc="item.area+'~'+item.num" :thumb="item.thumb" @click="showTicketDetail('parking',item)">
                    <div slot="tags">
                        <div>时间:{{item.parkingStartTime+'~'+item.parkingEndTime}}</div>
                        <div class="logo used" v-if="item.status==0">已使用</div>
                        <div class="logo unused" v-if="item.status==1">未使用</div>
                        <div class="logo overdue" v-if="item.status==2">已过期</div>
                    </div>
                </van-card>
            </van-collapse-item>
        </van-collapse>
        <van-button type="danger" size="large" @click="loginOut" v-if="isLogin">退出登录</van-button>
    </div>
</template>
<script>
    import {
        userCenter,
        parkingSelect,
        buyList,
        findTicketById
    } from '@/utils/apply.url';
    import {
        Collapse,
        CollapseItem,
        Card,
        Tag,
        Button,
        Toast
    } from 'vant';
    export default {
        name: 'userCenter',
        data() {
            return {
                user: { // 用户信息
                    nickName: '',
                    tel: '',
                    userType: 0,
                },
                userTel: '',
                isLogin: true,
                activeNames: '',
                ticketList: [],
                parkingList: [],
            };
        },
        computed: {
            telShow() {
                return this.user.tel.substr(0, 3) + "****" + this.user.tel.substr(7);
            }
        },
        mounted() {
            this.userTel = sessionStorage.getItem('userTel');
            if (this.userTel) {
                this.isLogin = true;
                userCenter({
                    tel: this.userTel
                }, 'get').then(res => {
                    this.user = {
                        nickName: res.nickName,
                        tel: res.tel,
                        userType: res.userType,
                    }
                    this.getParkingList();
                    this.getTicketList();

                }).catch(err => {
                    Toast('获取个人信息失败' || res.msg);
                });
            } else {
                this.isLogin = false;
            }
        },
        methods: {
            timestampToTime(timestamp) {
                var date = new Date(timestamp);
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                var D = (date.getDate() <10 ? '0' +date.getDate() :date.getDate() )+ ' ';
                return Y + M + D;
            },
            getParkingList() {
                parkingSelect({
                    tel: this.userTel
                }, 'get').then(res => {
                    if (res.length != 0) {
                        var obj = {};
                        for (let i = 0; i < res.length; i++) {
                            obj = {
                                carNum: res[i].carNum,
                                parkingStartTime: this.timestampToTime(res[i].startTime),
                                parkingEndTime: this.timestampToTime(res[i].endTime),
                                area: res[i].area,
                                num: res[i].num,
                                price: res[i].price + '.00',
                                thumb: res[i].thumb,
                                status: res[i].status
                            };
                            this.parkingList.push(obj)
                        }
                        console.log(this.parkingList)
                    }
                }).catch(err => {
                    Toast('获取我的停车失败' || res.msg);
                });
            },
            getTicketList() {
                buyList({
                    tel: this.userTel
                }, 'get').then(res => {
                    if (res.length != 0) {
                        for (let i = 0; i < res.length; i++) {
                            var obj = {};
                            obj = {
                                selectPlayDate: this.timestampToTime(res[i].selectPlayDate),
                                number: res[i].number,
                                ticketId: res[i].ticketId,
                                ticketPay: res[i].ticketPay + '.00',
                                status: res[i].status,
                                image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590039758079&di=8dc3d04fcc968026646efbf43df0a655&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F60318eb10e8b6ecf4b7ca1eee0bed8749d30b52621857-3pjuGn_fw658'
                            };
                            this.ticketList.push(obj)
                        }
                        this.getTicketDetail();
                    }
                }).catch(err => {
                    Toast('获取我的门票失败' || res.msg);
                });
            },
            getTicketDetail() {
                this.ticketList.forEach((item, index) => {
                    findTicketById({
                        ticketId: item.ticketId
                    }, 'get').then(result => {
                        this.ticketList[index].title = result[0].title,
                            this.ticketList[index].descs = result[0].descs
                    }).catch(error => {
                        Toast('获取电子门票信息失败');
                    })
                });
            },
            showTicketDetail(type, item) {
                console.log("点击跳转")
                console.log(item)
                if (item.status != '1') return;
                if (type == 'ticket') {
                    this.$router.push({
                        path: '/userCenter/ticketDetail',
                        query: {
                            item: item
                        }
                    });
                } else {
                    this.$router.push({
                        path: '/userCenter/parkingDetail',
                        query: {
                            carNum: item.carNum,
                            parkingStartTime: this.timestampToTime(item.parkingStartTime),
                            parkingEndTime: this.timestampToTime(item.parkingEndTime),
                            area: item.area,
                            num: item.num,
                            price: item.price
                        }
                    });
                }
            },
            goLogin() {
                this.$router.push({
                    path: '/login',
                });
            },
            loginOut() {
                sessionStorage.removeItem('userTel')
                this.$router.push({
                    path: '/login',
                });
            }
        },
    };
</script>

<style lang="scss" scope>
    .user-info {
        width: 100%;
        height: px2rem(380px);
        background-color: #3D11EE;

        .user-card {
            background-color: #fff;
            width: 86%;
            height: px2rem(350px);
            position: absolute;
            top: px2rem(100px);
            left: 7%;
            border-radius: px2rem(10px);
            z-index: 50;
            border-bottom: px2rem(15px) solid #3D11EE;
        }

        .user-type {
            width: 0;
            height: 0;
            border: px2rem(30px) solid #F5DA70;
            border-right-width: px2rem(200px);
            border-left-width: px2rem(20px);
            border-left-color: transparent;
            position: absolute;
            top: px2rem(70px);
            left: px2rem(435px);
        }

        .user-type-desc {
            background: linear-gradient(left, #F5DA70, #C78728);
            width: px2rem(170px);
            padding: px2rem(14px) px2rem(0px) px2rem(14px) px2rem(24px);
            z-index: 1000;
            position: absolute;
            top: px2rem(70px);
            left: px2rem(460px);
            color: #fff;
        }

        .user-portrait {
            border: px2rem(5px) solid #fff;
            border-radius: 50%;
            width: px2rem(130px);
            height: px2rem(130px);
            position: absolute;
            top: px2rem(180px);
            left: px2rem(30px);
            background: url("../../assets/images/portrait.png") center center no-repeat;
            background-size: 100% 100%;
        }

        .user-name {
            position: absolute;
            top: px2rem(210px);
            left: px2rem(170px);
        }

        .user-login {
            position: absolute;
            top: px2rem(230px);
            left: px2rem(170px);
            font-size: px2rem(32px);
        }

        .user-tel {
            position: absolute;
            top: px2rem(260px);
            left: px2rem(170px);
            font-size: px2rem(32px);
        }

        .icon-xiangyou {
            font-size: px2rem(40px);
            font-weight: 800;
            color: #ff9900;
            margin-left: px2rem(20px);
        }
    }

    .van-cell {
        padding: px2rem(20px) px2rem(15px) 0 px2rem(10px);
        border-bottom: px2rem(1px) solid #ddd;

        .van-cell__right-icon {
            font-size: px2rem(42px);
        }

        .van-cell__title {
            text-align: left;
        }
    }

    .active {

        .van-cell__title span,
        .van-cell__left-icon,
        .van-cell__right-icon {
            color: #3D11EE !important;
        }
    }

    .collapse-title {
        padding-left: px2rem(20px);
        font-size: px2rem(32px);

        .collapse-icon {
            font-size: px2rem(36px);
            margin-right: px2rem(30px);
        }
    }

    .van-collapse-item__content {
        padding: px2rem(25px);

        .van-card {
            padding: px2rem(20px) px2rem(30px) px2rem(10px) 0;
            border-bottom: px2rem(1px) solid #ddd;
        }

        .van-card__content {
            text-align: left;

            .van-card__title {
                font-size: px2rem(32px) !important;
                line-height: px2rem(45px) !important;
                font-weight: 500 !important;
                color: #3D11EE !important;
            }

            .van-tag--danger.van-tag--plain {
                color: green;
                border: px2rem(1px) solid green;
            }

            .van-card__price {
                color: red;
            }
        }
    }


    .logo {
        height: px2rem(100px);
        width: px2rem(100px);
        border-radius: 50%;
        font-size: px2rem(20px);
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate(-330deg);
        position: absolute;
        right: px2rem(-50px);
        top: px2rem(-40px);
        z-index: 1;
    }

    .overdue {
        border: 1px solid #F66862;
        color: #F66F6A;
    }

    .used {
        border: 1px solid #ff9900;
        color: #ff9900;
    }

    .unused {
        border: 1px solid #55C463;
        color: #55C463;
    }

    .van-button--danger {
        width: 90%;
        border-radius: px2rem(5px);
        margin: px2rem(500px) 5% 0 5%;
    }
</style>
<template>
    <div id="userCenter">
        <div class="image"></div>

        <van-collapse v-model="activeNames" accordion>
            <van-collapse-item title="我的门票" name="myTicket" icon="shop-o" :class="activeNames=='myTicket'?'active':''">
                <!-- 手风琴——门票 -->
                <van-card  v-for="(item,index) in ticketList" :key="index" :num="item.num" :price="item.price" :title="item.title" :thumb="item.thumb" @click="showTicketDetail('ticket',item)">
                    <div slot="tags">
                        <div>{{item.desc}}</div>
                        <div>日期：{{item.date}}</div>
                        <van-tag plain type="danger" v-if="item.ticketType==0">普通票</van-tag>
                        <van-tag plain type="danger" v-if="item.ticketType==1">儿童票</van-tag>
                        <van-tag plain type="danger" v-if="item.ticketType==2">学生票</van-tag>
                        <van-tag plain type="danger" v-if="item.ticketType==3">老人票</van-tag>
                        <van-tag plain type="danger" v-if="item.ticketType==4">残疾票</van-tag>
                        <div class="logo used" v-if="item.status==0">已使用</div>
                        <div class="logo unused" v-if="item.status==1">未使用</div>
                        <div class="logo overdue" v-if="item.status==2">已过期</div>
                    </div>
                </van-card>
            </van-collapse-item>
            <van-collapse-item title="我的停车" name="myParking" icon="shop-o"
                :class="activeNames=='myParking'?'active':''">
                <!-- 手风琴——停车 -->
                <van-card  v-for="(item,index) in parkingList" :key="index" :price="item.price" :title="item.carNum" :desc="item.parkingNum" :thumb="item.thumb" @click="showTicketDetail('parking',item)">
                    <div slot="tags">
                        <div>时间{{item.date}}</div>
                        <div class="logo used" v-if="item.status==0">已使用</div>
                        <div class="logo unused" v-if="item.status==1">未使用</div>
                        <div class="logo overdue" v-if="item.status==2">已过期</div>
                    </div>
                </van-card>
            </van-collapse-item>
        </van-collapse>
    </div>
</template>
<script>
    import {
        Collapse,
        CollapseItem,
        Card,
        Tag
    } from 'vant';
    export default {
        name: 'userCenter',
        data() {
            return {
                activeNames: '',
                ticketList:[
                    {id:'1',title:'长隆水上乐园',desc:'适合盛夏体验水上乐趣',date:'2019-01-02~2020-01-01',status:'0',num:'2',price:'200.00',thumb:'https://img.yzcdn.cn/vant/t-thirt.jpg',ticketType:'0'},
                    {id:'2',title:'长隆海洋馆',desc:'与海豚白鲸等海洋动物亲密接触',date:'2019-01-02~2019-03-30',status:'1',num:'3',price:'200.00',thumb:'https://img.yzcdn.cn/vant/t-thirt.jpg',ticketType:'1'},
                    {id:'3',title:'植物园热带温室',desc:'体验热带风光',date:'2019-01-02~2019-01-02',status:'2',num:'5',price:'50.00',thumb:'https://img.yzcdn.cn/vant/t-thirt.jpg',ticketType:'2'},
                    {id:'4',title:'岭南印象园+星空馆',desc:'玫瑰丛下，见证爱情',date:'2019-12-25~2020-0-0',status:'1',num:'2',price:'60.00',thumb:'https://img.yzcdn.cn/vant/t-thirt.jpg',ticketType:'3'},
                ],
                parkingList:[
                    {id:'1',carNum:'粤A-32431',parkingNum:'A区336',date:'2019-01-02 15:00',status:'0',price:'20.00',thumb:'https://img.yzcdn.cn/vant/t-thirt.jpg'},
                    {id:'2',carNum:'粤A-23221',parkingNum:'C区336',date:'2019-01-02 15:00',status:'1',price:'20.00',thumb:'https://img.yzcdn.cn/vant/t-thirt.jpg'},
                    {id:'3',carNum:'川A-32232',parkingNum:'B区336',date:'2019-01-02 15:00',status:'2',price:'20.00',thumb:'https://img.yzcdn.cn/vant/t-thirt.jpg'},
                    {id:'4',carNum:'京A-36431',parkingNum:'D区336',date:'2019-01-02 15:00',status:'0',price:'20.00',thumb:'https://img.yzcdn.cn/vant/t-thirt.jpg'},
                ],
            };
        },
        filters: {
        },
        computed: {
        
        },
        watch: {

        },
        components: {

        },
        methods: {
            showTicketDetail(type,item){
                console.log("点击跳转")
                console.log(item)
                if(item.status!='1') return;
                if(type=='ticket'){
                    this.$router.push({ path: '/userCenter/ticketDetail', query: {item: item} });
                }else{
                    this.$router.push({ path: '/userCenter/parkingDetail', query: {item: item} });
                } 
            }
        },
        created() {

        }
    };
</script>

<style lang="scss">
    .image {
        width: 100%;
        height: px2rem(380px);
        margin-bottom: px2rem(30px);
        /* background-image: url(""); */
        border: 1px solid red;
    }

    .van-cell__left-icon,
    .van-cell__right-icon {
        font-size: px2rem(42px);
    }

    .van-cell__title {
        margin-left: px2rem(20px);
        text-align: left;

        span {
            font-size: px2rem(30px);
        }
    }

    .active {

        .van-cell__title span,
        .van-cell__left-icon,
        .van-cell__right-icon {
            color: #3D11EE !important;
        }
    }

    .van-card__content{
        text-align: left;
        .van-card__title{
            font-size: px2rem(32px)!important;
            line-height:px2rem(45px)!important;
            font-weight:500!important;
            color: #3D11EE !important;
        }
        .van-tag--danger.van-tag--plain{
            color:green;
            border:px2rem(1px) solid green;
        }
        .van-card__price{
            color: red;
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
        z-index:1;
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
</style>
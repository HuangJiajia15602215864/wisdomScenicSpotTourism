<template>
    <div id="userCenter">
        <div class="image"></div>

        <van-collapse v-model="activeNames" accordion=true>
            <van-collapse-item title="我的门票" name="1" icon="shop-o" :class="activeNames==['myTicket']?'active':''">内容</van-collapse-item>
            <van-collapse-item title="我的停车" name="myParking" icon="shop-o" :class="activeNames==['myParking']?'active':''">内容</van-collapse-item>
            <van-collapse-item title="我的订单" name="myOrder" icon="shop-o" :class="activeNames==['myOrder']?'active':''">内容</van-collapse-item>
        </van-collapse>

    </div>
</template>
<script>
    import {
        Collapse,
        CollapseItem
    } from 'vant';
    export default {
        name: 'userCenter',
        data() {
            return {
                activeNames: ['1']
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
    .image {
        width: 100%;
        height: px2rem(380px);
        margin-bottom: px2rem(30px);
        /* background-image: url(""); */
        border: 1px solid red;
    }

    .van-cell__left-icon, .van-cell__right-icon{
        font-size: px2rem(42px);
    }

    .van-cell__title{    
        margin-left: px2rem(20px);
        text-align: left;
        span{
            font-size: px2rem(30px);
        }
    }
    .active{
        color: #3D11EE;
    }
</style>
<template>
    <div id="parkingDetail">
        <van-cell-group>
            <van-cell title="车牌号" :value="item.carNum" icon="logistics" />
            <van-cell title="停车时间" :value="item.date" icon="clock-o" />
            <van-cell title="停车区域" :value="item.parkingNum" icon="location-o" />
            <van-cell title="停车价格" :value="'￥'+item.price" icon="gold-coin-o" />
        </van-cell-group>
        <div class="qrCode">
            <div class="qrCodeTip">请出示此二维码给检票员</div>
            <img class="qrCodeImg" />
        </div>
    </div>
</template>
<script>
    import {
        Cell,
        CellGroup
    } from 'vant';
    export default {
        name: 'parkingDetail',
        data() {
            return {
                item: {}
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


        },
        mounted() {
            this.item = this.$route.query.item;
            console.log(this.item)
        }
    };
</script>

<style lang="scss">
    .van-cell {
        padding: px2rem(20px);
        font-size: px2rem(30px);
        line-height: px2rem(45px);

        &__left-icon{
            font-size:px2rem(40px);
        }        

        &__title {
            margin: 0 px2rem(-50px) 0 0;
            width: px2rem(250px);
        }

        &__label {
            font-size: px2rem(30px);
            line-height: px2rem(45px);
        }
    }
    .qrCode{
        margin:px2rem(50px) px2rem(150px);
        .qrCodeTip{

        }
        .qrCodeImg{
           height:px2rem(400px); 
           width: px2rem(400px);
           margin-top: px2rem(40px);
           border:1px solid green;
        }
    }
</style>
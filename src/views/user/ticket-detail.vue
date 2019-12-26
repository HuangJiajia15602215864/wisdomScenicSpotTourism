<template>
    <div id="ticketDetail">
        <van-cell-group>
            <van-cell title="门票名称" :value="item.title" icon="location-o" />
            <van-cell title="门票日期" :value="item.date" icon="location-o" />
            <van-cell title="门票价格" :value="'￥'+item.price" icon="location-o" />
            <van-cell title="门票数量" :value="item.num +'张'" icon="location-o" />
            <van-cell title="门票类型" :value="item.ticketType | ticketTypeFilter" icon="location-o" />
            <van-cell title="门票详情" :label="item.desc" icon="location-o" />
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
        name: 'ticketDetail',
        data() {
            return {
                item: {}
            };
        },
        filters: {
            ticketTypeFilter(type) {
                let ticketTypeJson = {
                    '0': '普通票',
                    '1': '儿童票',
                    '2': '学生票',
                    '3': '老人票',
                    '4': '残疾票',
                }
                return ticketTypeJson[type] || '无';

            }
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
<template>
    <div class="search">
        <div :class="['search-out', isWechat ? '' : 'top']">
            <form action="javascript:void 0" οnsubmit="return false;">
                <input v-model.trim="searchWord" @keyup.13="search" type="search" class="search" placeholder="请输入关键词"
                    ref="input1">
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'search',
        data() {
            return {
                isWechat: this.$store.state.isWechat,
                searchWord: '',
            };
        },
        methods: {
            /**
             * 点击软键盘的搜索按钮后
             */
            search() {
                this.$refs.input1.blur();
                this.$emit('search', this.searchWord);
            },
        },
    };
</script>

<style lang="scss" scope>
    .search-out {
        padding: px2rem(15px) px2rem(30px);
        background: #fff;
        width: 100%;
        box-shadow: 0px 0px px2rem(3px) px2rem(2px) rgba(0, 0, 0, 0.03);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;

        input[type=search] {
            width: px2rem(640px);
            height: px2rem(70px);
            border-radius: px2rem(8px);
            box-sizing: border-box;
            padding: px2rem(14px) px2rem(30px) px2rem(14px) px2rem(77px);
            background: #F8F8FA url("../assets/images/search.png") no-repeat px2rem(30px) center;
            background-size: px2rem(27px);
            border: none;
            outline: none;
            font-size: px2rem(32px);
            line-height: px2rem(44px);
            color: rgba(51, 51, 51, 1);
        }

        input[type=search]::-webkit-search-cancel-button {
            -webkit-appearance: none;
            position: relative;
            height: px2rem(48px);
            width: px2rem(48px);
            background: url("../assets/images/clear.png") no-repeat px2rem(10px) center;
        }


        ::-webkit-input-placeholder {
            /*Webkit browsers 谷歌*/
            color: rgba(182, 186, 190, 1);
        }

        :-moz-placeholder {
            /*Mozilla Firefox 4 to 8 火狐*/
            color: rgba(182, 186, 190, 1);
        }

        ::moz-placeholder {
            /*Mozilla Firefox 19+ 火狐*/
            color: rgba(182, 186, 190, 1);
        }

        :-ms-input-placeholder {
            /*Internet Explorer 10+ IE10以上*/
            color: rgba(182, 186, 190, 1);
        }
    }

    .top {
        margin-top: px2rem(88px);
    }
</style>
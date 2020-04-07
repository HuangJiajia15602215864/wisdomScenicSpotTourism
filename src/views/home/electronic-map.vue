<template>
    <div>
        <van-button type="info" size="small" v-if="navigation" @click="goNavigation">导航</van-button>
        <van-cell-group v-if="!navigation">
            <van-field v-model="beginPoint" label="起点" placeholder="请输入起点" clearable />
            <van-field v-model="endPoint" label="终点" placeholder="请输入终点" clearable />
            <van-field name="radio" label="出行方式">
                <template #input>
                    <van-radio-group v-model="goType" direction="horizontal">
                        <van-radio name="1">步行</van-radio>
                        <van-radio name="2">驾车</van-radio>
                        <van-radio name="3">公交</van-radio>
                    </van-radio-group>
                </template>
            </van-field>
            <van-button type="info" size="small" style="float: right;margin-right: 10px;" @click="sureNavigation">导航
            </van-button>
        </van-cell-group>
        <baidu-map :zoom="zoom" :scroll-wheel-zoom="true"  :center="{lng: 113.3737850000, lat: 23.1878410000}" ak="0o9pEEqKvk43AIHVDmrvtAWKAMmBpFdH">
            <bm-view class="bm-view"></bm-view>
            <bm-control class="search">
                <bm-auto-complete v-model="keyword" :sugStyle="{zIndex: 1}">
                    <input class="input" placeholder="请输入地名关键字" />
                </bm-auto-complete>
            </bm-control>
            <bm-local-search :keyword="keyword" :auto-viewport="true"></bm-local-search>
            <bm-map-type class="map-type" :map-types="['BMAP_NORMAL_MAP','BMAP_PERSPECTIVE_MAP','BMAP_HYBRID_MAP']"
                anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-map-type>
            <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-navigation>
            <bm-geolocation anchor="BMAP_ANCHOR_TOP_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
            <bm-walking v-if="goType==1" :start="walking.start" :end="walking.end" :auto-viewport="true"></bm-walking>
            <bm-driving v-if="goType==2" :start="driving.start" :end="driving.end" :auto-viewport="true"></bm-driving>
            <bm-transit v-if="goType==3" class="transit" :start="transit.start" :end="transit.end"
                :auto-viewport="true">
            </bm-transit>
        </baidu-map>
    </div>
</template>
<script>
    import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
    import {
        BmView,
        BmScale,
        BmNavigation,
        BmMapType,
        BmGeolocation,
        BmPanorama,
        BmTraffic,
        BmTransit,
        BmWalking,
        BmDriving,
        BmControl,
        BmAutoComplete,
        BmLocalSearch
    } from 'vue-baidu-map'
    export default {
        data() {
            return {
                navigation: true, //是否导航
                keyword: '', // 地名关键字
                beginPoint: '', // 起点
                endPoint: '', // 终点
                zoom: 3,
                goType: 0, // 出行方式（1：步行、2：汽车、3：公交）
                walking: {
                    start: '',
                    end: ''
                },
                driving: {
                    start: '',
                    end: ''
                },
                transit: {
                    start: '',
                    end: ''
                },
            }
        },
        components: {
            BmView,
            BaiduMap,
            BmScale,
            BmNavigation,
            BmMapType,
            BmGeolocation,
            BmPanorama,
            BmTraffic,
            BmTransit,
            BmWalking,
            BmDriving,
            BmControl,
            BmAutoComplete,
            BmLocalSearch
        },
        methods: {
            // 点击左上角导航按钮
            goNavigation() {
                this.navigation = false;
            },
            // 点击确认导航按钮
            sureNavigation() {
                this.navigation = true;
                console.log(this.goType)
                switch (this.goType) {
                    case '1':
                        this.walking.start = this.beginPoint;
                        this.walking.end = this.endPoint;
                        break;
                    case '2':
                        this.driving.start = this.beginPoint;
                        this.driving.end = this.endPoint;
                        break;
                    case '3':
                        this.transit.start = this.beginPoint;
                        this.transit.end = this.endPoint;
                        break;
                }
            },
        }
    }
</script>
<style>
    .van-radio {
        float: left;
        margin-right: 20px;
    }

    .van-radio__icon--round {
        margin-right: -5px;
    }

    .bm-view {
        width: 100%;
        height: 500px;
    }

    .input {
        border: 1px solid #ddd;
        border-radius: 2px;
        width: 120px;
        height: 30px;
        font-size: 12px;
    }

    .anchorBL img {
        display: none;
    }
</style>
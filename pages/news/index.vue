<template>
    <div class="content-box">
        <common-header :title="title" :showback="title ==='搜索'" :showsearch="title !=='搜索'" @back="back" @showSearch="showSearch"></common-header>
        <div class="page-content">
            <div class="news" v-if="title=='中心动态'">
                <van-tabs v-model="selected" @click.native="change">
                    <van-tab title="法律法规" name="flfg">
                        <van-cell-group>
                            <van-cell value="内容" size="large"  v-for="item in listData"  @click="itemClick(item)" :key="item.id" >
                                <img slot="icon" src="@/static/imgs/dynamic-list.png" width="80" height="80">
                                <template slot="default">                     
                                                    <div >{{item.title}}</div>
                                                    <div >{{item.mainAuthor}}</div>
                                </template>
                            </van-cell>
                        </van-cell-group>
                    </van-tab>
                    <van-tab title="地方法规" name="dffg">
                        <van-cell-group>
                            <van-cell value="内容" size="large" v-for="item in listData" @click="itemClick(item)" :key="item.id">
                                <img slot="icon" src="@/static/imgs/dynamic-list.png"  width="80" height="80">
                                <template slot="default">
                                    <div >{{item.title}}</div>
                                    <div >{{item.mainAuthor}}</div>
                                </template>
                            </van-cell>
                        </van-cell-group>
                    </van-tab>
                    <van-tab title="政策解读" name="zcjd">
                        <van-cell-group>
                            <van-cell value="内容" size="large" v-for="item in listData" @click="itemClick(item)" :key="item.id">
                                <img slot="icon" src="@/static/imgs/dynamic-list.png" width="80" height="80">
                                <template slot="default">
                                    <div>{{item.title}}</div>
                                    <div>{{item.mainAuthor}}</div>
                                </template>
                            </van-cell>
                        </van-cell-group>
                    </van-tab>
                </van-tabs>
            </div>
            <div class="search" v-else>
                <search @searchNews="searchNews"></search>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '中心动态',
                num: 0,
                selected: 'flfg',
                list: [],
                listData: [],
                search: ''
            }
        },
        created() {
			
        },
		activated() {
			
		},
        mounted() {},
        components: {
            
        },
        methods: {
            
        },
        computed: {
           
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import '~styles/index.less';
    @import '~styles/variable.less';
    .page-content {
        margin-bottom: 98upx;
        background-color: #fff; 
        .van-cell {
            padding: 20upx 20upx;
            .van-cell__value{
                padding-left: 20upx;
                font-size: 20upx;
               div:nth-child(1) {                            
                    min-height: 80upx;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    overflow: hidden; //.mb(15)
                }
                div:nth-child(2) {
                    color: #b4b4b4;
                }
            }
        }
    }
</style>


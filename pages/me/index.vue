<template>
    <div class="content-box">
        <common-header title="我的" :showback="false"></common-header>
        <div class="div-user">
            <div class="div-item div-item1">
                <img class="png" src="../../static/imgs/jcw1.jpg">
            </div>
            <div class="div-item" v-if="isLogin">
                <p class="name">{{userInfoFather.userinfo.name}}</p>
                <p class="phone">{{userInfoFather.userinfo.tel}}</p>
            </div>
            <div class="div-item" v-else @click="gotoLogin()">
                <p class="name">未登录</p>
            </div>
            <div class="div-item div-item3">
                <img src="../../static/me/zk3.png" />
            </div>
        </div>
        <div class="div-items">
            <van-cell title="我的预约" icon="todo-list-o" is-link :border="false" @click="gotoMyAppointment()">
            </van-cell>
            <div class="item-line"></div>
            <van-cell title="我的申请" icon="records" is-link :border="false" @click="gotoMyApplication()">
            </van-cell>
        </div>
        <div class="div-items div-items2">
			
            <van-cell title="公众号链接" v-if="false" icon="completed" is-link :border="false" @click="gotoH5()">
            </van-cell>
            <div class="item-line"></div>
            <van-cell title="视频问询" v-if="false" icon="records" is-link :border="false" @click="gotoVideo()">
            </van-cell>
            <div class="item-line"></div>
            <van-cell title="关于我们" icon="info-o" is-link :border="false">
            </van-cell>
        </div>
        <div class="div-items div-items3">
            <van-cell title="退出登录" id="logout" @click="logout()" v-if="isLogin" />
        </div>
    </div>
</template>

<script>
    import {
        mapMutations,
        mapGetters,
        mapState
    } from 'vuex'
    import * as dictUtils from '../../utils/dict-utils'
    // import loginApi from 'api/login-api'
	import common-header from "../../components/common-header/common-header.vue";
    export default {
        data() {
            return {
                title: {},
                num: 0
            }
        },
        created() {},
        mounted() {},
        methods: {
            ...mapMutations({
                setUserData: 'setUserData',
                setUserInfoFather: 'setUserInfoFather',
                setDict: 'SET_DICT',
                setAreaTree: 'SET_AREATREE',
                setFaceVerify: 'SET_FACEVERIFY'
            }),
            todetail() {
                this.$router.togo('/news/detail')
            },
            gotoLogin() {
                this.$router.togo('login')
            },
            gotoMyAppointment() {
                this.$router.togo('myAppointment')
            },
            gotoMyApplication() {
                this.$router.togo('myApplication')
            },
            gotoH5() {
                this.$router.togo('webview')
            },
            gotoVideo() {
                this.$router.togo('recordVideo')
            },
            logout() {
                this.$dialog.confirm({
                    message: '确定退出登录?',
                    showCancelButton:true,
                    closeOnClickOverlay:true,
                }).then((action)=>{
                    console.log('退出成功')
                    localStorage.setItem("account", "");
                    localStorage.setItem("passWord", "");
                    this.setUserData({})
                    this.setUserInfoFather({})
                    //获取用户权限
                    // loginApi.getPermByAreaCode({})
                }).catch((error)=>{
                    console.log('取消退出')
                })
            }
        },
        computed: {
            ...mapState({
                userInfoFather: state => state.me.userInfoFather
            }),
            isLogin: function() {
                return this.userInfoFather.userinfo !== null && this.userInfoFather.userinfo !== undefined
            }
        },
		components:{
			common-header
		}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "~styles/index.less";
    @import "~styles/variable.less";
    .content-box {
        .page-content {
            margin-bottom: 98upx;
        }
        .div-user {
            width: 100%;
            height: 100upx;
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: #11C1F3;
            .div-item {
                height: 100%;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                color: rgb(255, 255, 255);
                .png {
                    width: 150upx;
                    height: 150upx;
                }
                .name {
                    font-size: 36upx;
                    margin-top: 20upx;
                }
                .phone {
                    font-size: 12upx;
                    margin-top: 10upx;
                }
            }
            .div-item1 {
                align-items: center;
            }
            .div-item3 {
                align-items: flex-end;
                margin-right: 18upx;
            }
        }
        .div-items {
            font-size: 38upx;
            background-color: #edeff2;
            .item-line {
                border-bottom: 1px solid rgb(231, 231, 231);
                margin-left: 45upx;
            }
            .van-cell {
                // display: flex;
                padding: 0 20upx;
                /deep/ .van-cell__title {
                    padding: 20upx 10upx;
                    span {
                        color: #333;
                    }
                }
                /deep/.van-icon::before {
                    font-size: 55upx;
                    vertical-align: -webkit-baseline-middle;
                }
                /deep/.van-icon-arrow::before {
                    font-size: 50upx;
                    color: #d1d1d5;
                    margin-top: 10upx;
                }
                /deep/.van-icon-todo-list-o::before,
                /deep/.van-icon-completed::before {
                    color: #32a4e0;
                }
                /deep/.van-icon-records::before,
                /deep/.van-icon-info-o::before {
                    color: #02c8b1;
                }
            }
        }
        .div-items2 {
            margin-top: 20upx;
        }
        #logout {
            margin-top: 20upx;
            /deep/ .van-cell__title {
                display: flex;
                justify-content: center;
                span {
                    color: #ff3636;
                }
            }
        }
    }
</style>


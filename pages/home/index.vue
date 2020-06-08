<template>
	<view class="content">
		<!-- 区域地址 -->
		<view class="top">
			<view @click="selectArea()" class="select-area">
				<text class="area-name">{{curPosition}}</text>
				<text class="area-unable">(暂未开通)</text>
				<img src="../../static/imgs/city_down.png" />
			</view>
			<img class="scan-code" @click="scanCode()" src="../../static/imgs/scan_code.png" />
		</view>

		<!-- 为您推荐 -->
		<view class="card">
			<view class="card-title">
				<view class="card-title-line"></view>
				<text class="card-title-text">为您推荐</text>
				<view class="card-title-line"></view>
			</view>
			<view class="card-menu-container">
				<view v-for="(menu,index) in hotMenuArray" :key="index" class="card-child-menu" @click="gotoLevel1Menu(menu.page)">
					<img :src="menu.src" />
					<text class="card-menu-text">{{menu.name}}</text>
				</view>
			</view>
		</view>

		<!-- 轮播图 -->
		<view class="swiper">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
						 :circular="circular">
							<swiper-item v-for="(item ,index) in swiperDatas" :key="index">
								<view class="swiper-item">
									<img :src="item.src" alt="">
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		</view>

		<!-- 具体服务 -->
		<template v-for="(item, index) in menuGroup">
			<home-menu-group :title="item.title" :menuArray="item.menuArray" :otherPath="item.otherPath" :key="index" />
		</template>
	</view>
</template>

<script>
	// import {uniCard} from '@dcloudio/uni-ui'
	import homeMenuGroup from "../../components/homeMenuGroup/homeMenuGroup.vue";
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				circular: true,
				p: null,
				curPosition: "兰州市",
				hotMenuArray: [{
						src: require('@/static/imgs/service_site.png'),
						name: '服务网点',
						// page: 'fwwd'
						page: ''
					},
					{
						src: require('@/static/imgs/order.png'),
						name: '预约排号',
						// page: 'yyxz'
						page: 'yyxy'
					},
					{
						src: require('@/static/imgs/transfer.png'),
						name: '转移登记',
						// page: 'level1menu'
						page: '/registration-service/transfer'
					},
					{
						src: require('@/static/imgs/mortgage.png'),
						name: '抵押登记',
						// page: 'level1menu'
						page: '/registration-service/mortgage'
					}
				],
				swiperDatas: [{
						src: '../../static/imgs/home/banner0.jpg'
					},
					{
						src: '../../static/imgs/home/banner1.png'
					},
					{
						src: '../../static/imgs/home/banner2.png'
					},
					{
						src: '../../static/imgs/home/banner3.png'
					},
					{
						src: '../../static/imgs/home/banner4.jpg'
					},
					{
						src: '../../static/imgs/home/banner5.jpg'
					}
				],
				menuGroup: [{
						title: "登记服务",
						otherPath: "registration-service",
						menuArray: [{
								src: require("@/static/imgs/order.png"),
								name: "预约排号",
								des: "提早预约免排队、快速办理真省心",
								page: "appointmentAgreement"
							},
							{
								src: require("@/static/imgs/transfer.png"),
								name: "转移登记",
								des: "过户一站办，快速又省心",
								page: "/registration-service/transfer"
							},
							{
								src: require("@/static/imgs/mortgage.png"),
								name: "抵押登记",
								des: "不动产抵押一站办",
								page: "/registration-service/mortgage"
							},
							{
								src: require("@/static/imgs/change.png"),
								name: "变更登记",
								des: "不动产变更一站办",
								page: "/registration-service/change"
							}
						]
					},
					{
						title: "查询服务",
						otherPath: "query-service",
						menuArray: [{
								src: require("@/static/imgs/schedule.png"),
								name: "进度查询",
								des: "业务办理情况轻松掌握",
								page: "query-service/schedule-query"
							},
							{
								src: require("@/static/imgs/qszm_check.png"),
								name: "不动产证明",
								des: "名下不动产情况查询证明",
								page: "propertyCertification"
							},
							{
								src: require("@/static/imgs/zshs.png"),
								name: "证书验证",
								des: "证书真伪一键核查",
								page: "certificateValidation"
							},
							{
								src: require("@/static/imgs/ems.png"),
								name: "EMS查询",
								des: "证书物流实时把握",
								page: ""
							}
						]
					},
					{
						title: "便民服务",
						otherPath: "convenient-service",
						menuArray: [{
								src: require("@/static/imgs/service_site.png"),
								name: "服务网点",
								des: "网点导航就近办",
								page: "convenient-service/service-network"
							},
							{
								src: require("@/static/imgs/suggest.png"),
								name: "投诉建议",
								des: "您的建议是最宝贵的财富",
								page: "convenient-service/complaint-suggestion"
							},
							{
								src: require("@/static/imgs/3d_show.png"),
								name: "实景大厅",
								des: "纵览三维实景，享受智能服务",
								page: "convenient-service/live-action"
							},
							{
								src: require("@/static/imgs/3d_show.png"),
								name: "人工客服",
								des: "有问必答",
								page: ""
							}
						]
					}
				]
			};
		},
		onLoad() {
			this.getLocated();
		},
		onshow() {
			this.getLocated();
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots;
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay;
			},
			intervalChange(e) {
				this.interval = e.target.value;
			},
			durationChange(e) {
				this.duration = e.target.value;
			},
			selectLocation() {

			},
			getLocated() {

			},
			setLocated(located) {
				uni.setStorageSync('located', located);
			}
		},
		components: {
			homeMenuGroup
		}
	};
</script>

<style scoped lang="scss">
	.content {
		padding-bottom: 130upx;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		background-color: #eef3f0;

		.top {
			width: 100%;
			height: 270upx;
			background-image: $home-big-img;
			background-position-y: center;

			.select-area {
				position: absolute;
				top: 45upx;
				left: 15upx;
				display: flex;
				align-items: center;

				.area-name {
					font-size: 36upx;
					color: white;
					margin-right: 10upx;
					vertical-align: middle;
				}

				.area-unable {
					font-size: 30upx;
					color: #dd3c31;
					margin-right: 10upx;
					vertical-align: middle;
				}

				img {
					height: 30upx;
					width: 30upx;
				}
			}

			.scan-code {
				height: 40upx;
				width: 40upx;
				position: absolute;
				top: 45upx;
				right: 30upx;
			}
		}

		.card {
			padding-top: 1upx;
			padding-bottom: 1upx;
			box-shadow: 0 1upx 3upx rgba(0, 0, 0, 0.3);
			position: relative; // margin: -45px 10px 0 10px;
			margin: -45upx 10upx 0 10upx;
			background-color: white;
			width: 720upx;

			.card-title {
				width: 100%;
				height: 100upx;
				display: flex;
				justify-content: center;
				align-items: center;

				.card-title-line {
					width: 8%;
					height: 1upx;
					background-color: #d0d0d0;
				}

				.card-title-text {
					color: #666666;
					font-size: 30upx;
					margin: 0 15upx;
				}
			}

			.card-menu-container {
				width: 100%;
				height: 150upx;
				display: flex;
			}

			.card-child-menu {
				width: 25%;
				height: 100%;
				align-items: center;
				justify-content: center;
				display: flex;
				flex-direction: column;

				img {
					height: 60upx;
					width: 60upx;
				}
			}

			.card-menu-text {
				color: #333333;
				font-size: 25upx;
				margin-top: 7.5upx;
			}
		}

		.swiper {
			height: 160upx;
			margin-top: 30upx;

			.swiper-item {
				height: 100%;

				a {
					display: block;
					height: 100%;
				}

				img {
					display: block;
					height: 100%;
					width: 100%;
					background-size: cover;
				}
			}
		}

		.reservationPoint {
			padding: 50upx 25upx;
			background-color: #f9f9f9;

			.list {
				.listTitle {
					font-size: 34upx;
					font-weight: 700;
					padding-bottom: 10upx;
				}

				.listItem {
					position: relative;
					box-sizing: border-box;
					height: 215upx;
					margin-top: 25upx;
					padding: 85upx 20upx 50upx;
					background-color: #fff;
					box-shadow: 4px 4px 8px #ebecf2;

					// 是否可以预约的标志
					.condition {
						position: absolute;
						width: 144upx;
						height: 64upx;
						left: 50%;
						top: -20upx;
						line-height: 64upx;
						font-size: 26upx;
						color: #e2ecfc;
						text-align: center;
						transform: translateX(-50%);
						border-radius: 4upx;
						z-index: 9;
						box-shadow: 4px 4px 10px #ebecf2;

						&::before,
						&::after {
							content: '';
							position: absolute;
							// width: 10upx;
							// height: 14upx;
							width: 0upx;
							height: 0upx;
							top: 0upx;
							z-index: 1;
							border: 10upx solid transparent;
						}

						&::before {
							left: -9px;
						}

						&::after {
							right: -10px;
							transform: rotate(90deg);
						}

						&.reservation::before,
						&.reservation::after {
							border-right: 10upx solid #2f5fb1;
							border-bottom: 10upx solid #2f5fb1;
						}

						&.noReservation::before,
						&.noReservation::after {
							border-right: 10upx solid #ac2525;
							border-bottom: 10upx solid #ac2525;
						}

						&.reservation {
							background-color: #4381ed;
						}

						&.noReservation {
							background-color: #ed5a55;
						}
					}

					p {
						line-height: 55upx;
					}

					.name {
						font-size: 30upx;
						font-weight: 700;
					}

					.address {
						font-size: 28upx;
						font-weight: 500;
						color: #5a5a5a;

						.distance {
							margin-left: 55upx;
							font-size: 26upx;
							color: #b9b9b9;
						}
					}
				}
			}
		}
	}
</style>

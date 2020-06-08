<template>
	<div class="group-container">
		<div class="group-header">
			<div class="group-title">
				<div class="vertical-line"></div>
				<p class="title-text">{{title}}</p>
			</div>
			<p class="more" @click="gotoLevel1Menu(otherPath)">更多</p>
		</div>
		<div class="menu-box" v-for=" (childMenu,index) in menuArray" @click="gotoLevel1Menu(childMenu.page)" :key="index">

			<div class="img-box">
				<img class="img" :src="childMenu.src" />
			</div>
			<div class="menu-text">
				<p class="text1">{{childMenu.name}}</p>
				<p class="text2">{{childMenu.des}}</p>
			</div>

		</div>
	</div>
</template>

<script>
	import uniPopup from '../uni-popup/uni-popup.vue';
	export default {
		data() {
			return {}
		},
		props: {
			menuArray: {
				type: Array,
				default: () => {
					return []
				}
			},
			title: {
				type: String,
				default: '标题'
			},
			otherPath: {
				type: String
			}
		},
		methods: {
			back() {
				this.$router.goBack();
			},
			gotoLevel1Menu(page) {
				if (page == null || page === '') {
					uni-popup('该功能暂未开通！');
				} else {
					console.log('当前路由：' + page);
					this.$router.togo(page, {
						id: '123456'
					});
				}
			}
		},
		components: {
			uniPopup
		}
	}
</script>

<style lang="less" scoped>
	@import "~styles/index.less";
	@import "~styles/variable.less";

	.group-container {
		width: 100%;
		// height: 125upx;
		margin-top: 30upx;
		margin-bottom: 30upx;
		background-color: white;
		
		.group-header {
			width: 100%;
			height: 60upx;
			background-color: white;
			display: flex;
			align-items: center;
			position: relative;
			border-bottom: solid 1upx #F2F2F2;
			padding-top: 20upx;
			padding-bottom: 20upx;

			.group-title {
				position: absolute;
				// left: 10upx;
				left: 15upx;
				display: flex;
				height: 100%;
				align-items: center;

				.vertical-line {
					width: 10upx;
					height: 36upx;
					background-color: #108ee9;
				}

				.title-text {
					color: #222222;
					margin-left: 30upx;
					font-weight: bold;
					font-size: 36upx;
				}
			}

			.more {
				position: absolute;
				right: 24upx;
				font-size: 30upx;
				color: #666666;
			}
		}

		.menu-box {
			width: 50%;
			height: 120upx;
			display: flex;
			float: left;
			background-color: white;
			box-sizing: border-box;
			// padding-right: 15upx;
			padding-right: 22.5upx;
			padding-bottom: 50upx;
			padding-top: 30upx;
			// margin-bottom: 20upx;
			.img-box {
				width: 40%;
				height: 100%;
				display: flex;
				align-items: center;
				position: relative;
				.img {
					position: absolute;
					right: 30upx;
					width: 60upx;
					height: 60upx;
				}
			}

			.menu-text {
				width: 60%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				padding-top: 20upx;
				padding-bottom: 20upx;
				.text1 {
					color: #222222;
					font-size: 25upx;
					text-align: left;
				}
				.text2 {
					color: #999999;
					font-size: 20upx;
					text-align: left;
				}
			}
		}
	}
</style>

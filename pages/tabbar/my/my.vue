<template>
	<view class="my">
		<view style="width: 100%;height: 32px;background-color: #fbd102;"></view>
		<view class="myimage">
			<image src="../../../static/notLogin.png" mode="aspectFill"></image>
			<view class="header">
				<view class="header-avatar">
					<image class="avatar" src="../../../static/logo.png" mode="aspectFill"></image>
				</view>
				<view class="header-right">
					<view class="header-right_info" @click="qiandao">一天签到</view>
					<view class="header-right_info1">|</view>
					<view class="header-right_info2">一枚<br>我的勋章</view>
				</view>
			</view>
		</view>
		<view class="my-select">
			<view class="my-select-item" @click="gerenxinxi">
				<view class="my-select-item_icon">
					<text class="iconfont icon-gerenzhongxin-zhong"></text>
				</view>
				<view class="my-select-item_content">
					个人信息
				</view>
			</view>
			<view class="my-select-item" @click="anquanzhongxin">
				<view class="my-select-item_icon">
					<text class="iconfont icon-anquanzhongxin"></text>
				</view>
				<view class="my-select-item_content">
					安全中心
				</view>
			</view>
			<view class="my-select-item" @click="huishourizhi">
				<view class="my-select-item_icon">
					<text class="iconfont icon-rizhi"></text>
				</view>
				<view class="my-select-item_content">
					回收日志
				</view>
			</view>
		</view>
		<view class="my-content">
			<view class="my-content_list" @click="gofeedback">
				<view class="my-content_list-title">
					<view class="my-content_icon">
						<text class="iconfont icon-yijianfankui"></text>
					</view>
					<text>意见反馈</text>
				</view>
				<uni-icons class="icons" type="arrowright" size="18" color="#0e0e0e"></uni-icons>
			</view>
			<view class="my-content_list">
				<view class="my-content_list-title">
					<view class="my-content_icon">
						<text class="iconfont icon-bangzhuzhongxin"></text>
					</view>
					<text>帮助中心</text>
				</view>
				<uni-icons class="icons" type="arrowright" size="18" color="#0e0e0e"></uni-icons>
			</view>
			<view class="my-content_list">
				<view class="my-content_list-title">
					<view class="my-content_icon">
						<text class="iconfont icon-shezhi"></text>
					</view>
					<text>系统设置</text>
				</view>
				<uni-icons class="icons" type="arrowright" size="18" color="#0e0e0e"></uni-icons>
			</view>
			<view class="my-content_list">
				<view class="my-content_list-title">
					<view class="my-content_icon">
						<text class="iconfont icon-users_light"></text>
					</view>
					<text>关于我们</text>
				</view>
				<uni-icons class="icons" type="arrowright" size="18" color="#0e0e0e"></uni-icons>
			</view>
			<view class="my-content_list">
				<view class="my-content_list-title">
					<view class="my-content_icon">
						<text class="iconfont icon-banben"></text>
					</view>
					<text>APP版本</text>
				</view>
				<text>当前版本1.0.0</text>
			</view>
		</view>
		<view class="btn-row">
			<button type="default" @tap="bindLogout">退出登录</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		computed: {
			...mapState(['hasLogin', 'forcedLogin'])
		},
		data() {
			return {}
		},
		methods: {
			...mapMutations(['logout']),
			// bindLogin() {
			// 	uni.navigateTo({
			// 		url: '../../notLogin/notLogin',
			// 	});
			// },
			bindLogout() {
				const loginType = uni.getStorageSync('login_type')
				if (loginType === 'local') {
					this.logout();
					if (this.forcedLogin) {
						uni.reLaunch({
							url: '../../notLogin/notLogin',
						});
					}
					return
				}

				uniCloud.callFunction({
					name: 'user-center',
					data: {
						action: 'logout'
					},
					success: (e) => {

						console.log('logout success', e);

						if (e.result.code == 0) {
							this.logout();
							uni.removeStorageSync('uniIdToken')
							uni.removeStorageSync('userId')
							setTimeout(() => {
								uni.reLaunch({
									url: '../../notLogin/notLogin',
								})
							}, 500)
							/**
							 * 如果需要强制登录跳转回登录页面
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../../notLogin/notLogin',
								});
							}
						} else {
							uni.showModal({
								content: e.result.msg
							})
							console.log('登出失败', e);
						}

					},
					fail(e) {
						uni.showModal({
							content: JSON.stringify(e)
						})
					}
				})
			},
			gofeedback() {
				uni.navigateTo({
					url: '../../feedback/feedback'
				})
			},
			gerenxinxi() {
				uni.navigateTo({
					url: '../../gerenxinxi/gerenxinxi'
				})
			},
			anquanzhongxin() {
				uni.navigateTo({
					url: '../../anquanzhongxin/anquanzhongxin'
				})
			},
			huishourizhi() {
				uni.navigateTo({
					url: '../../huishourizhi/huishourizhi'
				})
			},
			qiandao(){
				uni.navigateTo({
					url:'../../qiandao/qiandao'
				})
			}
		},
	}
</script>

<style lang="scss">
	@import '../../../common/css/icon.css';

	.my {
		position: relative;

		.myimage {
			width: 100%;
			height: 79px;

			image {
				position: absolute;
				top: 32px;
				left: 0;
				width: 100%;
				height: 79px;
			}

			.header {
				position: relative;
				box-sizing: border-box;

				.header-avatar {
					// display: flex;
					// flex-shrink: 0;
					position: absolute;
					top: 8px;
					left: 60px;
					border-radius: 50%;
					width: 50px;
					height: 50px;

					.avatar {
						//padding: 5px;
						top: 0;
						border-radius: 50%;
						width: 100%;
						height: 100%;
						overflow: hidden;
					}
				}

				.header-right {
					position: absolute;
					top: 10px;
					right: 20px;
					display: flex;
					justify-content: space-around;
					flex-wrap: wrap;
					z-index: 2;

					.header-right_info,
					.header-right_info1,
					.header-right_info2 {
						display: flex;
						justify-content: space-around;
						margin: 0 5px;
						width: 40px;
						height: 43px;
						line-height: 1.8;
						flex-wrap: wrap;
						font-size: 14px;
						text-align: center;
						//font-weight: 550;
					}

					.header-right_info1 {
						font-size: 24px;
						line-height: 43px;
						color: #fde468;
					}

					.header-right_info2 {
						width: 60px;
					}
				}
			}
		}

		.my-select {
			display: flex;
			flex-wrap: wrap;
			padding: 10px;
			justify-content: space-around;

			.my-select-item {
				top: 10px;
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				position: relative;
				width: 20%;
				height: 0; //为了让图片变成方形
				padding-top: 20%; //撑开盒子
				box-sizing: border-box;

				.my-select-item_icon {
					position: absolute;
					top: 0;
					left: 20px;

					.icon-gerenzhongxin-zhong,
					.icon-anquanzhongxin,
					.icon-rizhi {
						font-size: 30px;
					}
				}

				.my-select-item_content {
					font-size: 16px;
					position: absolute;
					top: 40px;
					left: 2px;
				}
			}
		}

		.my-content {
			//margin-top: 20px;

			.my-content_list {
				display: flex;
				justify-content: space-between;

				.my-content_list-title {
					display: flex;
					align-items: center;
					padding: 0 15px;
					margin: 20px 0;

					.my-content_icon {
						margin-right: 5px;
					}

					text {
						font-size: 17px;
					}
				}

				.icons,
				text {
					margin-right: 10px;
					display: flex;
					align-items: center;
					font-size: 17px;
				}
			}
		}

		.btn-row {
			button {
				top: -20px;
				width: 300px;
				background-color: #FBD102;
			}
		}
	}
</style>

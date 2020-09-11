<template>
	<view class="login">
		<view class="login-header">
			<image src="../../static/login.png" mode="aspectFill"></image>
		</view>
		<view class="login-logo">
			<view class="login-logo_image">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="login-logo_hello">HELLO!</view>
			<view class="login-logo_title">终于等到你</view>
			<view class="login-logo_title1">账号登录</view>
		</view>
		<view class="content">
			<view class="input-group">
				<view class="input-row border">
					<text class="title">员工编号：</text>
					<m-input class="m-input" type="text" clearable focus v-model="userid" placeholder="请输入员工编号"></m-input>
				</view>
				<view class="input-row">
					<text class="title">密码：</text>
					<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
				</view>
			</view>
			<view class="btn-row">
				<button type="primary" class="primary" @tap="bindLogin">登录</button>
			</view>
			<view class="action-row">
				<navigator url="../reg/reg">注册账号</navigator>
				<text>|</text>
				<navigator url="../pwd/pwd">忘记密码</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		data() {
			return {
				userid: '',
				password: ''
			}
		},
		computed: mapState(['forcedLogin']),
		methods: {
			...mapMutations(['login']),
			bindLogin() {

				if (this.userid.length < 7) {
					uni.showToast({
						icon: 'none',
						title: '员工编号最短为 7 个字符'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				const data = {
					userid: this.userid,
					password: this.password
				};
				let _self = this;

				uniCloud.callFunction({
					name: 'user-center',
					data: {
						action: 'login',
						params: data
					},
					success: (e) => {

						console.log('登录成功', e);
						const uid = e.result.uid

						console.log(uid);

						if (e.result.code === 0) {

							uni.setStorageSync('uniIdToken', e.result.token)
							uni.setStorageSync('userid', e.result.userid)
							uni.setStorageSync('uid', e.result.uid)
							uni.setStorageSync('login_type', 'online')
							_self.toMain(_self.userid)
							setTimeout(() => {
								uni.switchTab({
									url: '../tabbar/my/my'
								})
							}, 20)

						} else {
							uni.showModal({
								content: e.result.msg
							})
							console.log('登录失败', e);
						}

					},
					fail(e) {
						uni.showModal({
							content: JSON.stringify(e)
						})
					}
				})
			},

			toMain(userId) {
				this.login(userId);
				/**
				 * 强制登录时使用reLaunch方式跳转过来
				 * 返回首页也使用reLaunch方式
				 */
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../tabbar/my/my',
					});
				} else {
					uni.navigateBack();
				}

			}
		}
	}
</script>

<style lang="scss">
	.login {
		display: flex;
		flex-direction: column;
		flex: 1;

		.login-header {
			width: 100%;
			height: 90px;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.login-logo {
			position: relative;
			width: 100%;
			height: 100px;
			line-height: 1.5;
			text-align: center;

			.login-logo_image {
				position: absolute;
				display: flex;
				width: 100px;
				height: 100px;
				left: 50%;
				transform: translate(-50%);

				image {
					width: 100%;
					height: 100%;
				}
			}

			.login-logo_hello,
			.login-logo_title,
			.login-logo_title1 {
				width: 100%;
				height: 30px;
				position: absolute;
				line-height: 30px;
				text-align: center;
			}

			.login-logo_title {
				font-size: 16pX;
				top: 150px;
			}

			.login-logo_hello {
				font-size: 35pX;
				top: 110px;
			}

			.login-logo_title1 {
				position: absolute;
				width: 80px;
				font-size: 16pX;
				left: 50%;
				transform: translate(-50%);
				top: 200px;
				border-bottom: 4px solid #fbd102;
			}
		}

	}

	.content {
		top: 320px;
	}

	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;

		text {
			color: #8F8F94;
		}
	}

	.action-row navigator {
		color: #fbd102;
		padding: 0 10px;
	}
</style>

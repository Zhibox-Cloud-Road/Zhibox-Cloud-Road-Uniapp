<template>
	<view class="reg">
		<view class="navbar">
			<view class="arrowleft">
				<uni-icons class="icon" type="arrowleft" size="24" color="#2e2602" @click="gobacklogin"></uni-icons>
				<view class="title">注册</view>
			</view>
		</view>
		<view class="content">
			<view class="input-group">
				<view class="input-row border">
					<text class="title">姓名：</text>
					<m-input type="text" focus clearable v-model="employee_name" placeholder="请输入姓名"></m-input>
				</view>
				<view class="input-row border">
					<text class="title">性别：</text>
					<m-input type="text" focus clearable v-model="gender" placeholder="请输入性别"></m-input>
				</view>

				<view class="input-row border">
					<text class="title">员工编号：</text>
					<m-input type="text" focus clearable v-model="userid" placeholder="请输入员工编号"></m-input>
				</view>
				<view class="input-row border dropdown">
					<text class="title">所属片区：</text>
					<uni-combox :candidates="candidates" placeholder="请选择所在片区" v-model="street"></uni-combox>
				</view>
				<view class="input-row border">
					<text class="title">手机号：</text>
					<m-input type="tel" focus clearable v-model="telephone" placeholder="请输入绑定的手机号"></m-input>
				</view>
				<view class="input-row border">
					<text class="title">密码：</text>
					<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
				</view>
				<view class="input-row">
					<text class="title">确认密码：</text>
					<m-input type="password" displayable v-model="confirmPassword" placeholder="请确认密码"></m-input>
				</view>
			</view>
		</view>
		<view class="reg-bottom">
			<view class="warning">注册即表示您已同意《智箱云路服务协议》《隐私政策》</view>
			<view class="btn-row">
				<button type="primary" class="primary" @tap="register">注册</button>
			</view>
		</view>

	</view>
</template>

<script>
	import service from '../../service.js';
	export default {

		data() {
			return {
				candidates:['中北镇','西青区生态环境局','苑西路环卫工人之家','津南区红旗路环卫工人服务站','西青区李七庄街市容环卫部门'],
				street:'',
				userid: '',
				password: '',
				gender: '',
				employee_name: '',
				confirmPassword: '',
				telephone: ''
			}
		},
		methods: {
			gobacklogin() {
				uni.navigateTo({
					url: "../login/login"
				})
			},
			register() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 */
				if (this.userid.length < 7) {
					uni.showToast({
						icon: 'none',
						title: '员工编号最短为 7 个字符'
					});
					return;
				}
				if (this.userid.length > 10) {
					uni.showToast({
						icon: 'none',
						title: '员工编号最长为 10 个字符'
					});
					return;
				}
				if (this.telephone.length != 11) {
					uni.showToast({
						icon: 'none',
						title: '输入的手机号不为11位'
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
				if (this.password !== this.confirmPassword) {
					uni.showToast({
						icon: 'none',
						title: '两次密码输入不一致'
					});
					return;
				}

				const data = {
					userid: this.userid,
					password: this.password,
					street:this.street,
					password: this.password,
					gender: this.gender,
					employee_name: this.employee_name,
					confirmPassword: this.confirmPassword,
					telephone: this.telephone
				}
				uniCloud.callFunction({
					name: 'user-center',
					data: {
						action: 'register',
						params: data
					},
					success(e) {
						console.log("注册成功", e);

						if (e.result.code === 0) {
							uni.showToast({
								title: '注册成功',
								icon:"none"
							});
							uni.setStorageSync('uniIdToken', e.result.token)
							uni.setStorageSync('userid', e.result.userid)
							setTimeout(()=>{
								uni.reLaunch({
									url: '../login/login',
								})
							},2000)
						} else {
							uni.showModal({
								content: JSON.stringify(e.result),
								showCancel: false
							})
						}
					},
					fail(e) {
						uni.showModal({
							content: JSON.stringify(e),
							showCancel: false
						})
					}
				})
			}
		}
	}
</script>


<style lang="scss">
	.navbar {
		width: 100%;
		height: 75px;
		background-color: #fbd102;

		.arrowleft {
			display: flex;
			width: 100%;
			height: 75px;
			box-sizing: border-box;

			.icon {
				height: 75px;
				margin-top: 40px;
			}

			.title {
				width: 100%;
				// height: 75px;
				margin-left: 146px;
				margin-top: 40px;

			}

		}
	}

	.reg-bottom {
		position: absolute;
		top: 385px;
	}

	.warning {
		margin-top: 5px;
		font-size: 15px;
		color: #C0C0C0;
		text-align: center;
	}

	.content {
		top: 70px;
	}

	.dropbtn {
		color: #101010;
		font-size: 14px;
		margin: 5px;
		//border: 1px solid #C0C0C0;
		cursor: pointer;
		width: 160px;
	}

	.dropdown {
		position: relative;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		left: 120px;
		top: 42px;
		background-color: #f9f9f9;
		min-width: 160px;
		max-height: 160px;
		overflow: auto;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 2;
	}

	/* 下拉菜单的选项 */
	.dropdown-content text {
		color: #101010;
		font-size: 16px;
		text-align: center;
		display: block;
	}

	/* 鼠标移上去后修改下拉菜单链接颜色 */
	.dropdown-content a:hover {
		background-color: #f1f1f1
	}

	/* 在鼠标移上去后显示下拉菜单 */
	.dropdown:hover .dropdown-content {
		display: block;
	}
</style>

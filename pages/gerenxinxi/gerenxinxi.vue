<template>
	<view class="gerenxinxi">
		<view class="arrowleft">
			<uni-icons class="icon" type="arrowleft" size="24" color="#2e2602" @click="goback"></uni-icons>
			<view class="title">个人信息</view>
		</view>
		<view class="background">
			<image src="../../static/login.png" mode="aspectFill" ></image>
			<view class="content">
				<view class="content-item">
					<view class="content-item_left">
						员工姓名：
					</view>
					<view class="content-item_right">
						{{userinfo.employee_name}}
					</view>
				</view>
				<view class="content-item">
					<view class="content-item_left">
						员工编号：
					</view>
					<view class="content-item_right">
						{{userinfo.userid}}
					</view>
				</view>
				<view class="content-item">
					<view class="content-item_left">
						所属片区：
					</view>
					<view class="content-item_right">
						{{userinfo.street}}
					</view>
				</view>
				<view class="content-item">
					<view class="content-item_left">
						员工性别：
					</view>
					<view class="content-item_right">
						{{userinfo.gender}}
					</view>
				</view>
				<view class="content-item">
					<view class="content-item_left">
						手机号：
					</view>
					<view class="content-item_right">
						{{userinfo.telephone}}
					</view>
				</view>
				<view class="content-item">
					<view class="content-item_left">
						注册时间：
					</view>
					<view class="content-item_right">
						{{userinfo.register_date | formatTime}}
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {parseTime} from '@/utils/index.js'
	import {mapState} from 'vuex'
	export default {
		data() {
			return {

			}
		},
		computed:{
			...mapState(['userinfo'])
		},
		onLoad() {
			console.log(this.userinfo);
		},
		filters:{
			formatTime(time){
				return parseTime(time).slice(0,10)
			}
		},
		methods: {
			goback() {
				uni.switchTab({
					url: '../tabbar/my/my'
				})
			}

		}
	}
</script>

<style lang="scss">
	.gerenxinxi {
		display: flex;
		flex-direction: column;
		padding-bottom: 54px;
		color: #0e0e0e;

		.arrowleft {
			display: flex;
			width: 100%;
			height: 75px;
			box-sizing: border-box;
			background-color: #fbd102;

			.icon {
				height: 75px;
				margin-top: 40px;
			}

			.title {
				width: 100%;
				margin-left: 130px;
				margin-top: 40px;
			}
		}

		.background {
			width: 100%;
			height: 90px;

			image {
				width: 100%;
				height: 100%;
			}

			.content {
				top: 100px;
				z-index: 999;

				.content-item {
					display: flex;
					justify-content: space-between;
					width: 100%;
					height: 60px;
					line-height: 60px;
					padding:0 5px;
					border-top: 1px solid #C8C7CC;
					//margin-top: 5px;
					box-sizing: border-box;
				}
				.content-item:last-child{
					border-bottom: 1px solid #C8C7CC;
				}
			}
		}

	}
</style>

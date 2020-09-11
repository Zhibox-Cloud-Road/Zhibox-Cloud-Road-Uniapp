<template>
	<view class="qiandao">
		<view class="arrowleft">
			<uni-icons class="icon" type="arrowleft" size="24" color="#2e2602" @click="goback"></uni-icons>
			<view class="title">签到</view>
		</view>
		<view class="qiandao-logo">
			<image src="../../static/签到.png" mode="aspectFill"></image>
		</view>
		<view class="qiandao-content">

			<view class="qiandao-content_box-header">
				<view>已连续签到</view>
				<view class="qiandao-content_box-day">
					<text>1</text>天
				</view>
				<view class="qiandao-content_box-jifen">我的积分：214分</view>
			</view>
			<view class="qiandao-content_box-bottom">
				<view class="day">
					<view class="jifen" :class="{'yellow':true}" v-if="count === 1">+1</view>
					<view>1天</view>
				</view>
				<view class="day">
					<view class="jifen">+1</view>
					<view>2天</view>
				</view>
				<view class="day">
					<view class="jifen">+2</view>
					<view>3天</view>
				</view>
				<view class="day">
					<view class="jifen">+2</view>
					<view>4天</view>
				</view>
				<view class="day">
					<view class="jifen">+2</view>
					<view>5天</view>
				</view>
				<view class="day">
					<view class="jifen">+3</view>
					<view>6天</view>
				</view>
				<view class="day">
					<view class="jifen">+3</view>
					<view>7天</view>
				</view>
			</view>
			<view class="qiandao-content_btn">
				<button type="primary" size="mini" style="background-color: #fbd102; color:#101010; border: 0;" @click="qiandao"
				 v-if="flag">今日签到</button>
				<button type="primary" size="mini" style="background-color: #fbd102; color:#101010; border: 0;" @click="qiandao"
				 :disabled="disabled" v-else>今日签到</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag: true,
				//fyj: null,
				disabled: true,
				count:1
			}
		},
		methods: {
			goback() {
				history.go(-1)
				// uni.navigateTo({
				// 	url:'/tabbar/my/my'
				// })
			},
			qiandao() {
				var time = new Date()
				let date = time.getDate()
				let hour = time.getTime()
				
				console.log(date)
				console.log(hour);
				// setTimeout(() => {
				// 	let li = ++date
				// 	this.fyj = li
				// 	console.log(this.fyj)
				// }, 3000)
				this.flag = !this.flag
				console.log('签到成功');
				setTimeout(()=>{
					this.flag = true
					this.disabled = true
				},86400000)
				// if (this.fyj === (date+1)) {
				// 	this.flag = true
				// 	this.disabled = true
				// }
			}
		}
	}
</script>

<style lang="scss">
	.yellow {
		background-color: #fbd102 !important;
	}

	.qiandao {
		display: flex;
		flex-direction: column;
		color: #101010;

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
				// height: 75px;
				margin-left: 146px;
				margin-top: 40px;

			}

		}

		.qiandao-logo {
			display: flex;
			width: 100%;
			height: 170px;
			box-sizing: border-box;

			image {
				width: 100%;
				height: 100%;
				border-radius: 10px;
				overflow: hidden;
			}
		}

		.qiandao-content {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 20px;

			.qiandao-content_btn {
				display: flex;
				margin: 20px 0;
			}

			.qiandao-content_box-header {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin: 10px 0;
				font-size: 18px;

				.qiandao-content_box-day {
					text {
						font-size: 35px;
						font-weight: 700;
						color: #fbd102;
					}
				}
			}

			.qiandao-content_box-bottom {
				display: flex;
				flex-direction: row;
				font-size: 16px;
				justify-content: space-around;
				align-items: center;
				width: 100%;
				height: 50px;
				margin-top: 10px;

				.day {
					display: flex;
					flex-direction: column;
					width: 14.28%;
					align-items: center;

					.jifen {
						width: 25px;
						height: 25px;
						line-height: 25px;
						text-align: center;
						border-radius: 50%;
						font-size: 14px;
						background-color: #F1F1F1;
					}

					.jifen :active {
						width: 25px;
						height: 25px;
						line-height: 25px;
						text-align: center;
						border-radius: 50%;
						font-size: 14px;
						// background-color: #F1F1F1;
						background-color: #fbd102 !important;
					}
				}
			}
		}
	}
</style>

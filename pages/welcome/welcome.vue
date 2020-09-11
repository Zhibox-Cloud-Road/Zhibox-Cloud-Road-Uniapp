<template>
	<view class="welcome" @click="go">
		<image src="../../static/单独_状态.png" mode="aspectFill"></image>
		<view class="top"></view>
		<view class="logo">
			<image src="../../static/logo.png" mode="aspectFill"></image>
		</view>
		<view class="title">
			<view>智箱云路</view>
		</view>
		<view class="title1">
			<view>2020年“挑战杯”</view><br>
		</view>
		<view class="title2">
			<view>天津市大学生创业计划竞赛</view>
		</view>
		<view class="title3">
			<view>中国 · 天津</view><br>
		</view>
		<view class="title4">
			<view>2020年9月</view>
		</view>
		<view class="bottom">V1.0.0</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			go(){
				uni.navigateTo({
					url:'../sildeshow/sildeshow'
				})
			}
		}
	}
</script>

<style lang="scss">
	.welcome{
		position: relative;
		height: 668px;
		width: 100%;
		box-sizing: border-box;
		image{
			width: 100%;
			height: 100%;
		}
		.top{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 60px;
			background-color: #f8f8f8;
		}
		.logo {
			position: absolute;
			top: 180px;
			left: 0px;
			display: flex;
			width: 115px;
			height: 125px;
			margin-top: 100px;
			margin-left: 50%;
			transform: translate(-50%);
			box-sizing: border-box;
			
			image {
				width: 100%;
				height: 100%;
				border-radius: 20px;
			}
		}
		.title {
			position: absolute;
			top: 210px;
			left: 137px;
			margin-top: 10px;
			display: flex;
			justify-content: center;
			font-size: 24px;
			font-weight: 600;
			color:#101010;
		}
		.title1,
		.title2,
		.title3,
		.title4{
			position: absolute;
			margin-top: 10px;
			display: flex;
			justify-content: center;
			font-size: 16px;
			color:#101010;
			font-weight: 700;
		}
		.title1{
			top: 80px;
			left: 125px;
		}
		.title2{
			top: 105px;
			left: 87px;
		}
		.title3{
			top: 520px;
			left: 150px;
		}
		.title4{
			top: 560px;
			left: 150px;
		}
		.bottom{
			position:absolute;
			left: 0;
			bottom: 0;
			margin-bottom: 0;
			text-align: center;
			line-height: 40px;
			width: 100%;
			height: 40px;
			color:#373737;
			background-color: #f8f8f8;
			font-size: 16px;
		}
	}
	
</style>

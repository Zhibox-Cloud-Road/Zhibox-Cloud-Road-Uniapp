<template>
	<view class="home-swiper">
		<swiper class="swiper" :circular="true" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
		 indicator-active-color="#fbd102">
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/welcome1.png" mode="aspectFill"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/welcome2.png" mode="aspectFill"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/welcome3.png" mode="aspectFill"></image>
					<button type="primary" class="btn" @click="go">立即体验</button>
				</view>
			</swiper-item>
		</swiper>
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
					url:'../notLogin/notLogin'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		width: 100%;
		height: 100%;
	}
	.home-swiper {
		width: 100%;
		height: 668px;
		box-sizing: border-box;

		.swiper {
			width: 100%;
			height: 668px;

			.swiper-item {
				position: relative;
				width: 100%;
				height: 100%;

				image {
					//position: absolute;
					width: 100%;
					height: 100%;
				}
				.btn{
					position: absolute;
					bottom: 40px;
					left: 50%;
					transform: translate(-50%);
					background-color: #fbd102;
				}
			}
		}
	}
</style>

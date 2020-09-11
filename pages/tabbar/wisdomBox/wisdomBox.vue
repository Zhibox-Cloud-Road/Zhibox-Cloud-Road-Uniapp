<template>
	<view class="wisdombox">
		<view class="arrowleft">
			<view class="title">智 箱</view>
		</view>
		<map style="width: 100%; height: 542px;" :latitude="latitude" :longitude="longitude" :markers="markers"></map>
		<view class="btn" @click="goCloudRoad">
			<button type="default">Go</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// id: 0, // 使用 marker点击事件 需要填写id
				// title: 'map',
				latitude: 39.094968,
				longitude: 117.095444,
				markers: [{
						id: 1,
						latitude: 39.139000,
						longitude: 117.090040,
						//name: '中北镇万卉路',
						callout: {
							content: '中北镇万卉路',
							color:'#fff',
							borderRadius: 3, //边框圆角
							orderWidth: 1, //边框宽度
							bgColor: '#ff4500', //背景色
							padding: 5, //文本边缘留白
							textAlign: 'center'
						}
						//iconPath: '../../../static/垃圾箱.png'
					},
					{
						id: 2,
						latitude: 39.093831,
						longitude: 117.091169,
						//name: '海泰南北大街',
						callout: {
							content: '海泰南北大街1',
							color:'#fff',
							borderRadius: 3, //边框圆角
							orderWidth: 1, //边框宽度
							bgColor: '#3cb371', //背景色
							padding: 5, //文本边缘留白
							textAlign: 'center'
						}
						//iconPath: '../../../static/垃圾箱.png'
					},
					{
						id: 3,
						latitude: 39.088902,
						longitude: 117.101727,
						//name: '津静公路',
						callout: {
							content: '津静公路',
							color:'#fff',
							borderRadius: 3, //边框圆角
							orderWidth: 1, //边框宽度
							bgColor: '#3cb371', //背景色
							padding: 5, //文本边缘留白
							textAlign: 'center'
						}
						//iconPath: '../../../static/垃圾箱.png'
					},
					{
						id: 4,
						latitude: 39.094968,
						longitude: 117.095444,
						callout: {
							content: '滨湖道',
							color:'#fff',
							borderRadius: 3, //边框圆角
							orderWidth: 1, //边框宽度
							bgColor: '#ff4500', //背景色
							padding: 5, //文本边缘留白
							textAlign: 'center'
						}
					},
					{
						id: 5,
						latitude: 39.088270,
						longitude: 117.091770,
						callout: {
							content: '发展一道',
							color:'#fff',
							borderRadius: 3, //边框圆角
							orderWidth: 1, //边框宽度
							bgColor: '#fbd102', //背景色
							padding: 5, //文本边缘留白
							textAlign: 'center'
						}
					},
					{
						id: 6,
						latitude: 39.092666,
						longitude: 117.094603,
						callout: {
							content: '煦园南道',
							color:'#fff',
							borderRadius: 3, //边框圆角
							orderWidth: 1, //边框宽度
							bgColor: '#fbd102', //背景色
							padding: 5, //文本边缘留白
							textAlign: 'center'
						}
					},
					{
						id: 7,
						latitude: 39.094264,
						longitude: 117.092543,
						callout: {
							content: '西环路',
							color:'#fff',
							borderRadius: 3, //边框圆角
							orderWidth: 1, //边框宽度
							bgColor: '#ff4500', //背景色
							padding: 5, //文本边缘留白
							textAlign: 'center'
						}
					},
					{
						id: 8,
						latitude: 39.090417,
						longitude: 117.094452,
						callout: {
							content: '鸣飞南道',
							color:'#fff',
							borderRadius: 3, //边框圆角
							orderWidth: 1, //边框宽度
							bgColor: '#3cb371', //背景色
							padding: 5, //文本边缘留白
							textAlign: 'center'
						}
					},
					{
						id: 9,
						latitude: 39.091133,
						longitude: 117.091169,
						callout: {
							content: '海泰南北大街2',
							color:'#fff',
							borderRadius: 3, //边框圆角
							orderWidth: 1, //边框宽度
							bgColor: '#3cb371', //背景色
							padding: 5, //文本边缘留白
							textAlign: 'center'
						}
					},
					{
						id: 10,
						latitude: 39.088835,
						longitude: 117.093809,
						callout: {
							content: '津静路28号',
							color:'#fff',
							borderRadius: 3, //边框圆角
							orderWidth: 1, //边框宽度
							bgColor: '#fbd102', //背景色
							padding: 5, //文本边缘留白
							textAlign: 'center'
						}
					}
				],
			}
		},
		methods: {
			goCloudRoad() {
				uni.switchTab({
					url: '../cloudRoad/cloudRoad'
				})
			}
		}
	}
</script>

<style lang="scss">
	// /deep/ .csssprite {
	// 	width: 35px !important;
	// 	height: 35px !important;
	// 	min-width: 35px !important;
	// 	min-height: 35px !important;
	// }

	.wisdombox {
		position: relative;

		.arrowleft {
			display: flex;
			width: 100%;
			height: 75px;
			box-sizing: border-box;
			background-color: #fbd102;

			.title {
				width: 100%;
				// height: 75px;
				margin-left: 170px;
				margin-top: 40px;

			}

		}

		.btn {
			position: absolute;
			bottom: 30px;
			right: 25px;
			width: 60px;
			height: 60px;

			button {
				width: 100%;
				height: 100%;
				text-align: center;
				line-height: 60px;
				border-radius: 50%;
				font-size: 24px;
				font-weight: 700;
				color: #FFFFFF;
				background-color: #FBD102;
			}
		}
	}
</style>

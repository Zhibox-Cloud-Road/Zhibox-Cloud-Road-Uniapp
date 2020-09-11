<template>
	<view class="cloudroad">
		<view class="arrowleft">
			<view class="title">云 路</view>
		</view>
		<map style="width: 100%; height: 542px;" :latitude="latitude" :longitude="longitude" :markers="markers" :polyline="polyline"></map>
		<!-- <map id="myMap" style="width: 100%; height: 542px;" :latitude="latitude" :longitude="longitude" :markers="markers"
		 show-location></map> -->

	</view>
	</view>
</template>

<script>
	// var self, mapCtx
	export default {
		// onLoad() {
		// 	self = this
		// 	// 获取当前map
		// 	mapCtx = wx.createMapContext('myMap')
		// 	self.getAuthorizeInfo()
		// },
		//相关配置参数
		data() {
			return {
				// 初始化的中心位置
				latitude: 39.094968,
				longitude: 117.095444,
				// 标记点
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
				polyline:[{
					points:[{latitude: 39.094968,longitude: 117.095444},{latitude: 39.095313,longitude: 117.094903},{latitude: 39.094314,
						longitude: 117.094903},{latitude: 39.094264,longitude: 117.092543},{latitude: 39.094248,longitude: 117.094474},
						{latitude: 39.092666,longitude: 117.094603},{latitude: 39.090417,longitude: 117.094452},{latitude: 39.088985,longitude: 117.094517},
						{latitude: 39.088835,longitude: 117.093809},{latitude: 39.088818,longitude: 117.091191},
						{latitude: 39.088235,longitude: 117.091191},{latitude: 39.088270,longitude: 117.091770}],
					color:'#4575F6',
					width:3,
					arrowLine:true,
				}]
			}

		},

		methods: {
			
		 }
	}
</script>

<style lang="scss">
	.cloudroad {

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
	}
</style>

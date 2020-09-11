<template>
	<view class="star">
		
		<view class="arrowleft">
			<view class="title">环卫之星</view>
		</view>
		<view class="star-logo">
			<image src="../../../static/排行榜.png" mode="aspectFill"></image>
		</view>
		<view class="star-content">
			<view class="star-content_items">
				<view class="star-content_item">
					<view class="star-content_item_icon">
						<image src="../../../static/第一名.png" mode="aspectFill"></image>
					</view>
					<view class="star-content_item-content">
						<view>张三</view>
						<view>本周共回收2200kg</view>
					</view>
				</view>
				<view class="star-content_item">
					<view class="star-content_item_icon">
						<image src="../../../static/第二名.png" mode="aspectFill"></image>
					</view>
					<view class="star-content_item-content">
						<view>李四</view>
						<view>本周共回收2180kg</view>
					</view>
				</view>
				<view class="star-content_item">
					<view class="star-content_item_icon">
						<image src="../../../static/第三名.png" mode="aspectFill"></image>
					</view>
					<view class="star-content_item-content">
						<view>王五</view>
						<view>本周共回收2090kg</view>
					</view>
				</view>
				<view class="star-content_item">
					<view class="star-content_item_icon">
						<image src="../../../static/第四名.png" mode="aspectFill"></image>
					</view>
					<view class="star-content_item-content">
						<view>王云凡</view>
						<view>本周共回收2050kg</view>
					</view>
				</view>
				<view class="star-content_item">
					<view class="star-content_item_icon">
						<image src="../../../static/第五名.png" mode="aspectFill"></image>
					</view>
					<view class="star-content_item-content">
						<view>张小波</view>
						<view>本周共回收2000kg</view>
					</view>
				</view>
				<view class="star-content_item">
					<view class="star-content_item_icon">
						<image src="../../../static/第六名.png" mode="aspectFill"></image>
					</view>
					<view class="star-content_item-content">
						<view>李昊天</view>
						<view>本周共回收1980kg</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	
	.star {
		display: flex;
		flex-direction: column;
		color: #101010;

		.arrowleft {
			display: flex;
			width: 100%;
			height: 75px;
			box-sizing: border-box;
			background-color: #fbd102;

			.title {
				width: 100%;
				text-align: center;
				margin-top: 40px;
			}
		}

		.star-logo {
			width: 100%;
			height: 90px;

			image {
				border-radius: 0 0 10px 10px;
				width: 100%;
				height: 100%;
			}
		}
		.star-content{
			display: flex;
			flex-direction: column;
			.star-content_items{
				display: flex;
				flex-direction: column;
				
				.star-content_item{
					display: flex;
					width: 100%;
					height: 70px;
					align-items: center;
					border-top: 2px dotted #FBD102;
					box-sizing: border-box;
					
					
					.star-content_item_icon{
						margin: 10px;
						width: 40px;
						height: 40px;
						
						image{
							width: 100%;
							height: 100%;
						}
					}
					.star-content_item-content{
						margin-left: 20px;
						color: #0e0e0e;
					}
				}
				.star-content_item:first-child{
					border-top: none;
				}
				.star-content_item:last-child{
					border-bottom: 2px dotted #FBD102;
				}
			}
		}
	}
</style>

<template>
	<view class="notlogin">
		<view style="width: 100%;height: 32px;background-color: #fbd102;"></view>
		<view class="notloginimage">
			<image src="../../static/notLogin.png" mode=""></image>
			<view class="header">
				<button class="btn" type="primary" @click="login" style=" border: 0;">登录 / 注册</button>
				<view class="header-right">
					<view class="header-right_info">一天签到</view>
					<view class="header-right_info1">|</view>
					<view class="header-right_info2">一枚<br>我的勋章</view>
				</view>
			</view>
		</view>
		<view class="nologin-content">
			<view class="nologin-content_list" @click="gofeedback">
				<view class="nologin-content_list-title">
					<view class="nologin-content_icon">
						<text class="iconfont icon-yijianfankui"></text>
					</view>
					<text>意见反馈</text>
				</view>
				<uni-icons class="icons" type="arrowright" size="18" color="#0e0e0e"></uni-icons>
			</view>
			<view class="nologin-content_list">
				<view class="nologin-content_list-title" >
					<view class="nologin-content_icon">
						<text class="iconfont icon-bangzhuzhongxin"></text>
					</view>
					<text>帮助中心</text>
				</view>
				<uni-icons class="icons" type="arrowright" size="18" color="#0e0e0e"></uni-icons>
			</view>
			<view class="nologin-content_list">
				<view class="nologin-content_list-title" >
					<view class="nologin-content_icon">
						<text class="iconfont icon-shezhi"></text>
					</view>
					<text>系统设置</text>
				</view>
				<uni-icons class="icons" type="arrowright" size="18" color="#0e0e0e"></uni-icons>
			</view>
			<view class="nologin-content_list">
				<view class="nologin-content_list-title" >
					<view class="nologin-content_icon">
						<text class="iconfont icon-users_light"></text>
					</view>
					<text>关于我们</text>
				</view>
				<uni-icons class="icons" type="arrowright" size="18" color="#0e0e0e"></uni-icons>
			</view>
			<view class="nologin-content_list">
				<view class="nologin-content_list-title" >
					<view class="nologin-content_icon">
						<text class="iconfont icon-banben"></text>
					</view>
					<text>APP版本</text>
				</view>
				<text>当前版本1.0.0</text>
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
			login(){
				uni.navigateTo({
					url:'../login/login'
				})
			},
			gofeedback(){
				uni.navigateTo({
					url:'../feedback/feedback'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/icon.css';
	.notlogin{
		position: relative;
		.notloginimage{
			width: 100%;
			height: 79px;
			image{
				position: absolute;
				top: 32px;
				left: 0;
				width: 100%;
				height: 79px;
			}
			.header{
				position: relative;
				box-sizing: border-box;
				.btn{
					border: 0;
					position: absolute;
					top: 40px;
					left: 40px;
					width: 100px;
					height: 30px;
					line-height: 30px;
					text-align: center;
					color: #0e0e0e;
					background-color: #fff7cd;
					font-size: 14px;
					font-weight: 700;
					border-radius: 50px;
				}
				.header-right{
					position: absolute;
					top: 29px;
					right: 20px;
					display: flex;
					justify-content: space-around;
					flex-wrap: wrap;
					z-index: 2;
					.header-right_info,
					.header-right_info1,
					.header-right_info2{
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
					.header-right_info1{
						font-size: 24px;
						line-height: 43px;
						color: #fde468;
					}
					.header-right_info2{
						width: 60px;
					}
				}
			}
		}
		.nologin-content{
			margin-top: 30px;
			.nologin-content_list{
				display: flex;
				justify-content: space-between;
				.nologin-content_list-title{
					display: flex;
					align-items: center;
					padding: 0 15px;
					margin: 20px 0;
					.nologin-content_icon{
						margin-right: 5px;
					}
					text{
						font-size: 17px;
					}
				}
				.icons,
				text{
					margin-right: 10px;
					display: flex;
					align-items: center;
					font-size: 17px;
				}
			}
			
		}
		
		
	}
	
</style>

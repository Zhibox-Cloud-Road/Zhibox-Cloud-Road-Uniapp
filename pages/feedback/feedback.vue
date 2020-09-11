<template>
	<view class="feedback">
		<view class="feedback-header">
			<uni-icons class="icon" type="arrowleft" size="24" color="#2e2602" @click="gonotlogin"></uni-icons>
			<view class="title">意见反馈</view>
		</view>
		<view class="feedback-title">意见反馈</view>
		<view class="feedback-content">
			<textarea class="feedback-textarea" v-model="content" placeholder="请输入您要反馈的问题" />
			</view>
		<view class="feedback-title">反馈图片：</view>
		<view class="feedback-image-box">
			<view class="feedback-image-item" v-for="(item,index) in imageLists" :key="index">
				<view class="close-icon" @click="del(index)">
					<uni-icons type="closeempty" size="18" color="#fff"></uni-icons>
				</view>
				<view class="image-box">
					<image :src="item.url" mode="aspectFill"></image>
				</view>
			</view>
			<view v-if="imageLists.length < 6" class="feedback-image-item" @click="addImage">
				<view class="image-box">
					<uni-icons type="plusempty" size="50" color="#eee"></uni-icons>
				</view>
			</view>
		</view>
		<button class="feedback-btn" type="primary" @click="submit">提交反馈意见</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:'',
				imageLists:[]
			}
		},
		methods: {
			gonotlogin(){
				history.go(-1)
				// uni.navigateTo({
				// 	url:'../notLogin/notLogin'
				// })
			},
			del(index){
				this.imageLists.splice(index,1)
			},
			addImage(){
				const count = 5 - this.imageLists.length
				uni.chooseImage({
					count:count,
					success:(res)=> {
						const tempfilepaths = res.tempFilePaths
						tempfilepaths.forEach((item,index)=>{
							// 处理 h5 多选的状况
							if(index<count){
								this.imageLists.push({
									url:item
								})
							}
						})
						console.log(res);
					}
				})
			},
			async submit(){
				let imagesPath = []
				uni.showLoading()
				// 
				for(let i = 0 ; i < this.imageLists.length ;i++){
					const filePath = this.imageLists[i].url
					filePath =  await this.uploadFiles(filePath)
					imagesPath.push(filePath)
				}
		
				
				this.updateFeedback({
					content:this.content,
					feedbackImages:imagesPath
				})
			},
			async uploadFiles(filePath){
				const result = await uniCloud.uploadFile({
					filePath:filePath,
					cloudPath:'zxyl.jpg'
				})
				console.log(result);
				return result.fileID
			},
			updateFeedback({content,feedbackImages}){
				this.$api.update_feedback({content,feedbackImages}).then(res=>{
					uni.hideLoading()
					uni.showToast({
						title:"反馈提交成功",
						icon:'none'
					})
					setTimeout(()=>{
						history.go(-1)
					},2000)
				}).catch(()=>{
					uni.hideLoading()
					uni.showToast({
						title:"反馈提交失败 ",
						icon:"none"
					})
					setTimeout(()=>{
						history.go(-1)
					},2000)
				})
			}
		}
	}
</script>


<style lang="scss">
	.feedback {	
		.feedback-header {
			display: flex;
			width: 100%;
			height: 75px;
			box-sizing: border-box;
			background-color: #fbd102;
			.icon{
				height: 75px;
				margin-top: 40px;
			}
			.title {
				 width: 100%;
				// height: 75px;
				margin-left: 130px;
				margin-top: 40px;
				
			}	
		}
		.feedback-title{
			margin: 15px;
			margin-bottom: 0;
			font-size: 16px;
			color: #0e0e0e;
		}
		.feedback-content{
			margin: 15px;
			padding: 10px;
			box-sizing: border-box;
			border: 1px solid #eee;
			.feedback-textarea{
				color: #0e0e0e;
				font-size: 14px;
				width: 100%;
				height: 110px;
			}
		}
		.feedback-image-box{
			display: flex;
			flex-wrap: wrap;
			padding: 10px;
			.feedback-image-item{
				position: relative;
				width: 33.33%;
				height: 0;
				padding-top: 33.33%;
				box-sizing: border-box;
				.image-box{
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;
					top: 5px;
					left: 5px;
					right: 5px;
					bottom: 5px;
					border: 1px solid #eee;
					border-radius: 5px;
					overflow: hidden;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.close-icon{
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;
					right: -3px;
					top: -3px;
					width: 22px;
					height: 22px;
					border-radius: 50%;
					background-color: #ff5a5f;
					z-index: 2;
				}
			}
		}
		.feedback-btn{
			margin: 0 15px;
			background-color: #fde468;
			color: #0e0e0e;
		}
	}
</style>

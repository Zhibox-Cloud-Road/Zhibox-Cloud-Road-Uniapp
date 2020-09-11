<template>
	<view class="huishourizhi">
		<view class="arrowleft">
			<uni-icons class="icon" type="arrowleft" size="24" color="#2e2602" @click="goback"></uni-icons>
			<view class="title">回收日志</view>
		</view>
		<uni-calendar class="calendar" :insert="true" :lunar="true" :start-date="'2019-3-2'" :end-date="'2019-5-20'" @change="change"
		 :selected="selected"></uni-calendar>
		<view class="huoshourizhi-journal">
			<view class="journal-title">回收日志</view>
			<view class="journal-content" v-for="item in commentsList" :key="item.journal_id">
				<comments-box :comments="item"></comments-box>
			</view>
		</view>
		<view class="huishourizhi-bottom">
			<view class="huishourizhi-bottom_input" @click="openComment">
				<text>发布你的回收日志</text>
				<uni-icons type="compose" size="16" color="#fbd102"></uni-icons>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom" :maskClick="false">
			<view class="popup-wrap">
				<view class="popup-header">
					<text class="popup-header_item" @click="close">取消</text>
					<text class="popup-header_item" @click="submit">发布</text>
				</view>
				<view class="popup-content">
					<textarea class="popup-textarea" v-model="commentsValue" maxlength="100" fixed="true" placeholder="请输入回收日志内容" />
					<view class="popup-count">{{commentsValue.length}}/100</view>
				</view>
			</view>
		</uni-popup>
		<uni-load-more v-if="commentsList === 0 || commentsList.length > 5" iconType="snow" :status="loading"></uni-load-more>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				commentsValue:'',
				commentsList:[],
				selected:[],
				page:1,
				pageSize:5,
				loading:'loading'
			}
		},
		computed:{
			...mapState(['userinfo'])
		},
		onLoad(){
			this.getComments()
			
		},
		onReady(){
			
		},
		onReachBottom() {
		//页面上拉处理事件
			if(this.loading === 'noMore')return
			this.page++
			this.getComments()
			console.log('-----上拉触底');
		},
		methods: {
			goback(){
				uni.switchTab({
					url:'../tabbar/my/my'
				})
			},
			openComment(){
				this.$refs.popup.open()
			},
			close(){
				this.$refs.popup.close()
			},
			submit(){
				console.log('发布');
				if(!this.commentsValue){
					uni.showToast({
						title:'请输入你的回收日志内容',
						icon:"none"
					})
					return
				}
				this.setUpdateComment(this.commentsValue)
				let date=new Date().toISOString().slice(0,10)
				console.log(date);
				var selectedObj={};
				selectedObj={date:date,info:'发布'};
				console.log(selectedObj);
				this.selected.push(selectedObj);
				//console.log(olddata);
			},
			setUpdateComment(content){
				uni.showLoading()
				this.$api.update_comment({
					content
				}).then((res)=>{
					console.log(res);
					uni.hideLoading()
					uni.showToast({
						title:'回收日志发布成功',
						icon:"none"
					})
					this.getComments()
					this.close()
					this.commentsValue=''
				})
			},
			getComments(){
				this.$api.get_comments({
					page:this.page,
					pageSize:this.pageSize
				}).then(res=>{
					console.log(res);
					const {data}=res
					if(data.length===0){
						this.loading='noMore'
						return
					}
					//对象复制，push的时候不会影响之前的数据
					let oldFromData=JSON.parse(JSON.stringify(this.commentsList))
					oldFromData.push(...data)
					this.commentsList=oldFromData
					//console.log(this.commentsList);
				})
			},
			change(e) {
				console.log(e);
			}
		}
	}
</script>

<style lang="scss">
	.huishourizhi{
		display: flex;
		flex-direction: column;
		padding-bottom: 54px;
		
		.arrowleft {
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
				margin-left: 130px;
				margin-top: 40px;	
			}	
		}
		
		.huoshourizhi-journal{
			.journal-title{
				padding: 10px 15px;
				font-size: 16px;
				color: #666;
				border-bottom: 1px solid #f5f5f5;
			}
			.journal-content{
				padding: 0 15px;
				border-top: 1px solid #eee;
			}
		}

		.huishourizhi-bottom{
			position: fixed;
			bottom: 0;
			left: 0;
			display: flex;
			align-items: center;
			width: 100%;
			height: 44px;
			border-top: 1px solid #f5f5f5;
			background-color: #FFFFFF;
			box-sizing: border-box;
			.huishourizhi-bottom_input{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin:0 10px;
				padding: 0 10px;
				width: 100%;
				height: 30px;
				border: 1px solid #ddd;
				border-radius: 5px;
				text{
					font-size: 14px;
					color: #999;
				}
			}
		}
		.popup-wrap{
			background-color: #fff;
			.popup-header{
				display: flex;
				justify-content: space-between;
				font-size: 16px;
				color: #101010;
				border-bottom: 1px solid #f5f5f5;
				.popup-header_item{
					height: 50px;
					line-height: 50px;
					padding: 0 15px;
				}
			}
			.popup-content{
				width: 100%;
				padding: 15px;
				box-sizing: border-box;
				.popup-textarea{
					width: 100%;
					height: 130px;
				}
				.popup-count{
					display: flex;
					justify-content: flex-end;
					font-size: 14px;
					color: #999;
				}
			}
		}
	}
</style>

<template>
	<view class="comments-box">
		<view class="journal-comment">
			<view class="comments-box-left"></view>
			<view class="comments-box-right">
				<view class="comments-box-right_info">
					<view class="title">
						{{comments.operands[0].employee.employee_name}}
					</view>
					<view>{{comments.operands[0].creat_time | formatTime}}</view>
				</view>
				<view class="comments-box-right_content">
					<view>{{comments.operands[0].journal_content}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {parseTime} from '@/utils/index.js'
	export default {
		props: {
			comments: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		filters:{
			formatTime(time){
				return parseTime(time)
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.comments-box {
		display: flex;
		flex-direction: column;

		.journal-comment {
			display: flex;
			align-items: center;
			width: 100%;
			justify-content: space-around;
			margin: 10px 0;

			.comments-box-left {
				width: 20px;
				height: 20px;
				border-radius: 50%;
				background-color: #FBD102;
			}

			.comments-box-right {
				display: flex;
				flex-direction: column;
				width: 250px;
				height: 150px;
				border-radius: 10px;
				border: 3px solid skyblue;
				box-sizing: border-box;

				.comments-box-right_info {
					display: flex;
					flex-direction: column;
					padding-top: 5px;
					padding-left: 5px;
					font-size: 14px;
					line-height: 0.7;
					color: #999;

					.title {
						margin-bottom: 10px;
						font-size: 15px;
						color: #101010;
					}
				}

				.comments-box-right_content {
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					height: 95px;
					margin-top: 8px;
					font-size: 16px;
					padding: 0 5px;
					color: #101010;
				}
			}
		}

	}
</style>

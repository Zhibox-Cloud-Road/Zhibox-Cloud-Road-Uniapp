<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		onLaunch: function() {
			let uniIdToken = uni.getStorageSync('uniIdToken')
			if (uniIdToken) {
				const userid = uni.getStorageSync('userid')
				const uid = uni.getStorageSync('uid')
				console.log(uid)
				this.login(userid) //就是vuex中的login函数中的第二个参数 
			}
			this.$api.get_user({
				user_id: uni.getStorageSync('uid')
			}).then((res) => {
				console.log(res);
				const {
					data
				} = res
				this.$store.dispatch('set_userinfo', data)
			})
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			...mapMutations(['login']),
		}
	}
</script>

<style>
	@import "components/m-icon/m-icon.css";

	/*每个页面公共css */
	.input-group {
		background-color: #ffffff;
		margin-top: 20px;
		position: relative;
	}

	.content {
		position: absolute;
		top: 320px;
		left: 50%;
		transform: translate(-50%);
		width: 330px;
		height: 126px;
	}

	.input-group::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 10px;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
		font-size: 18px;
		line-height: 40px;
	}

	.input-row .title {
		width: 100px;
		padding-left: 15px;
	}

	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 10px;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.btn-row {
		margin-top: 25px;
		padding: 10px;
	}

	button.primary {
		width: 250px;
		background-color: #fbd102;
		color: #0e0e0e;
	}
</style>

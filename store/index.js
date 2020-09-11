import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: false,
		hasLogin: false,
		userId: "",
		userinfo:uni.getStorageSync('USERINFO')||{}
	},
	mutations: {
		SET_USER_INFO(state,userinfo){
			state.userinfo=userinfo
		},
		login(state, userId) {
			state.userId = userId || '新用户';
			state.hasLogin = true;
		},
		logout(state) {
			state.userId = "";
			state.hasLogin = false;
		}
	},
	actions:{
		set_userinfo({commit},userinfo){
			uni.setStorageSync('USERINFO',userinfo)
			commit('SET_USER_INFO',userinfo)
		}
	}
})

export default store

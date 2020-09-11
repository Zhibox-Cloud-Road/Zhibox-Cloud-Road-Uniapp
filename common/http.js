import store from '../store/index.js'
export default function $http(options) {
	const {
		url,
		data
	} = options
	const dataObj={
		user_id: store.state.userinfo._id,//全局 每个页面都传user_id
		...data//解构data
	}
	return new Promise((reslove, reject) => {
		uniCloud.callFunction({
			name: url,
			data:dataObj
		}).then((res) => {
			if (res.result.code === 200) {
				//等于.then
				reslove(res.result)
			} else {
				//catch
				reject(res.result)
			}
		}).catch((err) => {
			reject(err)
		})
	})
}

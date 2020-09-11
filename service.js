//管理账户信息
const USERS_KEY='USERS_KEY';
const STATE_KEY='STATE_KEY';
const getUsers=function(){
	let ret='';
	// 从本地缓存中同步获取指定 key 对应的内容 
	ret=uni.getStorageSync(USERS_KEY)
	if(!ret){
		ret='[]';
	}
	return JSON.parse(ret);
}
const addUser=function(){
	let users=getUser();
	users.push({
		account:userInfo.account,
		password:UserInfo.password
	});
	uni.setStorageSync(USERS_KEY,JSON.stringify(users));
}
export default{
	getUsers,
	addUser
}
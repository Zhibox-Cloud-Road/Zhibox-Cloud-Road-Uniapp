'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
const dbCmd = db.command
exports.main = async (event, context) => {
	const {
		user_id,
		content
	} = event
	let user = await db.collection('uni-id-users').doc(user_id).get()
	//获取用户对象
	user = user.data[0]
	let journalObj = {
		journal_id: getID(5), //回收日志id
		journal_content: content, //回收日志内容
		creat_time: new Date().getTime(), //创建时间
		employee: {
			employee_id: user._id,
			employee_name: user.employee_name
		}
	}
	await db.collection('journal').add({
		comments:dbCmd.unshift(journalObj)
	})
	//返回数据给客户端
	return {
		code:200,
		msg:'数据更新成功'
	}
};
function getID(length){
	return Number(Math.random().toString().substr(3,length)+Date.now()).toString(36)
}
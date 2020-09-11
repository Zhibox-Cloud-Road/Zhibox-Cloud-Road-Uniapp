'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	const {
		user_id,
		pageSize = 5,
		page = 1
	} = event

	const list = await db.collection('journal')
		.aggregate()
		.unwind('$comments')
		.project({
			_id: 0,
			comments: 1
		})
		.replaceRoot({
			newRoot: '$comments'
		})
		.skip(pageSize * (page - 1))
		.limit(pageSize)
		.end()
	//返回数据给客户端
	return {
		code: 200,
		msg: '数据请求成功',
		data: list.data
	}
};

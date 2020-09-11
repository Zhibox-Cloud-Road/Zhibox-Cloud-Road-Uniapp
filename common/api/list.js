import $http from '../http.js'
export const update_feedback = (data) => {
	return $http({
		url: 'update_feedback',
		data
	})
}
export const get_user = (data) => {
	return $http({
		url: 'get_user',
		data
	})
}
export const update_comment = (data) => {
	return $http({
		url: 'update_comment',
		data
	})
}
export const get_comments = (data) => {
	return $http({
		url: 'get_comments',
		data
	})
}
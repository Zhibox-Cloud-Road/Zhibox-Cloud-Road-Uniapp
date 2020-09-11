//批量导出文件
const requireApi = require.context(
	//api目录的相对路径
	'.',
	//是否查询子目录
	false,
	//查询文件的一个后缀
	/.js$/
	
)
let module={}
requireApi.keys().forEach((key,index)=>{
	if(key==='./index.js') return
	console.log(key);
	Object.assign(module,requireApi(key))//合并对象
})
console.log(module);
//导出
export default module
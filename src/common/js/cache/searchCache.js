import storage from 'good-storage'  // localStorage 操作api库

const SEARCH_KEY = '__search__' // 表示 搜索历史内容 的key
const SEARCH_HIS_LENGTH = 10    // 搜索历史 的 容量（条数）

let arr  = [];
export function saveSearch(query){
	let searches = storage.get(SEARCH_KEY,[]) // storage.get(Key,default)：获取对应key的 localStorage信息, 第二个参数为无历史时输出的默认数据

	_insertArr(searches,query,SEARCH_HIS_LENGTH); // 将query插入searches数组，并保持长度为‘SEARCH_HIS_LENGTH’
 	// 通过 _insertArr() 函数 对 历史记录的数组进行 处理

 	storage.set(SEARCH_KEY,searches); //根据改写的 history 数组，使用storage.set() 方法进行本地历史的改写

	return searches  // 最终输出 历史记录的数组
}


export function deleteSearch(query){
	let searches = storage.get(SEARCH_KEY,[]) // 获取历史记录数据
	_deleteArr(searches,query);  // 删除 对应 历史数据
	storage.set(SEARCH_KEY,searches);   //重置 历史记录数据
	return searches // 输出历史记录数据
}

export function loadSearch(){
	let searches = storage.get(SEARCH_KEY,[]) // 获取历史记录数据
	return searches // 输出历史记录数据
}


// 数组 中插入目标项 （如果目标项存在于数组中，把它提前，否则插入数组开头，并且保持数组一定长度）
function _insertArr(arr,val,maxLen){
	const index = arr.findIndex((item)=>{
		return item == val
	})

	if(index==0){return}  // 插入值为 数组第一个 ，直接return

	if(index>0){  // 数组内 存在 val
		arr.splice(index,1) // 先把 数组原来的 val 删除
	}

	arr.unshift(val) // 把 参数 val 放入 数组的 最前头

	if(maxLen && arr.length>maxLen){
		arr.pop()  // 数组清除最后一项 （如果 长度超过maxLen）
	}
}

//从数组中删除 目标数据
function _deleteArr(arr,val){
	const index = arr.findIndex((item)=>{
		return item == val
	})
	if(index>=0){
		arr.splice(index,1)
	}
}







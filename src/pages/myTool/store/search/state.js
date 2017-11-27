/*
	state 文件： 是整个app 共享 的 状态数据属性
*/
import {loadSearch} from 'common/js/cache/searchCache' // 获取searchHistory 数组的初始化函数

const state = {
	searchHistory:loadSearch()
}

export default state
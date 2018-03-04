import * as types from './mutation-types'  //获取 Mutation 的名称键值
//import {saveSearch,deleteSearch,celarSearch} from 'common/js/cache'  // 引入 缓存生成/删除缓存/清空缓存 函数

/*export const deleteSearchHistory = function({commit,state},query){
	commit(types.SET_SEARCH_HISTORY,deleteSearch(query)) // deleteSearch(query) 返回已经删除了query元素的数组
}*/

import {saveSearch,deleteSearch } from 'common/js/cache/searchCache'  // cache/searchCache.js 文件是输出处理搜索历史 的 函数

export const saveSearchHistory = function({commit,state},query){ // 设置（添加）历史信息
	commit(types.SET_SEARCH_HISTORY,saveSearch(query)) //在‘SET_SEARCH_HISTORY’ 的 mutation 中传入 数组
}

export const deleteSearchHistory = function({commit,state},query){ //删除单个历史信息
	commit(types.SET_SEARCH_HISTORY,deleteSearch(query)) //在‘SET_SEARCH_HISTORY’ 的 mutation 中传入 数组
}
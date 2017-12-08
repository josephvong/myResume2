/*
	此文件为 定义 对 store 里面的 状态值进行 更改 的方法
	输出 同步直接修改 state 状态的 方法 集合 ，如果需要修改某个状态，而方法无需异步处理的话，可以直接调用  mutations
	const mutations = {  // 所有方法 的 容器
		[types.SET_SINGER](state,singer){ // 第一个参数为 state（状态属性） ， 第二个参数为 传过来的 singer数据
			state.singer = singer
	}
}
*/
import * as types from './mutation-types' // 把所有 的 mutation-types 常量 引入 定义为 ‘type’ 变量


const mutations = {
	[types.SET_SEARCH_HISTORY](state,history){
		state.searchHistory = history
	}
}



export default mutations











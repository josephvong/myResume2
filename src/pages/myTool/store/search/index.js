//import Vue from 'vue'
//import Vuex from 'vuex'

import * as actions from './actions' // 异步方法 提交 mutations
import mutations from './mutations'  // 同步直接修改 state 状态的 方法 集合

import state from './state'
import * as getters from './getters'

const sample = {
	namespaced:true, // 给此模块添加命名空间
	state : state,
	mutations: mutations,// 添加了命名空间后 mutation 中的方法可以通过 “模块名/方法” 来获取 如：dispatch('sample/fn')
	actions:actions,   // 添加了命名空间,可以通过 “模块名/方法” 来获取 如：commit('sample/fn')
	getters:getters    // 添加了命名空间,可以通过 “模块名/getter” 来获取 如：getters('sample/getter')
}

export default sample

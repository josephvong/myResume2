import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules:{
    user
  },
  getters,
  strict:debug,
  plugins: debug ? [createLogger()] : []
})

export default store
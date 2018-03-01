import {getToken,setToken,removeToken} from 'common/js/cache/localCache'
import {loginAPI, getInfoAPI, signinAPI} from 'api/blogAPI/api' // login接口
const TokenKey = 'USERTOKEN'

const user = {
  state:{
    role:'guest',
    token: getToken(TokenKey)||null,
    name:'游客'
  },

  mutations:{
    SET_TOKEN:(state,token)=>{
      state.token = token
    },
    SET_ROLE:(state,role)=>{
      state.role = role
    },
     
    SET_NAME:(state,name)=>{
      state.name = name
    },

  },

  actions:{
    changeToken({commit, state},token){
      setToken(TokenKey,token)
      commit('SET_TOKEN',token)
    },

    toRemoveToken({commit, state}){
      removeToken(TokenKey)
      commit('SET_TOKEN','')
      commit('SET_ROLE','guest')
      commit('SET_NAME','游客')
    },


    loginByUsername({commit, state},userInfo){  
      return loginAPI(userInfo).then((res)=>{
        if(res.success){
          setToken(TokenKey,res.token)
          commit('SET_TOKEN',res.token)
          return Promise.resolve(res)
        }else{ 
          return Promise.reject(res) // 没有成功，用reject 捕捉res
        }
      }).catch((err)=>{
        return Promise.reject(err)
      }) 
    }, 

    getInfoByToken({commit,state},token){
      return getInfoAPI(token).then((res)=>{ 
        commit('SET_NAME',res.name);
        commit('SET_ROLE',res.role); 
        return Promise.resolve(res)
      }).catch((err)=>{
        return Promise.reject(err)
      })
    }
  }
}

export default user
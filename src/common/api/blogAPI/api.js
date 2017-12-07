import axios from 'axios'

export function setupAPI(){
  return axios.get('api/setup').then((res)=>{
    return Promise.resolve(res.data)
  }).catch((err)=>{
    console.log(err)
  })
}

export function loginAPI(obj){
  return axios.post('api/login',{
    ...obj 
  }).then((res)=>{
    return Promise.resolve(res.data)
  }).catch((err)=>{
    return Promise.reject(err)
  })
}

export function signinAPI(obj){
  return axios.post('api/signin',{
    ...obj 
  }).then((res)=>{
    return Promise.resolve(res.data)
  }).catch((err)=>{
    return Promise.reject(err)
  })
}

export function getInfoAPI(token){
  return axios.post('api/info',{
    token:token 
  }).then((res)=>{
    return Promise.resolve(res.data)
  }).catch((err)=>{
    return Promise.reject(err)
  })
}
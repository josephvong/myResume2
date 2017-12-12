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

//=============文章发布等api================
export function articlePostApi(article){
  return axios.post('api/article_post',{
    title:article.title,
    content:article.content,
    art_id:article.art_id, 
    thumb:article.thumb,
    time:article.time
  }).then((res)=>{
    return Promise.resolve(res.data)
  }).catch((err)=>{
    return Promise.reject(err)
  })
}

export function articleGetApi(){
  return axios.get('api/article_all').then((res)=>{
    return Promise.resolve(res.data)
  }).catch((err)=>{
    return Promise.reject(err)
  })
}
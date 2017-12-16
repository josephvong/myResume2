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
// 文章发布
export function articlePostApi(article){
  return axios.post('api/article_post',{
    title:article.title,
    desc:article.desc,
    content:article.content,
    art_id:article.art_id, 
    thumb:article.thumb,
    time:article.time,
    tags:article.tags
  }).then((res)=>{
    return Promise.resolve(res.data)
  }).catch((err)=>{
    return Promise.reject(err)
  })
}

//单篇文章获取
export function articleReadApi(article_id){
  return axios.post('api/article_get',{
    article_id:article_id
  }).then((res)=>{
    return Promise.resolve(res.data)
  }).catch((err)=>{
    return Promise.reject(err)
  })
}


// 文章列表获取
export function articleGetApi(){
  return axios.get('api/article_all').then((res)=>{
    return Promise.resolve(res.data)
  }).catch((err)=>{
    return Promise.reject(err)
  })
}

//==================文章标签获取==========================
export function tagsGetApi(){
  return axios.get('api/article_tags').then((res)=>{
    let arr = res.data.tags.map((item)=>{
      return item.tag_name
    })
    return Promise.resolve(arr)
  }).catch((err)=>{
    return Promise.reject(err)
  })
}
import axios from 'axios'

// 层级联动菜单 api
export function getTagData(){
  return axios.request('https://conf.9kacha.com/static/all_wine_conditems.json',{
    responseType: 'json',
  }).then((res)=>{ //数据链接成功
     return Promise.resolve(res)
  })
}
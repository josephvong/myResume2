import axios from 'axios'
export function fetchFilterData(obj){
  /*if(!Cookies.get('condsession')){
    Cookies.set('condsession',guid(),{ expires: 86400 }) // 设置1天到期的 cookies
  }*/
  let params = new URLSearchParams();
  let data = {rowSearch:obj}
  //console.log(Cookies.get('condsession'));
  params.append('jparams',JSON.stringify(data)); // 转换传参结构params,
  return axios.post('https://conf.9kacha.com/util/getCondItemApi.php',params/*,{
     headers:{  'Condsession': Cookies.get('condsession')}
    }*/
  )
  .then((res)=>{ //数据链接成功
    return Promise.resolve(res)
  })
}


export function getObjSearchResult(searchData,pageIndex,isBuyOnly='1',is_correct=1,is_alias=1){

  let params = new URLSearchParams();
  params.append('dtype',1);
  let rowSearch = Object.assign({},{buyable:isBuyOnly?'1':null},searchData);

  let isMix = 0;//searchData.obj && searchData.obj['isMix']?1:0;  // 判断 是否有 混酿选项 被选中

  let data = {
    //wordStr:searchData.text||'',
    size:10,
    offset:pageIndex*10-10,
    format_rd:'search-k-w',
    is_correct:is_correct, // 默认开启 错误匹配
    is_alias:is_alias, // 默认开启别名适配
    grape_blend_flag:isMix,  // 默认不是混酿
    rowSearch:rowSearch
  }
  params.append('jparams',JSON.stringify(data)); // 转换传参结构
  return axios.post(`searchApi/get_data.php?${Math.random(10000)}`,params).then((res)=>{ //数据链接成功

    if(!res.data){
      return Promise.reject('错误：服务器没有返回数据')
    }else{
      return Promise.resolve(res.data)
    }
  }).catch((err)=>{
    return Promise.reject(err)
  })
}



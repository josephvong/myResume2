import axios from 'axios'

// 输入框关联词 接口
export function getWordSuggest(value){
	let params = new URLSearchParams();
	params.append('dtype',2)
  let data = {wordStr:value}
  params.append('jparams',JSON.stringify(data)); // 转换传参结构

  return axios.post(`searchApi/get_data.php?${Math.random(10000)}`,params).then((res)=>{ //数据链接成功
     return Promise.resolve(res.data)
  }).catch((err)=>{
    console.log(err);
  })
}

// 字段搜索接口
export function getTxtSearchResult(searchText,pageIndex,isBuyOnly=false,is_correct=1,is_alias=1){

  let params = new URLSearchParams();
  params.append('dtype',1);
  //let rowSearch = Object.assign({},{buyable:isBuyOnly?'1':null},searchData.obj);

  //let isMix = searchData.obj && searchData.obj['isMix']?1:0;  // 判断 是否有 混酿选项 被选中

  let data = {
    wordStr:searchText,
    size:10,
    offset:pageIndex*10-10,
    format_rd:'search-k-w',
    is_correct:is_correct, // 默认开启 错误匹配
    is_alias:is_alias, // 默认开启别名适配
    grape_blend_flag:1,  // 默认不是混酿
    rowSearch:{}//rowSearch
  }
  params.append('jparams',JSON.stringify(data)); // 转换传参结构
  return axios.post(`searchApi/get_data.php?${Math.random(10000)}`,params).then((res)=>{ //数据链接成功
    //console.log(res);//测试输出
    if(!res.data){
      return Promise.reject('错误：服务器没有返回数据')
    }else{
      return Promise.resolve(res.data)
    }
  }).catch((err)=>{
    return Promise.reject(err)
  })
}
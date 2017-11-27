import jsonp from 'common/js/jsonP' // 引入jsonP 库

export function imgDataFetch(pageIndex){
  const url = 'http://www.wookmark.com/api/json/popular';
  const data = {page:pageIndex} 
  console.log(data)
  return jsonp(url,data)
}
import Cookies from 'js-cookie' 

export function getToken(tokenKey){
  return Cookies.get(tokenKey)
}

export function setToken(tokenKey,token){
  return Cookies.set(tokenKey,token)
}

export function removeToken(tokenKey){
  return Cookies.remove(TokenKey)
}

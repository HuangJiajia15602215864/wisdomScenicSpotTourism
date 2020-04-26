import { fetchData } from './ajax'
//登录
export function login(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/login', msg, type, callFunc)
    }
    return fetchData('/login', msg, type)
}
//注册
export function register(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/register', msg, type, callFunc)
    }
    return fetchData('/register', msg, type)
}

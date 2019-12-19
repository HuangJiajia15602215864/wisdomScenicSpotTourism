import { fetchData } from './ajax'
//办件详情
//查看办件信息
export function interGetControlInfo(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/control/getControlInfo/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/control/getControlInfo/query.v', msg, type)
}
//获取办件材料列表接口（材料分离）
export function interStuffList(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/control/stuffList/1/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/control/stuffList/1/query.v', msg, type)
}
//获取办件已完成环节信息 
export function interControlLink(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/control/controlLink/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/control/controlLink/query.v', msg, type)
}
//获取通知书列表接口
export function interNoticeList(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/message/noticeList/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/message/noticeList/query.v', msg, type)
}
//获取通知书详情接口
export function interNotice(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/message/notice/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/message/notice/query.v', msg, type)
}

//获取办件表单列表接口(表单分离)
export function interFormList(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/control/formList/1/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/control/formList/1/query.v', msg, type)
}

// 撤回已提交办件接口
export function interContWithdraw(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/control/contWithdraw/update.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/control/contWithdraw/update.v', msg, type)
}
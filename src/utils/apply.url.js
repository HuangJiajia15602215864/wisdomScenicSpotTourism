import { fetchData } from './ajax'
//登录页面
export function interOutnetConfig(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/ApprNetInterface/api/sys/outnetConfig/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprNetInterface/api/sys/outnetConfig/query.v', msg, type)
}
//信息补全
//获取网厅用户信息接口
export function interOutUserInfo(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/ApprNetUserInterface/api/user/outUserInfo/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprNetUserInterface/api/user/outUserInfo/query.v', msg, type)
}
//更新网厅用户信息接口
export function interUpdateUserInfo(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/ApprNetUserInterface/api/user/outUserInfo/1/update.v', msg, type, callFunc)
    }
    return fetchData('/ApprNetUserInterface/api/user/outUserInfo/1/update.v', msg, type)
}
//业务选择
//获取审批事项配置信息接口
export function interItemConfig(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/apprItem/itemConfig/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/apprItem/itemConfig/query.v', msg, type)
}
//获取事项的业务分类列表接口(审批3.0)
export function interBussinessList(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/apprItem/bussinessList/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/apprItem/bussinessList/query.v', msg, type)
}
//获取事项情景式题目列表
export function interQuestionList(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/scene/questionList/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/scene/questionList/query.v', msg, type)
}
//验证用户事项申报权限
export function interValidateItem(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/apprItem/validateItem/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/apprItem/validateItem/query.v', msg, type)
}
//获取用户绑定关系列表
export function interUserBindList(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/ApprNetUserInterface/api/user/userBindList/query.v', msg, type, callFunc)
        // return fetchData('/CommonService/api/user/userBindList/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprNetUserInterface/api/user/userBindList/query.v', msg, type)
    // return fetchData('/CommonService/api/user/userBindList/query.v', msg, type)
}
//信息自检
//获取地区列表（跨层级）
export function interAreaList(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/area/areaList/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/area/areaList/query.v', msg, type)
}
//获取某个业务分类或事项的配置信息接口
export function interBussinessConfig(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/apprItem/bussinessConfig/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/apprItem/bussinessConfig/query.v', msg, type)
}
// 根据省的统一项目代码验证并下拉项目信息
export function checkPjoject(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/project/checkPjoject.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/project/checkPjoject.v', msg, type)
}
// 通过项目统一编码获取项目信息
export function getProjectInfo(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/project/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/project/query.v', msg, type)
}
// 获取事项项目信息显示配置
export function getProjectDisplayType(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/apprItem/isUseManageArea/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/apprItem/isUseManageArea/query.v', msg, type)
}
//启动办件接口(材料分离)
export function interStartControl2(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/control/startControl/2/add.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/control/startControl/2/add.v', msg, type)
}
//根据用户获取绑定企业信息
export function interHandlerInfo(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/ApprNetUserInterface/api/user/bundUserInfo/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprNetUserInterface/api/user/bundUserInfo/query.v', msg, type)
}
//情景式事项通过选项结果查询材料列表
export function interSceneStuffList(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/scene/stuffList/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/scene/stuffList/query.v', msg, type)
}
//表单填写
//获取办件表单列表接口(表单分离)
export function interFormList(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/control/formList/1/query.v', msg, 'get', callFunc)
    }
    return fetchData('/CommonService/api/control/formList/1/query.v', msg, 'get')
}
//保存业务表单接口(表单分离)
export function interFormData2(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/control/formData/2/save.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/control/formData/2/save.v', msg, type)
}
//材料上传
//获取办件材料列表接口（材料分离）
export function interStuffList(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/control/stuffList/1/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/control/stuffList/1/query.v', msg, type)
}
//获取办件材料补正意见接口
export function interApprIdea(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/control/apprIdea/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/control/apprIdea/query.v', msg, type)
}
// 根据办件流水号查看办件信息
export function getControlInfo(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/control/getControlInfo/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/control/getControlInfo/query.v', msg, type)
}
//电子材料库附件上传接口
export function interLicense(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/attach/license/add.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/attach/license/add.v', msg, type)
}
//证照库附件上传接口
export function uploadLicense(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/attach/electronicLicense/add.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/attach/electronicLicense/add.v', msg, type)
}
//复制文件信息，网厅上传材料关联保存到材料库
export function interStufftree(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/ApprLicenseInterface/api/stufftree/saveFile.v', msg, type, callFunc)
    }
    return fetchData('/ApprLicenseInterface/api/stufftree/saveFile.v', msg, type)
}
//办件附件删除接口
export function interDelete(data, type, callFunc) {
    var msg = data;
    type = 'get'
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/attach/delete.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/attach/delete.v', msg, type)
}
//办件附件下载接口
export function interDownLoad(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/attach/downLoad/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/attach/downLoad/query.v', msg, type)
}
//获取暂存办件的步骤信息接口
export function interControlStep(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/control/controlStep/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/control/controlStep/query.v', msg, type)
}
//更新暂存办件的步骤信息接口
export function interControlStepUpdate(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/control/controlStep/update.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/control/controlStep/update.v', msg, type)
}
//提交办件(材料分离)
export function interSubmitControl2(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/control/submitControl/2/update.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/control/submitControl/2/update.v', msg, type)
}
//上传附件接口
export function interFormData(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/attach/formData/add.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/attach/formData/add.v', msg, type)
}

// 获取审批事项办事指南信息接口(审批3.0)
export function interGetItemInfo(data, type, callFunc) {
    return fetchData('/CommonService/api/apprItem/itemInfo/2/query.v', data, type, callFunc)
}


// 电子材料库上传--获取指定目录下的文件以及文件夹信息
export function queryStufftree(data, type, callFunc) {
    return fetchData('/ApprStuffInterface/api/stufftree/getFileByUser.v', data, type, callFunc)
}

//电子材料库--根据文件id获取附件信息
export function queryAttachInfo(data, type, callFunc) {
    return fetchData('/ApprStuffInterface/api/stufftree/queryAttachInfo.v', data, type, callFunc)
}

// 证照库上传--获取指定目录下的文件以及文件夹信息
export function queryLicensetree(data, type, callFunc) {
    return fetchData('/ApprLicenseInterface/api/exchange/license/panyu/holder.v', data, type, callFunc)
}

//校验统一项目编码
export function queryProCodeInfo(data, type, callFunc){
    return fetchData('/tybm/check!query2.action', data, type, callFunc)
}

// 获取用户的快递地址信息列表
export function getExpressAddrList(data, type, callFunc) {
    return fetchData('/CommonService/api/express/getExpressAddrList/query.v', data, type, callFunc)
}

// 新增快递地址信息
export function addExpressAddr(data, type, callFunc) {
    return fetchData('/CommonService/api/express/addExpressAddr/add.v', data, type, callFunc)
}

// 更新快递地址信息
export function updateExpressAddr(data, type, callFunc) {
    return fetchData('/CommonService/api/express/updateExpressAddr/update.v', data, type, callFunc)
}

// 删除快递地址信息
export function delExpressAddr(data, type, callFunc) {
    return fetchData('/CommonService/api/express/delExpressAddr/delete.v', data, type, callFunc)
}

// 设置为默认快递地址
export function setDefaultExpressAddr(data, type, callFunc) {
    return fetchData('/CommonService/api/express/setDefaultExpressAddr/update.v', data, type, callFunc)
}

// 获取审批事项快递配置列表接口
export function expressList(data, type, callFunc) {
    return fetchData('/CommonService/api/apprItem/expressList/query.v', data, type, callFunc)
}

// 生成快递订单接口
export function expressInfo(data, type, callFunc) {
    return fetchData('/CommonService/api/express/expressInfo/add.v', data, type, callFunc)
}

// 获取外网业务树相关节点信息接口
export function interfaceQueryTree(data, type, callFunc) {
    return fetchData('/CommonService/api/sys/treeChildren/query.v', data, type, callFunc)
}

// 获取公共材料库列表接口
export function interfacePubStuffList(data, type, callFunc) {
    return fetchData('/ApprStuffInterface/api/commonstuff/stuff/stuffAppliedList.v', data, type, callFunc)
}

// 查询办件信息
export function interfaceGetControlSeqInfo(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/control/getControlInfo/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/control/getControlInfo/query.v', msg, type)
}

// 获取表单源信息接口
export function interfaceFormSource(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/common/minstone/form/getFormInfo', msg, type, callFunc)
    }
    return fetchData('/common/minstone/form/getFormInfo', msg, type)
}

// 生成pdf （番禺个性化接口）
export function interfaceCreatePdf(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonServiceSpecial/api/attach/saveAttachInfo/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonServiceSpecial/api/attach/saveAttachInfo/query.v', msg, type)
}

// 查询办件附件列表接口
export function interfaceGetAttachInfo(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/attach/query.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/attach/query.v', msg, type)
}

// 查询办件附件列表接口
export function interfaceGetMskData(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/tlbServer/HttpChannelServlet', msg, type, callFunc)
    }
    return fetchData('/tlbServer/HttpChannelServlet', msg, type)
}

// 办件附件复用接口
export function attachReuse(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/attachReuse/add.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/attachReuse/add.v', msg, type)
}

// 初始化jsSdk接口
export function weChatSDK(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/ApprWxInterface/api/wxUtil/jsSdkParam/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprWxInterface/api/wxUtil/jsSdkParam/query.v', msg, type)
}
// 微信拍照上传接口
export function weChatUploadPhoto(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/CommonService/api/attach/weixin/add.v', msg, type, callFunc)
    }
    return fetchData('/CommonService/api/attach/weixin/add.v', msg, type)
}

// 补正上传完之后更新
export function correctionUpdate(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('CommonService/api/control/stuffEdit/update.v', msg, type, callFunc)
    }
    return fetchData('CommonService/api/control/stuffEdit/update.v', msg, type)
}
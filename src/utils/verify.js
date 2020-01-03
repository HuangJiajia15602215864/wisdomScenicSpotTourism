// 验证身份证
export function isCardID (id) {
  const format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/
  // 号码规则校验
  if (!format.test(id)) {
    return false
  }
  // 区位码校验
  // 出生年月日校验   前正则限制起始年份为1900
  const year = id.substr(6, 4) // 身份证年
  const month = id.substr(10, 2) // 身份证月
  const date = id.substr(12, 2) // 身份证日
  const time = Date.parse(month + '-' + date + '-' + year) // 身份证日期时间戳date
  const nowTime = Date.parse(new Date()) // 当前时间戳
  const dates = (new Date(year, month, 0)).getDate() // 身份证当月天数
  if (time > nowTime || date > dates) {
    return false
  }
  // 校验码判断
  const c = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2] // 系数
  const b = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'] // 校验码对照表
  const idArray = id.split('')
  let sum = 0
  for (let k = 0; k < 17; k++) {
    sum += parseInt(idArray[k]) * parseInt(c[k])
  }
  if (idArray[17].toUpperCase() !== b[sum % 11].toUpperCase()) {
    return false
  }
  return true
}

// 账号和密码，8~32位数字+英文
export function isPwdOrAccount (id) {
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,32}$/
  if (reg.test(id)) {
    return true
  }
  return false
}


// 验证手机号
export function isPhone (value) {
  const reg = /^1[34578]\d{9}$/
  if (reg.test(value)) {
    return true
  } else {
    return false
  }
}

// 验证姓名
export function isName (value) {
  const reg = /^[\u4e00-\u9fa5]{2,6}$/
  if (reg.test(value)) {
    return true
  } else {
    return false
  }
}

// 验证是否为空
export function isNoValue (value) {
  if (typeof value === 'string') {
    if (!value) {
      return true
    } else {
      return false
    }
  } else {
    for (let i = 0; i < value.length; i++) {
      if (isNoValue(value[i])) {
        return true
      }
    }
    return false
  }
}

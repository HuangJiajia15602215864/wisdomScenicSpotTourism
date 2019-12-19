// 区分身份证位数及验证
function isTrueValidateCodeBy18IdCard (aIdCard) {
    var sum = 0; // 声明加权求和变量
    var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]; // 加权因子;
    var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // 身份证验证位值，10代表X;
    if (aIdCard[17] === 'X') {
        aIdCard[17] = 10; // 将最后位为x的验证码替换为10方便后续操作
    }
    for (var i = 0; i < 17; i++) {
        sum += Wi[i] * aIdCard[i]; // 加权求和
    }
    var valCodePosition = sum % 11; // 得到验证码所位置
    if (aIdCard[17] === ValideCode[valCodePosition]) {
        return true;
    }
    return false;
}

function isValidityBrithBy18IdCard (idCard18) {
    var year = idCard18.substring(6, 10);
    var month = idCard18.substring(10, 12);
    var day = idCard18.substring(12, 14);
    var tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 这里用getFullYear()获取年份，避免千年虫问题
    if (
        tempDate.getFullYear() !== parseFloat(year) ||
        tempDate.getMonth() !== parseFloat(month) - 1 ||
        tempDate.getDate() !== parseFloat(day)
    ) {
        return false;
    }
    return true;
}

function isValidityBrithBy15IdCard (idCard15) {
    var year = idCard15.substring(6, 8);
    var month = idCard15.substring(8, 10);
    var day = idCard15.substring(10, 12);
    var tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
    if (
        tempDate.getYear() !== parseFloat(year) ||
        tempDate.getMonth() !== parseFloat(month) - 1 ||
        tempDate.getDate() !== parseFloat(day)
    ) {
        return false;
    }
    return true;
}
/**
 *  正则校验证件类型
 * n: 证件类型
 * value: 证件数值
 * callback: 回调函数
 * errors:错误提示
 */
export function getCardType (n, value, callback, errors) {
    switch (n) {
        case '10':
            var ret = false;
            if (value.length === 15) {
                ret = isValidityBrithBy15IdCard(value);
            } else if (value.length === 18) {
                var aIdCard = value.split(''); // 得到身份证数组
                if (
                    isValidityBrithBy18IdCard(value) &&
                    isTrueValidateCodeBy18IdCard(aIdCard)
                ) {
                    ret = true;
                }
            }
            if (ret === false) {
                errors.push('请填写正确的身份证！');
            }
            break;
        case '11':
            var rel11 = /^[0-9a-zA-Z]{4,15}$/;
            if (rel11.test(value) === false) {
                errors.push('请填写正确的军官证！');
            }
            break;
        case '12':
            var rel12 = /^[0-9a-zA-Z]{4,15}$/;
            if (rel12.test(value) === false) {
                errors.push('请填写正确的士兵证！');
            }
            break;
        case '13':
            var rel13 = /^[0-9a-zA-Z]{8,9}$/;
            if (rel13.test(value) === false) {
                errors.push('请填写正确的警官证！');
            }
            break;
        case '14':
            var rel14 = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/;
            if (rel14.test(value) === false) {
                errors.push('请填写正确的港澳居民来往内地通行证！');
            }
            break;
        case '15':
            var rel15 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if (rel15.test(value) === false) {
                errors.push('请填写正确的台湾居民来往大陆通行证！');
            }
            break;
        case '16':
            var rel16 = /^((\s?[A-Za-z])|([A-Za-z]{2}))\d{6}((\([0−9aA]\))|(\([0-9aA]\)))$/;
            if (rel16.test(value) === false) {
                errors.push('请填写正确的香港身份证！');
            }
            break;
        case '17':
            var rel17 = /^[1|5|7][0-9]{6}\([0-9Aa]\)$/;
            if (rel17.test(value) === false) {
                errors.push('请填写正确的澳门身份证！');
            }
            break;
        case '18':
            var rel18 = /^[A-KM-QT-XZ]{1}[0-9]{9}$/;
            if (rel18.test(value) === false) {
                errors.push('请填写正确的台湾身份证！');
            }
            break;
        case '19':
            var rel19 = /^[0-9a-zA-Z]{4,20}$/;
            if (rel19.test(value) === false) {
                errors.push('请填写正确的退伍证！');
            }
            break;
        case '20':
            var rel20 = /^[0-9a-zA-Z]{4,20}$/;
            if (rel20.test(value) === false) {
                errors.push('请填写正确的护照！');
            }
            break;
        case '21':
            var rel21 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if (rel21.test(value) === false) {
                errors.push('请填写正确的驾照！');
            }
            break;
        case '90':
            var rel90 = /^[0-9a-zA-Z]{4,20}$/;
            if (rel90.test(value) === false) {
                errors.push('请填写正确的证件号码！');
            }
            break;
    }
    if (errors.length) {
        callback(errors);
    }
}

/**
 * 获取链接上参数值
 * name ：链接上相关的参数名
 */
export function getParams (name) {
    // var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    // var params = window.location.search || window.location.href.split('?')[1];
    // var r = params.match(reg);
    // if (r !== null) return unescape(r[2]);
    // return null;
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var params = window.location.search || window.location.href.split('?')[1];
    if (params) {
        var r = params.match(reg);
        if (r !== null) {
            return unescape(r[2]);
        } else {
            return null
        }
    } else {
        return null
    }
}

// 验证手机号
export function isPhone (value) {
    var reg = /^1[34578]\d{9}$/
    if (reg.test(value)) {
        return true
    } else {
        return false
    }
}

// 验证统一社会信用代码，
export function isCreditCode (credNum) {
    let ret = false;
    if (credNum.length === 18) {
        var reg = /^([0-9ABCDEFGHJKLMNPQRTUWXY]{2})([0-9]{6})([0-9A-Z]{8})([0-9|X]{1})([0-9ABCDEFGHJKLMNPQRTUWXY]{1})$/;
        if (reg.test(credNum)) {
            var str = '0123456789ABCDEFGHJKLMNPQRTUWXY'
            var ws = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28]
            let sum = 0
            for (let i = 0; i < 17; i++) {
                sum += str.indexOf(credNum.charAt(i)) * ws[i]
            }
            let c18 = 31 - (sum % 31)
            if (c18 === 31) {
                c18 = '0'
            }

            if (str.charAt(c18) === credNum.charAt(17)) {
                ret = true
            }
        }
    }
    return ret;
}

// 获取cookie
export function getCookie (name) {
    var arr;
    var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    if ((arr = document.cookie.match(reg))) {
        return decodeURI(arr[2]);
    } else {
        return null;
    }
}

// 设置cookie
export function setCookie (cName, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = cName + '=' + value +
        ((expiredays === null) ? '' : ';expires=' + exdate.toGMTString()) + ';path=/'
}

/**
 * 获取手机系统类型
 * 返回true 为ios
 * 返回false 为 安卓
 */

export function isIos () {
    let u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
        return 'ADR';
    }
    if (u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1) {
        return 'IOS';
    }
}


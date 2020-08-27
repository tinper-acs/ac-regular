"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = {
    "regularTree": [{
        "name": "基础校验符号",
        "code": "0",
        "id": "0",
        "child": [{ "name": "/", "code": "/", "id": "0-1" }, { "name": "*", "code": "*", "id": "0-2" }, { "name": "$", "code": "$", "id": "0-3" }, { "name": "%", "code": "%", "id": "0-4" }]
    }, {
        "name": "数学表达式校验",
        "code": "1",
        "id": "1",
        "child": [{ "name": "至少n位的数字", "code": /^\d{n,}$/, "id": "1-1", "memo": "6位以上数字，^\d{6,}$" }, { "name": "零和非零开头的数字", "code": /^(0|[1-9][0-9]*)$/, "id": "1-2", "memo": "" }, { "name": "非零开头的最多带两位小数的数字", "code": /^([1-9][0-9]*)+(\.[0-9]{1,2})?$/, "id": "1-3", "memo": "" }, { "name": "非零的负整数", "code": /^-[1-9]\d*$/, "id": "1-4", "memo": "" }, { "name": "浮点数", "code": /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/, "id": "1-5", "memo": "" }]
    }, {
        "name": "字符串校验",
        "code": "2",
        "id": "2",
        "child": [{ "name": "汉字", "code": /^[\u4e00-\u9fa5]{0,}$/, "id": "2-1", "memo": "" }, { "name": "英文和数字", "code": /^[A-Za-z0-9]+$/, "id": "2-2", "memo": "" }, { "name": "数字、26个英文字母或下划线组成", "code": /^\w+$/, "id": "2-3", "memo": "" }, { "name": "中文、英文、数字包括下划线", "code": /^[\u4E00-\u9FA5A-Za-z0-9_]+$/, "id": "2-4", "memo": "" }]
    }, {
        "name": "账号密码校验",
        "code": "3",
        "id": "3",
        "child": [{ "name": "帐号", "code": /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/, "id": "3-1", "memo": "字母开头，5-16字节，允许字母数字下划线" }, { "name": "密码", "code": /^[a-zA-Z]\w{5,17}$/, "id": "3-2", "memo": "字母开头，长度6~18，含字母、数字和下划线" }, { "name": "强密码", "code": /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,10}$/, "id": "2-3", "memo": "大小写和数字组合，不使用特殊字符，长度 8~10" }, { "name": "强密码", "code": /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/, "id": "2-4", "memo": "含大小写和数字组合，可使用特殊字符，长度8-10" }]
    }, {
        "name": "联系方式校验",
        "code": "4",
        "id": "4",
        "child": [{ "name": "手机号码", "code": /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/, "id": "4-1", "memo": "1568311xxxx" }, { "name": "国内电话号码", "code": /\d{3}-\d{8}|\d{4}-\d{7}/, "id": "4-2", "memo": "" }, { "name": "电话号码", "code": /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/, "id": "4-3", "memo": "支持手机号，3-4位区号，7-8位直播号码，1-4位分机号" }]
    }, {
        "name": "个人身份校验",
        "code": "5",
        "id": "5",
        "child": [{ "name": "身份证号", "code": /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/, "id": "5-1", "memo": "(15位、18位数字)，最后一位是校验位，可能为数字或字符X" }, { "name": "QQ号", "code": /[1-9][0-9]{4,11}/, "id": "5-2", "memo": "腾讯QQ号从10000开始" }, { "name": "邮政编码", "code": /[1-9]\d{5}(?!\d)/, "id": "5-3", "memo": "中国邮政编码为6位数字" }]
    }, {
        "name": "网站信息校验",
        "code": "6",
        "id": "6",
        "child": [{ "name": "Email地址", "code": /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, "id": "6-1", "memo": "" }, { "name": "域名", "code": /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/, "id": "6-2", "memo": "" }, { "name": "InternetURL", "code": /((http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?)/, "id": "6-3", "memo": "" }, { "name": "IP地址", "code": /^((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))$/, "id": "6-4", "memo": "" }]
    }]

};
module.exports = exports["default"];
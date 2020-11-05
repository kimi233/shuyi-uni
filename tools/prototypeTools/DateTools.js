/**
 * 时间格式化函数
 * @参数 format
 * @返回 String
 * yyyy:4位年， MM：月  dd：日  HH：时   mm：分  ss:秒
 * 例子 console.log(time.format("yyyy年 MM月 dd日  HH点mm分ss秒"));
 */

Date.prototype.format = function (format) {
    let o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "H+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),//季度
        "f+": this.getMilliseconds(),//毫秒
    };
    if (/(y+)/.test(format))
        format = format.replace(RegExp.$1, this.getFullYear() + "")
            .substr(4 - RegExp.$1.length);
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
    return format;
};
/**
 * 隐藏部分字符串
 * @参数 String char 替换的目标字符串
 * @参数 Number start 开始被替换的位置,从0开始，可以是一个负数
 * @参数 Number end 结束位置，可以是一个负数
 * @参数 Number count 填充多个字符，默认为end - start之间的差距数
 * @返回 String
 * "12345678910".hide("*",3,-2)  //"123******10"
 */

String.prototype.hide = function (char,start,end,count){
    //初始化参数,start无效使用0，end无效使用字符串长度
    end = isNaN(+end)? this.length : +end
    start = isNaN(+start)? 0 : +start
    count = +count
    //参数负值矫正
    end<0 && (end+=this.length)
    start<0 && (start+=this.length)
    count = isNaN(count)&&(end - start)
    //正则替换
    let reg = `^(.{${start}}).{${count}}(.*)$`
    return this.replace(new RegExp(reg),`$1${char.repeat(count)}$2`)
}

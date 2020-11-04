import Mock from "mockjs"
function settime(data,success=true,statusCode=200) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				success,
				data,//数据
				statusCode,//状态码
				header: {
					"Content-Type": "application/json",
					"Transfer-Encoding": "chunked",
					"Date": "Wed, 04 Nov 2020 09:19:49 GMT",
					"Keep-Alive": "timeout=60",
					"Connection": "keep-alive",
				},
				cookies: [],
				errMsg: "request:ok",
			});
		}, 1000);
	});
}
/*
* 常用的mock占位符 解释
@cname 中文人名
@id 身份证id
@title 中文title
@city 中文城市
@ip ip 地址
@email email
@url url地址
@csentence(1,5) 生成1到5个字的中文句子
@cparagraph 生成中文段落
@string(11) 输出11 个字符长度的字符串
@float(0,10) 0 到 10 的浮点数
@integer(60,70) 60 到 70 之间的整数
@boolean boolean 类型 true,false*/

export default{
	getTestDate:(params) => settime(
		Mock.mock({
			// 属性 list 的值是一个数组，其中含有 10 个元素
			'list|10': [{
				// 属性 id 是一个自增数，起始值为 1，每次增 1
				'id|+1': 1,
				//属性title是一个字符串，为2-10位随机中文
				"title": "@csentence(2,10)",
				//一张图片，大小，背景色，内容（也可以将图片存放到网上然后按名字随机获取）
				"image": Mock.Random.image('200x100', '#02adea', "文字")
			}]
		})
	)
}

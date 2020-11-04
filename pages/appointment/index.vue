<template>
		<view>
			<button @click="uploadImage">选取图片识别</button>
			<view class="vvv">
				<text v-for="(item,index) in content" :key="index" >{{item.words}}</text>
			</view>
		</view>
</template>
 
<script>
	export default {
		data(){
			return{
				src:'',
				content:[]
			}
		},
		methods:{
			uploadImage(){  //   选取照片，进行OCR识别
				uni.chooseImage({ 
					count:1,//默认9
					sizeType:['original', 'compressed'],//可以指定是原图还是压缩图，默认二者都有
					success: (res)=> {
							uni.showLoading({  
								title: '正在识别中...'  ,
							});
							this.src = res.tempFilePaths[0];  //后面还能用到 src 暂且留着
							
							uni.uploadFile({
							            url: 'http://10.100.39.201/user/hello', //仅为示例，非真实的接口地址
							            filePath: res.tempFilePaths[0],
							            name: 'file',
							            formData: {
							                'user': 'test'
							            },
							            success: (uploadFileRes) => {
							                console.log(uploadFileRes.data);
							            }
							        });
							console.log(this.src)
							// 下面进行转码
							/* uni.getFileSystemManager().readFile({
								filePath:res.tempFilePaths[0], //选择图片返回的相对路径
								encoding:'base64',//编码格式
								success:(res)=>{  //成功回调页面
									uni.request({
									  url: 'https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic?access_token=【你的access_token】',
									  data:{
										image:res.data,
										language_type:'ENG', //识别语言类型，默认中英文结合
										detect_direction:true ,//检测图像朝向
									  },
									  method:'POST',
									  header: {
										'Content-Type': 'application/x-www-form-urlencoded'
									  },
									  success :(res)=> {
											this.content = res.data.words_result
											uni.hideLoading();  //把正在加载中隐藏
											console.log(res.data)
									  }
									})
								}
							}); */
						}
				})
			}

		}
	}
</script>
 
<style>
	.vvv{
		width: 99%;
		border: 2px dashed #eeeeee; 
		height: 700upx;
		margin: 30upx 0 0 0;
	}
</style>
 
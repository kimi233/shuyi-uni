<template>
	<view class="all">
		<view class="show">
			<view class="btn">
			</view>
			<view class="tx">
				<textarea class="te" placeholder="这一刻的想法......" maxlength="200"></textarea>
			</view>
		</view>
		<view class="im">
			<!-- <view class="img">
				<image class="wa" src="../../static/images/after.jpg"></image>
			</view> -->
			<view class="img">
				<image class="wa" src="../../static/images/tj.jpg" :loading="loading" :disabled="disabled" @click="upload"></image>
			</view>
		</view>
		<view class="qt">
			<view class="qq">
				所在位置
				<image class="image" src="../../static/images/dingwei.png" style="width: 20rpx; height: 20rpx;"></image>
			</view>
			<view class="qq">
				<view class="one">
					<!-- <image class="image1" src="../../static/imagess/personal_center.jpg" style="width: 30rpx; height: 30rpx;"></image> -->
					提醒ta看
				</view>
				
				<image class="image" src="../../static/images/aite.png" style="width: 20rpx; height: 20rpx;"></image>
				
			</view>
			<button class="fb">发表</button>
		</view>
	</view>
</template>

<script>
	var _self;
	export default {
	 data:{
	  percent:0,
	  loading:false,
	  disabled:false
	 },
	 methods : {
	  upload : function(){
	   _self = this;
	   uni.chooseImage({
	    count: 1,
	    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
	    sourceType: ['album'], //从相册选择
	    success: function (res) {
	     const tempFilePaths = res.tempFilePaths;
	     const uploadTask = uni.uploadFile({
	      url : "https://jxsbbx.gzmu.edu.cn/schoolcloud/",
	      filePath: tempFilePaths[0],
	      name: 'file',
		  // fileType: 'image',
	      formData: {
	       'user': 'test'
	      },
	      success: function (uploadFileRes) {
	       console.log(uploadFileRes.data);
	      }
	     });
	 
	     uploadTask.onProgressUpdate(function (res) {
	      _self.percent = res.progress;
	      console.log('上传进度' + res.progress);
	      console.log('已经上传的数据长度' + res.totalBytesSent);
	      console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
	     });
	    },
	    error : function(e){
	     console.log(e);
	    }
	   });
	  }
	 },
	    onLoad:function(){
	  
	    }
	}
</script>

<style>
	.all{
		width: 90%;
		height: 80%;
		margin-left: 40rpx;
		margin-right: 40rpx;
	}
	.show{
		width: auto;
		height: 200rpx;
		
		/* border: #000000 1rpx solid; */
	}
	
	.im{
		width: auto;
		height: 200rpx;
		margin-top: 20rpx;
		/* border: #4CD964 1rpx solid; */
		display: flex;
	}
	.image{
		margin-left: 550rpx;
		align-items: center;
	}
	.wa{
		width: 195rpx;
		height: 195rpx;
		margin: 5rpx 5rpx 5rpx 5rpx;
	}
	.qt{
		margin-top: 140rpx;
		width: auto;
		height: 350rpx;
		align-items: center;
		/* border: #007AFF 1rpx solid; */
		border-top: #F8F8F8 2rpx solid;
		text-align: left;
		/* border-bottom: 1px solid #ccc; */
		
	}
	.qq{
		width: auto;
		height: 80rpx;
		font-size: 25rpx;
		color: #555555;
		align-items: center;
		display: flex;
		justify-content: left;
		border-bottom: #F8F8F8 2rpx solid;
		
	}
	.tx{
		margin-top: 40rpx;
		
	}
	
	.te{
		height: 160rpx;
	}
	.btn{
		width: 100rpx;
		height: 20rpx;
		margin-left: auto;
	}
	.fb{
		color: #FFFFFF;
		font-size: 28rpx;
		margin-top: 100rpx;
		width: 500rpx;
		background-color: #00BFFF;
	}
	.one{
		align-items: center;
		display: flex;
		
	}
</style>

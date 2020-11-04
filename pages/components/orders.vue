<template name="Orders">
	<view class="order">
		<view class="one">
			<view class="per" style="color: #FFA500; font-size: 28rpx;">
				<view class="per1">爱哭的猫</view>
			</view>
			<view class="midone">
				<view class="zhengti">
					<image class="imag" src="../../static/images/ap.jpg" style="width: 125rpx; height: 170rpx;"></image>
					<view class="midwz">致敬老师</view>
				</view>
				<view >
					<view class="s1">预约时间：2017-11-08 <image style="width: 30rpx; height: 30rpx;" src="../../static/images/位置.png"></image>
						<view class="s6">1.2km</view>
					</view>
					<view class="s2">上一位借书人：爱哭的猫</view>
					<view class="s7">
						<view class="s3">上一次还书期：2017-09-10</view>
						<view class="s4">当前状态：
							<view class="s5">等待持书人还书</view>
						</view>
					</view>
				</view>
			</view>
			<view class="midone">
				
				<view class="zhengti">
					<image class="imag" src="../../static/images/ap.jpg" style="width: 125rpx; height: 170rpx;"></image>
					<view class="midwz">致敬老师</view>
				</view>
				<view >
					<view class="s1">预约时间：2017-11-08 <image style="width: 30rpx; height: 30rpx;" src="../../static/images/位置.png"></image>
						<view class="s6">1.2km</view>
					</view>
					<view class="s2">上一位借书人：爱哭的猫</view>
					<view class="s7">
						<view class="s3">上一次还书期：2017-09-10</view>
						<view class="s4">当前状态：
							<view class="s5">等待持书人还书</view>
						</view>
					</view>
				</view>
			</view>
			<view class="s8">
				<view class="tt1">
					<view class="t1">共</view>
					<view class="t1" style="color: #DD524D;">2</view>
					<view class="t1">本</view>
				</view>
				
				<view class="tt2">
					<navigator url="../appointment/abolish">
						<button class="btn1">
							<view class="wz">取消预约</view>
						</button>
					</navigator>
				</view>
				
			</view>
		</view>
		<view class="one">
			<view class="per" style="color: #FFA500; font-size: 28rpx;">
				<view class="per1">爱哭的猫</view>
			</view>
			<view class="midone">
				
				<view class="zhengti">
					<image class="imag" src="../../static/images/ap.jpg" style="width: 125rpx; height: 170rpx;"></image>
					<view class="midwz">致敬老师</view>
				</view>
				<view >
					<view class="s1">预约时间：2017-11-08 <image style="width: 30rpx; height: 30rpx;" src="../../static/images/位置.png"></image>
						<view class="s6">1.2km</view>
					</view>
					<view class="s2">上一位借书人：爱哭的猫</view>
					<view class="s7">
						<view class="s3">上一次还书期：2017-09-10</view>
						<view class="s4">当前状态：
							<view class="s5">等待持书人还书</view>
						</view>
					</view>
				</view>
			</view>
			<view class="s8">
				<view class="tt1">
					<view class="t1">共</view>
					<view class="t1" style="color: #DD524D;">1</view>
					<view class="t1">本</view>
				</view>
				
				<view class="tt2">
					<navigator url="../appointment/abolish ">
						<button class="btn1">
							<view class="wz">取消预约</view>
						</button>
					</navigator>
				</view>
			</view>
			<view class="bt">
				<button class="btn">刷新</button>
			</view>
		</view>
	</view>
    
</template>

<script>
	export default {
	  name: 'Orders',
	  props: {
	            
	  },
	  data() {
	    return {
	                
	    }
	  },
	  methods: {
	            
	  }
	}
</script>　

<style>
  .per{
	  margin-bottom: 30upx;
	  // align-items: center;
	  width: 100%;
	  margin-top: 20upx;
	  height: 60upx;
	  border-bottom: 1upx solid #bbbbbb;
  }
  .btn{
	  height: 80upx;
	  // width: 300upx;
	  color: 	#00BFFF;
	  border-radius: 0upx;
  }
  .per1{
  	  margin-left: 50upx;
  }
  .t1{
  	  margin-left: 10upx;
	  // align-items: center;
  }
 .tt1{
	 display: flex;
	 margin-left: 50upx;
	 font-size: 25upx;
	 color: #808080;
	 margin-top: -20upx;
 }
 .tt2{
	 text-align: center;
	 font-size: 23upx;
	 margin-left: 500upx;
	 margin-bottom: 30upx;
 }
 
 .s8{
 	margin-top: 50upx;
 	border-bottom: 1upx solid #BBBBBB;
	
 }
  
  .btn{
	  background-color:#00BFFF;
	  margin-top: -15upx;
	  color: #FFFFFF;
  }
  .mid {	
  	margin-top:20rpx;
  	width: 100%;
  	height: 300rpx;
  }
  .zt1{
  	color: #00BFFF;
  	font-size: 22rpx;
  	margin-left: 50rpx;
  	line-height: center;
  	margin-top: 25rpx;
  }
  .zt{
  	/* height: 40rpx; */
  	border-bottom:solid 1rpx;
  	/* border-top:solid 1rpx; */
  	margin-top: -5rpx;
  	height: 80rpx;
  	color: #BBBBBB;
  }
  .midone {
  	width: 100%;
  	height: 240rpx;
  	font-size: 30rpx;
  	margin-top: 35rpx;
  	align-items: center;
  	border-bottom: 1rpx solid #bbbbbb;
	// border-top: 1rpx solid #bbbbbb;
  }
  .zhengti {
  	display: flex;
  	width: 100%;
	margin-top: 40upx;
  }
  .imag{
  	margin-left:30rpx;
  }
  .midwz {
  	font-size: 28rpx;
  	height:35rpx;
  	margin-top: -5rpx;
  	align-items: center;
  	margin-left: 30rpx;
  	width: auto;
  	/* background-color:  #333333; */
  }
  .s1{
  	font-size: 20rpx;
  	height:35rpx;
  	margin-top: -120rpx;
  	align-items: center;
  	margin-left: 190rpx;
  	color: #999999;
  	display: flex;
  }
  .s2{
  	font-size: 20rpx;
  	height:35rpx;
  	margin-top: 0rpx;
  	align-items: center;
  	margin-left: 190rpx;
  	color: #999999;
  }
  .s3{
  	font-size: 20rpx;
  	height:35rpx;
  	margin-top: 0rpx;
  	align-items: center;
  	margin-left: 190rpx;
  	color: #999999;
  }
  .s4{
  	font-size: 20rpx;
  	height:35rpx;
  	margin-top: 0rpx;
  	align-items: center;
  	margin-left: 190rpx;
  	color: #F0AD4E;
  }
  .s5{
  	font-size: 20rpx;
  	height:35rpx;
  	margin-top: -26rpx;
  	align-items: center;
  	margin-left: 100rpx;
  	color: #555555;
  }
  .s6{
  	color: #DD524D;
  	
  }
  
  .s7{
  	height:35rpx;
  	align-items: center;
  	width: auto;
  	/* display: flex; */
  }
  
  
  
  .s9{
  	position: relative;
  	margin-left: 300rpx;
  	margin-top: -5rpx;
  	height: 20rpx;
  	width: 100rpx;
  }
  .btn1{
  	color: #F8F8F8;
  	width: 137rpx;
  	height: 55rpx;
  	margin-right: 20rpx;
  	margin-top: -45rpx;
	align-items: center;
  	background-color: #00BFFF;
  	border-radius: 15rpx;
  	}
  .btn2{
  	color: #F8F8F8;
  	width: 137rpx;
  	height: 55rpx;
  	margin-right: 20rpx;
  	margin-top: -60rpx;
  	background-color: #F0AD4E;
  	border-radius: 15rpx;
  	}
  .btn3{
  		color: #F8F8F8;
  		width: 137rpx;
  		height: 55rpx;
  		margin-right: 20rpx;
  		margin-top: -60rpx;
  		background-color: #4CD964;
  		border-radius: 15rpx;
  		}
  .btn4{
  		color: #F8F8F8;
  		width: 137rpx;
  		height: 55rpx;
  		
  		background-color: #00BFFF;
  		border-radius: 15rpx;
  		position: relative;
  		}
  .btn5{
  	color: #F8F8F8;
  	width: 137rpx;
  	height: 55rpx;
  	margin-right: 20rpx;
  	margin-top: -60rpx;
  	background-color: #DD524D;
  	border-radius: 15rpx;
  	text-align: center;
  	}
  .flesh{
  	
  }
  .wz{
  	font-size: 16rpx;
  	margin-top: 8rpx;
  	/* width: 137rpx; */
  	margin-left: 5rpx;
  	text-align: center;
  	position: absolute;
  }
  .wz1{
  	font-size: 16rpx;
  	margin-top: 8rpx;
  	/* width: 137rpx; */
  	margin-left: 20rpx;
  	text-align: center;
  	position: absolute;
  }
  .shumu {
  	margin-left: 180rpx;
  	font-size: 25rpx;
  	margin-top: -130rpx;
  	color:   #999999;
  	width: 120rpx;
  	display: block;
  }
  .shumuone{
  	margin-left: 180rpx;
  	font-size: 25rpx;
  	color: #999999;
  	/* background-color: #4CD964; */
  }
  .shumutwo{
  	margin-left: 250rpx;
  	font-size: 20rpx;
  	color:  #00BFFF;
  	margin-top: -30rpx;
  	/* background-color: #F0AD4E; */
  }
  .shumuthree{
  	margin-top: 10rpx;
  	font-size: 25rpx;
  	color: #F0AD4E;
  	margin-left: 180rpx;
  }
</style>
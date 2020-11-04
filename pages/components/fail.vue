<template name="Fail">
	<view>
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
					<view class="s3">上一次还书期：无</view>
					<view class="s4">当前状态：
						<view class="s5">预约失败，交易终止</view>
					</view>
					<view class="s8">
						<button class="btn5"><view class="wz1">删除</view></button>
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
					<view class="s3">上一次还书期：无</view>
					<view class="s4">当前状态：
						<view class="s5">预约失败，交易终止</view>
					</view>
					<view class="s8">
						<button class="btn5"><view class="wz1">删除</view></button>
					</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
	  name: 'Fail',
	  props: {
	            
	  },
	  data() {
	    return {
	        autoplay: true,
	        interval: 3000,
	        duration: 500        
	    }
	  },
	  methods: {
	            
	  }
	}
</script>

<style>
	.bt{
		margin-top: 1045rpx;
	}
	.mid {	
		margin-top:20rpx;
		width: 100%;
		height: 200rpx;
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
		height: 60rpx;
		color: #BBBBBB;
	}
	.midone {
		width: 100%;
		height: 200rpx;
		font-size: 30rpx;
		margin-top: 35rpx;
		align-items: center;
		border-bottom: 1rpx solid #bbbbbb;
	}
	.zhengti {
		display: flex;
		width: 100%;
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
	
	.s8{
		text-align: center;
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
		margin-top: -60rpx;
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

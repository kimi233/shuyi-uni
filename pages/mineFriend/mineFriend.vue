<template>
	<view class="all">
		<view class="find">
			<view class="">
				<image src="../../static/images/好友.png" style=" margin-left: 100rpx;  width: 50rpx;height: 50rpx;"></image>
			</view>
			<view class="">
				<input placeholder="搜索好友"  style="width: 400rpx; height:  50rpx; font-size: 25rpx; border: solid 2rpx #EEEEEE;border-radius: 5rpx;"/>
			</view>
			<view class="">
				<button type="warn" style="width: 110rpx; height: 50rpx; font-size: 15rpx; margin-right: 100rpx; " >搜索</button>
			</view>
		</view>
		<view class="show">
			<view class="img">
				<image src="../../static/images/user.jpg" style="width: 80rpx; height: 80rpx; border-radius: 50%; margin-top: 10rpx;"></image>
			</view>
			<view class="name">樱桃小丸子</view>
		</view>
		
		<view class="show">
			<view class="img">
				<image src="../../static/images/user.jpg" style="width: 80rpx; height: 80rpx; border-radius: 50%; margin-top: 10rpx;"></image>
			</view>
			<view class="name">樱桃小丸子</view>
		</view>
		
		<view class="show">
			<view class="img">
				<image src="../../static/images/user.jpg" style="width: 80rpx; height: 80rpx; border-radius: 50%; margin-top: 10rpx;"></image>
			</view>
			<view class="name">樱桃小丸子</view>
		</view>
		
		<view class="show">
			<view class="img">
				<image src="../../static/images/user.jpg" style="width: 80rpx; height: 80rpx; border-radius: 50%; margin-top: 10rpx;"></image>
			</view>
			<view class="name">樱桃小丸子</view>
		</view>
		
		<view class="show">
			<view class="img">
				<image src="../../static/images/user.jpg" style="width: 80rpx; height: 80rpx; border-radius: 50%; margin-top: 10rpx;"></image>
			</view>
			<view class="name">樱桃小丸子</view>
		</view>
		
		
		<view class="show">
			<view class="img">
				<image src="../../static/images/user.jpg" style="width: 80rpx; height: 80rpx; border-radius: 50%; margin-top: 10rpx;"></image>
			</view>
			<view class="name">樱桃小丸子</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.show{
		background-color: #F5F5F5;
		width: 100%;
		height: 100%;
		display: flex;
		margin-top: 5rpx;
		margin-bottom: 5rpx;
	}
	.img{
		margin-left: 30rpx;
		margin-top: 20rpx;
		height: 100rpx;
	}
	.name{
		font-size: 25rpx;
		margin-top: 50rpx;
		margin-left: 40rpx;
	}
	.all{
		
	}
	.find{
		display: flex;
		margin-top: 20rpx;
	}
</style>

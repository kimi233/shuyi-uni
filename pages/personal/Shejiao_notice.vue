<template>
	<view class="all">
		<view class="top">
			<view class="wz">
				<text>黄蓉已同意您的好友申请</text>
			</view>
			<view class="time">2017-10-08</view>
			<view class="imaWD"><image src="../../static/images/WD.png"style="width: 18rpx;height: 18rpx; border-radius: 100%;" ></image></view>
		</view>
		<view class="top">
			<view class="wz">
				<text>郭靖请求添加您为好友</text>
			</view>
			<view class="time">2017-10-08</view>
			<view class="imaWD"><image src="../../static/images/WD.png"style="width: 18rpx;height: 18rpx; border-radius: 100%;" ></image></view>
		</view>
		<view class="top">
			<view class="wz">
				<text>邓俊如已同意您的好友申请</text>
			</view>
			<view class="time">2017-10-08</view>
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
.all{
	margin-top: 30rpx;
	/* background-color: #F8F8F8; */
}
.top{
	height: 100rpx;
	border: 1rpx solid #E3E3E3;
}
.wz{
	margin-top: 30rpx;
	font-size: 32rpx;
	margin-left: 40rpx;
}
.time{
	font-size: 28rpx;
	margin-top: -35rpx;
	margin-left: 570rpx;
	color: #999999;
	/* background-color: #007AFF; */
}
.imaWD{
	margin-top: -75rpx;
	margin-left: 30rpx;
}
</style>

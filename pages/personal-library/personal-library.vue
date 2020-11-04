<template>
	<view class="all">
		<view class="find">
			<view class="">
				<input placeholder="搜索图书馆"  style="width: 400rpx; height:  50rpx; font-size: 25rpx; border: solid 2rpx #EEEEEE;border-radius: 5rpx;"/>
			</view>
			<view class="">
				<button type="warn" style="width: 110rpx; height: 55rpx; font-size: 15rpx; margin-right: 100rpx; " >搜索</button>
			</view>
		</view>
		<view class="show">
			<view class="img">
				<image src="../../static/images/个人图书馆.jpg" style="width: 80rpx; height: 80rpx; border-radius: 50%; margin-top: 10rpx;"></image>
			</view>
			<view class="name">樱桃馆</view>
			<navigator url="./shareBook">
				<view class="share">
					<image src="../../static/images/上传(1).png" style="width: 60rpx; height: 60rpx; margin-top: -10rpx;"></image>
				</view>
			</navigator>
		</view>
		<view class="show">
			<view class="img">
				<image src="../../static/images/个人图书馆.jpg" style="width: 80rpx; height: 80rpx; border-radius: 50%; margin-top: 10rpx;"></image>
			</view>
			<view class="name">木子图书馆</view>
			<view class="share">
				<image src="../../static/images/上传(1).png" style="width: 60rpx; height: 60rpx; margin-top: -10rpx;"></image>
			</view>
		</view>
		
		<view class="show">
			<view class="img">
				<image src="../../static/images/个人图书馆.jpg" style="width: 80rpx; height: 80rpx; border-radius: 50%; margin-top: 10rpx;"></image>
			</view>
			<view class="name">小明图书</view>
			<view class="share">
				<image src="../../static/images/上传(1).png" style="width: 60rpx; height: 60rpx; margin-top: -10rpx;"></image>
			</view>
		</view>
		
		<view class="show">
			<view class="img">
				<image src="../../static/images/个人图书馆.jpg" style="width: 80rpx; height: 80rpx; border-radius: 50%; margin-top: 10rpx;"></image>
			</view>
			<view class="name">小明图书</view>
			<view class="share">
				<image src="../../static/images/上传(1).png" style="width: 60rpx; height: 60rpx; margin-top: -10rpx;"></image>
			</view>
		</view>
		
		<view class="show">
			<view class="img">
				<image src="../../static/images/个人图书馆.jpg" style="width: 80rpx; height: 80rpx; border-radius: 50%; margin-top: 10rpx;"></image>
			</view>
			<view class="name">小明图书</view>
			<view class="share">
				<image src="../../static/images/上传(1).png" style="width: 60rpx; height: 60rpx; margin-top: -10rpx;"></image>
			</view>
		</view>
		
		<view class="show">
			<view class="img">
				<image src="../../static/images/个人图书馆.jpg" style="width: 80rpx; height: 80rpx; border-radius: 50%; margin-top: 10rpx;"></image>
			</view>
			<view class="name">小明图书</view>
			<view class="share">
				<image src="../../static/images/上传(1).png" style="width: 60rpx; height: 60rpx; margin-top: -10rpx;"></image>
			</view>
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
		width: 100%;
	}
	.share{
		font-size: 25rpx;
		margin-top: 50rpx;
		margin-left: 280rpx;
		color: #DD524D;
	}
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
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		height: 100rpx;
		border: #00BFFF 5rpx dashed;
		border-radius: 45%;
	}
	.name{
		font-size: 25rpx;
		margin-top: 50rpx;
		margin-left: 40rpx;
		margin-right: 30rpx;
		width: 150rpx;
	}
	.all{
		
	}
	.find{
		display: flex;
		margin-top: 20rpx;
		margin-left: 90rpx;
	}
</style>

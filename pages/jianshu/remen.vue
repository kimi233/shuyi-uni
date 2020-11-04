<template>
	<view>
		<!-- 导航栏 -->
		<view class="tab" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/back.png" style="width: 60rpx; height: 60rpx;"></image>
		<view class="tit">热门推荐</view>
		
			<fenlei><view class="fenl">
			<image class="shua" src="../../static/images/分类.png" style="width: 45rpx; height: 45rpx;"></image>
			<view class="tit1">分类</view>
			</view>
			</fenlei>
			<image class="im" src="../../static/images/搜索.png"style="width: 65rpx; height: 65rpx;"></image>
	
	</view>
	<view class="tab1"></view>
	<view class="list">
		<image class="ima" src="../../static/images/封面.png" style="width: 150rpx; height: 200rpx;"></image>
		<view>
			<view class="name">书名....</view>
			<view class="tex">作者 ：哈哈</view>
			<view class="tex">出版社 ：浙江大学出版社</view>
			<view class="tex">出版时间 ：2020-09</view>
			<view class="tex1">广东省图书馆、广东中山图书馆</view>
		</view>
	</view>
	<view class="list">
		<image class="ima" src="../../static/images/封面.png" style="width: 150rpx; height: 200rpx;"></image>
		<view>
			<view class="name">书名....</view>
			<view class="tex">作者 ：哈哈</view>
			<view class="tex">出版社 ：浙江大学出版社</view>
			<view class="tex">出版时间 ：2020-09</view>
			<view class="tex1">广东省图书馆、广东中山图书馆</view>
		</view>
	</view>
	
	<view class="tab">
		<image class="shua" src="../../static/images/刷新.png" style="width: 55rpx; height: 55rpx;"></image>
		<view class="tit2">换一批</view>
	</view>
	<image class="top" src="../../static/images/top.png" style="width: 80rpx; height: 80rpx;"></image>
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
.tab {
	margin-top: 69rpx;
		display: flex;
	}

	.tit {
		margin-top: 9rpx;
		color: #808080;
		margin-left: 5rpx;
		font-size: 45rpx;
	}

	.back {
		margin-top: 18rpx;
		margin-left: 10rpx;
	}
	.shua {
		margin-top: 18rpx;
		margin-left: 250rpx;
	
	}
	
	.tit1 {
		margin-top: 15rpx;
		color: #808080;
		margin-left: 10rpx;
		font-size: 36rpx;
	}
	.tit2 {
		margin-top: 20rpx;
		color: #808080;
		margin-left: 10rpx;
		font-size: 36rpx;
	}
	.im{
		margin-top: 8rpx;
		margin-left: 20rpx;
	}
	
	.tab1 {
		height: 10rpx;
		background-color: #F1F1F1;
	}
	.list {
		height: 290rpx;
		border-bottom: 1rpx solid #C8C7CC;
		display: flex;
	}
	
	.ima {
		margin: 40rpx 40rpx;
	}
	
	.name {
		margin-top: 30rpx;
		font-size: 40rpx;
	}
	
	.tex {
		font-size: 28rpx;
		margin-top: 5rpx;
		color: #808080;
	}
	
	.tex1 {
		margin-top: 15rpx;
		font-size: 35rpx;
		color: #F0AD4E;
	}
	
	.top {
		top: -170rpx;
		margin-left: 680rpx;
	}
	.fenl{
		display: flex;
	}
	
	
</style>

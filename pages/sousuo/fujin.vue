<template>
	<view>
		<!-- 导航栏 -->
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/back.png" style="width: 60rpx; height: 60rpx;"></image>
			<view class="tit1">附近的书</view>
			<navigator url="sousuo">
			<image class="im" src="../../static/images/搜索.png"style="width: 65rpx; height: 65rpx;"></image>
			</navigator>
			</view>
		<!-- 范围 -->
		<view class="list">
			<view class="td">1KM以内</view>
			<view class="td">1.5KM以内</view>
			<view class="td">2KM以内</view>
			<view class="td">同城</view>
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
.tab1 {
	margin-top: 79rpx;
		display: flex;
	}
	.tit1 {
		margin-top: 19rpx;
		color: #555555 ;
		margin-left: 215rpx;
		font-size: 45rpx;
	}
	
	.back {
		margin-top: 18rpx;
		margin-left: 10rpx;
	}
	.im{
		margin-top: 10rpx;
		margin-left: 200rpx;
	}
	.list{
		height: 100rpx;
		margin-top: 10rpx;
		display: flex;
		background-color: #F8F8F8;
	}
	.td{
		margin: 20rpx 20rpx;
		height: 45rpx;
		width: 250rpx;
		font-size: 28rpx;
		text-align: center;
		
		border-top: 1rpx solid #C0C0C0;
		border-bottom:1rpx solid #C0C0C0;
	}
</style>

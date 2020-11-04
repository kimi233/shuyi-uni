<template>
	<view>
		<!-- 导航栏 -->
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/back.png" style="width: 60rpx; height: 60rpx;"></image>
			<view class="tit1">书易搜索</view>
			</view>
			<!-- 选择项 -->
			<view class="tr"></view>
			<view class="list">
				<Sbook>
				<view class="tit">图书</view>
				</Sbook>
				<Sping>
				<view class="tit">书评</view>
				</Sping>
				<view class="tit">关注</view>
				<view class="tit">好友</view>
			</view>
			<view class="tr"></view>
			
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
		display: flex;
	}
	.tit1 {
		margin-top: 19rpx;
		color: #555555 ;
		margin-left: 215rpx;
		font-size: 45rpx;
	}
	
	.back {
		margin-top: 8rpx;
		margin-left: 10rpx;
	}
	.tr{
		height: 10rpx;
		background-color: #F8F8F8;
	}
	.list{
		height: 100rpx;
		display: flex;
		
	}
	.tit{
		margin: 30rpx 55rpx;
	}
	
</style>

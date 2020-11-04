<template>
	<view>
		<!-- 导航栏 -->
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/back.png" style="width: 60rpx; height: 60rpx;"></image>
			<view class="tit1">修改借书卡</view>
			</view>
			<!-- 内容 -->
			<view class="tr"></view>
			<view class="tex"><input @input="goToSearch" placeholder="借书证号"   type="text"/></view>
			<view class="tex"><input @input="goToSearch" placeholder="身份证号"   type="text"/></view>
			<view class="tex"><input @input="goToSearch" placeholder="图书馆"   type="text"/></view>
			<view class="tex"><input @input="goToSearch" placeholder="密码"   type="password"/></view>
	<button class="btn" >
		提交
	</button>
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
	margin-top: 69rpx;
		display: flex;
	}
	.tit1 {
		margin-top: 19rpx;
		color: #555555 ;
		margin-left: 205rpx;
		font-size: 45rpx;
	}
	
	.back {
		margin-top: 18rpx;
		margin-left: 10rpx;
	}
	.tr{
		height: 10rpx;
		background-color: #F8F8F8;
	}
	.tex{
		height: 80rpx;
		border-bottom: 1rpx solid #F1F1F1;
		color: #8F8F94;
		
	}
	.tex input{
		margin-left: 20rpx;
		width: 450rpx;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 36rpx;
		margin-top: 20rpx;
	}
	.btn{
		margin-top: 200rpx;
		width: 80%;
		background-color: #DD524D;
		color: #FFFFFF;
	}
</style>

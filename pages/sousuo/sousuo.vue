<template>
	<view>
		<!-- 导航栏 -->
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/back.png" style="width: 60rpx; height: 60rpx;"></image>
			<view class="tit1">书易搜索</view>
			<image class="im"  src="../../static/images/附近.png" style="width: 25rpx; height: 35rpx;"></image>
			<navigator url="fujin">
			<view class="tit2">附近的书</view>
			</navigator>
			</view>
			<!-- 搜索框 -->
			<view class="tit">
			<view class="tab">
				<view class="tit3">中文库</view>  
				<image class="ima" src="../../static/images/下拉.png"style="width: 30rpx; height: 30rpx;"></image>
			</view>
			<view class="titi">
				<view class="h-input">
					<image src="../../static/images/搜索.png" class="image"></image>
					<input @input="goToSearch" placeholder="人民的名义" placeholderStyle="color:#BBBBBB "  type="text"/>
				</view>
				<view class="tab">搜索</view>
			</view>
			</view>
			<!-- 热搜内容 -->
			<view class="list">
				<image class="hot" src="../../static/images/热搜.png"style="width: 40rpx; height: 40rpx;"></image>
				<view class="tex">热搜</view>
				<view class="tex1">更多</view>
				<image class="more" src="../../static/images/更多.png"style="width: 40rpx; height: 40rpx;"></image>
			</view>
			<view class="list">
				<view class="tex2">财富</view>
			</view>
			<view class="list1">
				<image class="hot" src="../../static/images/历史.png"style="width: 40rpx; height: 40rpx;"></image>
				<view class="tex">搜索历史</view>
				<view class="tex3">更多</view>
				<image class="more1" src="../../static/images/更多.png"style="width: 40rpx; height: 40rpx;"></image>
			</view>
			<view class="list">
				<view class="tex2">设计</view>
			</view>
			<button class="btn">清除历史搜索记录</button>
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
		margin-top: 69rpx;
	}
	.tit{
		margin-top: 19rpx;
		display: flex;
	}
	.tit1 {
		margin-top: 9rpx;
		color: #555555 ;
		margin-left: 5rpx;
		font-size: 45rpx;
	}
	
	.back {
		margin-top: 15rpx;
		margin-left: 10rpx;
	}
	.im{
		margin-top: 28rpx;
		margin-left: 320rpx;
	}
	.tit2{
		margin-top: 27rpx;
		font-size: 30rpx;
		color: #808080;
		margin-left: 13rpx;
	}
	.tit3{
		margin-top: 5rpx;
		font-size: 30rpx;
		color: #808080;
		margin-left: 13rpx;
	}
	.tab{
		display: flex;
		margin-left: 20rpx;
		color: #808080;
		margin-top: 8rpx;
	}
	.ima{
		margin-top: 10rpx;
		margin-left: 10rpx;
	}
	.titi{
		height: 100rpx;
		display: flex;
	}
	.h-input{
		margin-left: 18rpx;
		/* margin-top: 20rpx; */
		width: 430rpx;
		height: 60rpx;
		border-radius: 36rpx;
		background-color: #F1F1F1;
		border: 1rpx solid #C8C7CC;
		display: flex;
		flex-direction: row;
	}
	.h-input input{
		margin-left: 10rpx;
		width: 450rpx;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 28rpx;
		
	}
	.h-input view{
		width: 90rpx;
		
	}
	.image{
		margin-left: 10rpx;
		/* margin-top: 10rpx; */
		width: 65rpx;
		height: 65rpx;
	}
	.list{
		display: flex;
		margin-top: 20rpx;
		height: 60rpx;
		border-bottom: 1rpx solid #C8C7CC;
	}
	.tex{
		font-size: 40rpx;
		color: #555555;
	}
	.tex1{
		font-size: 30rpx;
		color: #808080;
		margin-left: 470rpx;
	}
	.more{
		margin-top: 7rpx;
	}
	.hot{
		margin: 8rpx 15rpx;
	}
	.tex2{
		font-size: 36rpx;
		color: #555555;
		margin-left: 20rpx;
		/* margin-left: 470rpx; */
	}
	.list1{
		display: flex;
		margin-top: 60rpx;
		height: 60rpx;
		border-bottom: 1rpx solid #C8C7CC;
	}
	.tex3{
		font-size: 30rpx;
		color: #808080;
		margin-left: 400rpx;
	}
	.more1{
		margin-top: 7rpx;
	}
	.btn{
		background-color: #FFFFFF;
		font-size: 26rpx;
		border:1rpx solid #00AAFF;
		width: 400rpx;
		border-radius: 36rpx;
		margin-top: 20rpx;
	}
</style>

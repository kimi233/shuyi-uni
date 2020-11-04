<template>
	<view>
		<view class="list">
			<!-- <view class="tit">图书</view> -->
			<view class="tit1" mode="aspectFill" @click="titClick" :class="{'blue':this.ShowHidden}">书评</view>
			<!-- <view class="tit">关注</view>
			<view class="tit">好友</view>-->
		</view> 
		
		<!-- 内容 -->
		<view class="Array" v-if="ShowHidden">
		<view class="list1">
			<image class="ima" src="../../static/images/封面.png" style="width: 150rpx; height: 200rpx;"></image>
			<view class="tabs">
				<view class="li">
				<view class="name">书名....</view>
				<view class="te">更多</view></view>
				<view class="tex">作者 ：哈哈</view>
				<view class="tex">最近书评 ：2020-09</view>
				<view class="tex1"></view>
				<view class="tex">大护法开了家我男人噶尔给个房间官方的身份拉和服务器房管局二....</view>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ShowHidden:false,
			}
		},
		methods: {
			HiddenClick(){
				this.ShowHidden=false
		},
		titClick(){
			this.ShowHidden=!this.ShowHidden;
		}
	},
	}
</script>

<style>
.tit1{
		margin: 30rpx 55rpx; 
		width: 80rpx;
	}
	.blue{
		color: #007AFF;
		border-bottom: 2rpx solid #00AAFF;
	}
	.list{
		height: 120rpx;
		display: flex;
	}
	.tit{
		margin: 30rpx 55rpx;
	}
	
	.list1 {
		margin-left: -180rpx;
		height: 300rpx;
		/* width: 100%; */
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
		margin-top: 10rpx;
		color: #808080;
	}
	
	.tex1 {
		height: 1rpx;
		width: 450rpx;
		margin-top: 15rpx;
		background-color: #C0C0C0;
	}
	.tabs{
		width: 500rpx;
	}
	.te{
		font-size: 28rpx;
		color: #8F8F94;
		margin-left: 300rpx;
		margin-top: 35rpx;
	}
	.li{
		display: flex;
	}
</style>

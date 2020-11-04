<template>
	<view >
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/back.png" style="width: 60rpx; height: 60rpx;"></image>
			<view class="tit1">快速办证</view>
			</view>
		<view class="ta">
			</view>
		<view class="tab">
			<input class="inp" placeholder="姓         名" placeholder-style="color:#BBBBBB"  type="text"></input>
		</view>
		<view class="tab">
			<input class="inp" placeholder="身份证号" placeholder-style="color:#BBBBBB"  type="number"></input>
		</view>
		<view class="tab">
			<input class="inp" placeholder="密         码" placeholder-style="color:#BBBBBB"  type="password"></input>
		</view>
		<view class="tab">
			<input class="inp" placeholder="确认密码" placeholder-style="color:#BBBBBB"  type="password"></input>
		</view>
		<picker>
			<view class="tab">
				<input class="inp" placeholder="图  书  馆" placeholder-style="color:#BBBBBB"  type="number"></input>
				<image class="ima" src="../../static/images/更多.png" style="width: 30rpx; height: 30rpx;"></image>
			</view>
		</picker>
		<button class="btn">
			申请办证
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
		margin-top: 9rpx;
		color: #555555;
		margin-left: 5rpx;
		font-size: 45rpx;
	}
	
	.back {
		margin-top: 18rpx;
		margin-left: 10rpx;
	}
	.ta{
		height: 10rpx;
		background-color: #F1F1F1;
	}
.tab{
	height: 100rpx;
	background-color: #FFFFFF;
	margin-top: 20rpx;
	border-bottom: 3rpx solid #F1F1F1;
}
	.inp{
		/* text-align: center; */
		height: 80rpx;
		margin-left: 20rpx;
	}
	.ima{
		top: -47rpx;
		margin-left: 680rpx;
	}
	.btn{
		width: 80%;
		margin-top: 40rpx;
		color: #FFFFFF;
background: #00AAFF;
	}
</style>

<template>
	<view>
		
		<!-- 分享弹窗 -->
		<view mode="aspectFill" @click.stop="ShowHidden=!ShowHidden">
			<image class="im"  src="../../static/images/分享1.png" style="width: 50rpx; height: 50rpx;"></image>
		</view>
		<view class="all" v-if="ShowHidden">
		<view class="list">
			<view class="td">
				<image class="im1" src="../../static/images/微信.png" style="width: 150rpx; height: 150rpx;"></image>
			<view>微信</view>
			</view>
			<view class="td">
				<image class="im1" src="../../static/images/朋友圈.png" style="width: 150rpx; height: 150rpx;"></image>
			<view>微信朋友圈</view>
			</view>
			<view class="td">
				<image class="im1" src="../../static/images/QQ空间.png" style="width: 150rpx; height: 150rpx;"></image>
			<view>QQ空间</view>
			</view>
		</view>
		<view class="list1">
			<view class="td">
				<image class="im1" src="../../static/images/QQ.png" style="width: 150rpx; height: 150rpx;"></image>
			<view>微信</view>
			</view>
			<view class="td">
				<image class="im1" src="../../static/images/微信收藏.png" style="width: 150rpx; height: 150rpx;"></image>
			<view>微信朋友圈</view>
			</view>
			<view class="td">
				<image class="im1" src="../../static/images/微博.png" style="width: 150rpx; height: 150rpx;"></image>
			<view>QQ空间</view>
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
		}
	}
</script>

<style>
.im{
		margin-top: 15rpx;
		margin-left: 420rpx;
	}
	.all{
		width: 100%;
		position: absolute;
		height: 38%;
		background-color: #F8F8F8;
		right: 0rpx;
		margin-top: 100rpx;
		z-index: 99;
		margin-top: 760rpx;
		/* margin-left: 10rpx; */
	}
	.list{
		display: flex;
		/* margin-top: 669rpx; */
		
	}
	.list1{
		display: flex;
		/* margin-top: 500rpx; */
	}
	.td{
		height: 250rpx;
		width: 300rpx;
		text-align: center;
		border: 1rpx solid #F1F1F1;
		font-size: 28rpx;
		color: #555555;
	}
	.im1{
		margin-top: 30rpx;
	}
</style>

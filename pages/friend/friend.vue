<template>
	<view>
		<!-- 顶部部分 -->
		<view class="head">
			<view class="header-wrap">
				<view class="index-header">
					<image class="address" src="../../static/images/friendsort.png"></image>
					<view class="name">
						<view class="haoyou">好友</view>
						<view class="guanzhu">关注</view>
					</view>
					<view class="map-wrap" >
						<image class="iconfont" src="../../static/images/add_more2.png"></image> 
					</view>
				</view>
			</view>
			<view class="blank"></view>
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

<style lang="scss">
	// 顶部页面
	$color-base: #fff;
	$words-color-base: #333333;
	$words-color-light: #999999;
	
	.header-wrap {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 999;
	
		.index-header {
			display: flex;
			height: 110rpx;
			line-height: 110rpx;
			padding: 0 30rpx;
			padding-top: 40rpx;
			background-color: $color-base;
			font-size: 28rpx;
			color: #fff;
			align-items: center;
			justify-content: space-between;
	
			.address {
				// margin-left: 50upx;
				width: 60rpx;
				height: 60rpx;
				font-size: 26rpx;
				margin-top: 20rpx;
			}
	
			.name {
				display: flex;
				color: #3C3C3C;
				width: 10
				0%;
				height: 100rpx;
				font-size: 40rpx;
				margin-top: 20rpx;
				margin-bottom: 40rpx;
				justify-content: space-around; //靠左靠右
				
				.haoyou{
					width: 50%;
					height: 20rpx; 
					font-size: 40rpx;
					margin-top: 40rpx;
					padding-bottom: 40rpx;
					border: 1rpx solid #A0A0A0;
				}
				.guanzhu{
					width: 50%;
					height: 60rpx;
					font-size: 40rpx;
					border: 1rpx solid #A0A0A0; 
					margin-top: 40rpx;
					text-align: center;
				}
			}
	
			.map-wrap {
				.iconfont {
					margin-top: 50rpx;
					width: 60rpx;
					height: 60rpx;
					font-size: 32rpx;
					margin-right: 5rpx;
				}
	
				text {
					font-size: 26rpx;
				}
			}
		}
	}
	
	.blank {
		height: 126upx;
	}
</style>

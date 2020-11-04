<template>
	<view>
		<!-- 顶部 -->
		<view class="top">
			<view class="wz">我的书单</view>
			<image class="image" src="../../static/image/新建.png" style="width: 50rpx;height: 50rpx;"></image>
			<view class="xinjian">新建</view>
		</view>
		<!-- 中间 -->
		<view class="mid">
			<view class="midone">
				<navigator url="mycollbook">
				<view class="zhengti">
					<image class="imag" src="../../static/image/我的喜欢.png" style="width: 150rpx; height: 150rpx;"></image>
					<view class="midwz">我的最爱</view>
				</view>
				<view class="shumu">100本</view>
				</navigator>
			</view>
			<view class="midone">
				<navigator url="mycollbook">
				<view class="zhengti">
					<image class="imag" src="../../static/image/书1.jpg" style="width: 150rpx; height: 150rpx;"></image>
					<view class="midwz">mybook</view>
				</view>
				<view class="shumu">500本</view>
				</navigator>
			</view>
			<view class="midone">
				<navigator url="mycollbook">
				<view class="zhengti">
					<image class="imag" src="../../static/image/after.jpg" style="width: 150rpx; height: 150rpx;"></image>
					<view class="midwz">呵呵哈哈哈哈哈哈</view>
				</view>
				<view class="shumu">50本</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script></script>

<style>
.top {
	width: 100%;
	height: 60rpx;
	background: #f1f1f1;
	box-shadow: #C0C0C0 6rpx 0rpx 6rpx 6rpx;
	}
.wz {
	margin-left: 25rpx;
	height: 15rpx;
	width: 150rpx;
	/* background-color: #4CD964; */
}
.image {
	margin-top: -10rpx;
	margin-left: 600rpx;
}
.xinjian {
	margin-left: 660rpx;
	margin-top: -55rpx;
	font-size: 30rpx;
}
.mid {
	/* background-color: #007AFF; */
}
.midone {
	width: 100%;
	height: 180rpx;
	font-size: 28rpx;
	margin-top: 30rpx;
	align-items: center;
	border-bottom: 1rpx solid #bbbbbb;
	/* background-color:   #007AFF; */
	/* border:1px solid transparent; */
}
/* .midone:hover{
	border: 1px solid red;
} */
.zhengti {
	display: flex;
	/* background-color: #4CD964; */
}
.imag{
	margin-left:20rpx;	
}
.midwz {
	height: 45rpx;
	font-size: 35rpx;
	margin-top: 35rpx;
	align-items: center;
	margin-left: 30rpx;
	/* background-color: #2C405A; */
}
.shumu {
	margin-left: 200rpx;
	font-size: 24rpx;
	margin-top: -70rpx;
	color: #999999;
	/* background-color: #007AFF; */
}
</style>

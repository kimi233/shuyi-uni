<template>
	<view>
		<view class="top">
			<view class="tou">
				<image class="topimage" src="../../static/images/userface.png" style="width: 135rpx;height: 135rpx;border-radius: 50%;"></image>
			</view>
			<view class="bn">
				<text class="name">爱丽丝</text>
			</view>
			<!-- <view class="Grade">
				等级
			</view> -->
			<view class="dd">
				<view class="didian">广州</view>
			</view>
			<!-- 个性签名 -->
			<view class="gq">
				<view class="qianmin">书上有路，学海无涯</view>
			</view>
			<navigator url="../myinfomation/myinfomation">
			<view class="genduo">
				<image class="image" src="../../static/images/更多.png" style="width: 30rpx;height: 30rpx;"></image>
			</view>
			</navigator>
		</view>
		<!-- 中间 -->
		<view class="mid">
			<view class="wz">
				最近读书
			</view>
			<view class="book">
				<image class="bookone"src="../../static/images/书3.jpg" style="width: 120rpx;height: 150rpx;"></image>
			</view>
			<view class="book">
				<image class="bookone"src="../../static/images/书1.jpg" style="width: 120rpx;height: 150rpx;"></image>
			</view>
			<view class="book">
				<image class="bookone"src="../../static/images/after.jpg" style="width: 120rpx;height: 150rpx;"></image>
			</view>
			<view class="book">
				<image class="bookone"src="../../static/images/书1.jpg" style="width: 120rpx;height: 150rpx;"></image>
			</view>
			<view class="book">
				<image class="bookone"src="../../static/images/书2.jpg" style="width: 120rpx;height: 150rpx;"></image>
			</view>
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
.top {
	height: 185rpx;
	width: 100%;
	/* background-color: #007AFF; */
	border-bottom: 1rpx solid #F1F1F1;
}
.topimage {
	margin-top: 25rpx;
	margin-left: 25rpx;
}

.name{
	margin-left: 180rpx;
	font-size: 30rpx;
}

.bn {
	margin-top: -135rpx;
}
.dd {
	margin-top: 0rpx;
	margin-left: 180rpx;
	font-size: 20rpx;
	color: #BBBBBB;
}
.qianmin {
	margin-top: 0rpx;
	margin-left: 180rpx;
	font-size: 25rpx;
	color: #555555;
}
.genduo{
	margin-left: 700rpx;
	margin-top: -70rpx;
}
.mid{
	height:230rpx;
	border-bottom: 1rpx solid #F1F1F1;
}
.wz{
	font-size: 30rpx;
	margin-left: 20rpx;
}
.book{
	margin-top: 20rpx;
	margin-left: 25rpx;
	/* display: flex; */
	/* display: inline-block;*/
	display: inline-flex;
	/* align-items: flex-end; */
}
</style>

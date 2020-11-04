<template>
	<view>
		<!-- 头部 -->
		<view class="top">
			<navigator url="../myinfomation/myinfomation">
			<view class="tou">
				<image class="topimage" src="../../static/images/userface.png" style="width: 135rpx;height: 135rpx;border-radius: 50%;"></image>
			</view>
			<view class="bn">
				<text class="name">爱丽丝</text>
			</view>
			<view class="tw">
				<view class="idnum">账号：Summer</view>
			</view>
			<view class="genduo">
				<image class="image" src="../../static/images/更多.png" style="width: 30rpx;height: 30rpx;"></image>
			</view>
			</navigator>
		</view>
		<!-- mid中间 -->
		<view class="mid">
			<navigator url="personal_home">
			<view class="midone">
				<view class="mid_one_ima">
					<image src="../../static/images/userinfo_space.png"style="width: 80rpx;height: 80rpx;"></image>
				</view>
				<view class="mid_one_wz">
					我的主页
				</view>
			</view>
			</navigator>
			<navigator url="Mynotice">
			<view class="midone">
				<view class="mid_one_ima">
					<image src="../../static/images/ring_white.png"style="width: 76rpx;height: 70rpx;"></image>
				</view>
				<view class="mid_one_wz">
					通知信息
				</view>
			</view>
			</navigator>
			<navigator url="../readCircle/readCircle">
			<view class="midone">
				<view class="mid_one_ima">
					<image src="../../static/images/userinfo_reader_card.png"style="width: 76rpx;height: 70rpx;"></image>
				</view>
				<view class="mid_one_wz">
					阅读圈子
				</view>
			</view>
			</navigator>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
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
	margin-left: 190rpx;
}

.bn {
	margin-top: -120rpx;
}
.tw {
	margin-top: 10rpx;
	margin-left: 190rpx;
}

.idnum {
	font-size: 25rpx;
}
.genduo{
	margin-left: 690rpx;
	margin-top: -70rpx;
}
.mid{
	width: 100%;
	height: auto;
	/* background-color: #007AFF; */
}
.midone{
	display: flex;
	border-bottom: 1rpx solid #F1F1F1;
}
.mid_one_ima{
	margin-left: 20rpx;
}
.mid_one_wz{
	font-size: 30rpx;
	margin-left: 50rpx;
	margin-top: 30rpx;
}
</style>

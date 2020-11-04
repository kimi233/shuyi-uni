<template>
	<view>
		<!-- 头部 -->
		<view class="top">
			<navigator url="./XiTonMessage">
			<view class="topone">
				<view class="top_one_ima"><image src="../../static/images/ring_white.png" style="width: 60rpx;height: 60rpx;"></image></view>
				<view class="top_one_wz">系统消息</view>
				<view class="genduo">
					<image class="image" src="../../static/images/更多.png" style="width: 30rpx;height: 30rpx;"></image>
				</view>
			</view>
			</navigator>
			<navigator url="Shejiao_notice">
			<view class="topone">
				<view class="top_one_ima"><image src="../../static/images/ring_white.png" style="width: 60rpx;height: 60rpx;"></image></view>
				<view class="top_one_wz">借还消息</view>
				<view class="genduo">
					<image class="image" src="../../static/images/更多.png" style="width: 30rpx;height: 30rpx;"></image>
				</view>
			</view>
			</navigator>
			<navigator url="Shejiao_notice">
			<view class="topone">
				<view class="top_one_ima"><image src="../../static/images/ring_white.png" style="width: 60rpx;height: 60rpx;"></image></view>
				<view class="top_one_wz">社交消息</view>
				<view class="genduo">
					<image class="image" src="../../static/images/更多.png" style="width: 30rpx;height: 30rpx;"></image>
				</view>
			</view>
			</navigator>
		</view>
		<!-- 中间 客服 -->
		<view class="mid">
			<navigator url="serve_chat">
			<view class="midone">
				<view class="mid_one_ima"><image src="../../static/images/service_woman.png"style="width: 90rpx;height: 70rpx;"></image></view>
				<view class="mid_one_wz">书易客服</view>
				<view class="mid_one_time">1天前</view>
				<view class="mid_one_xx">好的</view>
			</view>
			</navigator>
			<navigator url="Lib_ser_chat">
			<view class="midone">
				<view class="mid_one_ima"><image src="../../static/images/service_woman.png"style="width: 90rpx;height: 70rpx;"></image></view>
				<view class="mid_one_wz">图书馆客服</view>
				<view class="mid_one_time">2天前</view>
				<view class="mid_one_xx">好的</view>
			</view>
			</navigator>
		</view>
		<!-- 底部  好友消息 -->
		<view class="under">
			<navigator url="unChat">
			<view class="underone">
				<view class="under_one_ima"><image src="../../static/images/头像3.jpg"style="width: 90rpx;height: 90rpx;border-radius: 50%;"></image></view>
				<view class="under_one_imaWD"><image src="../../static/images/WD.png"style="width: 30rpx;height: 30rpx;" ></image></view>
				<view class="under_one_wz">上官微软</view>
				<view class="under_one_time">9天前</view>
				<view class="under_one_xx">好的</view>
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
	width: 100%;
	height: auto;
	/* background-color: #007AFF; */
}
.topone {
	width: auto;
	height: 100rpx;
	display: flex;
	border-bottom: 1rpx solid #f1f1f1;
}
.top_one_ima {
	margin-left: 20rpx;
	margin-top: 20rpx;
}

.top_one_wz {
	font-size: 30rpx;
	margin-left: 40rpx;
	margin-top: 30rpx;
}
.genduo {
	margin-left: 460rpx;
	margin-top: 30rpx;
}
.mid{
	width: 100%;
	height: auto;
}
.midone{
	width: auto;
	height: 150rpx;
	display: flex;
	border-bottom: 1rpx solid #f1f1f1;
}
.mid_one_ima {
	margin-left: 20rpx;
	margin-top: 40rpx;
}
.mid_one_wz {
	font-size: 30rpx;
	margin-left:35rpx;
	margin-top: 40rpx;
	/* background-color: #333333; */
	width: 60%;
	height: 40rpx;
}
.mid_one_xx{
	font-size: 25rpx;
	color: #999999;
	margin-left: -550rpx;
	margin-top: 85rpx;
	height: 50rpx;
	/* background-color: #4CD964; */
}
.mid_one_time{
	font-size: 25rpx;
	color: #BBBBBB;
	margin-left: 40rpx;
	margin-top: 40rpx;
	/* background-color: #007AFF; */
	height: 40rpx;
}
.under{
	width: 100%;
	height: auto;
}
.underone{
	width: auto;
	height: 150rpx;
	display: flex;
	border-bottom: 1rpx solid #f1f1f1;
}
.under_one_ima {
	margin-left: 20rpx;
	margin-top: 30rpx;
}
.under_one_imaWD {
	
	margin-left: -30rpx;
	margin-top: 20rpx;
}
.under_one_wz {
	font-size: 30rpx;
	margin-left:35rpx;
	margin-top: 40rpx;
	/* background-color: #333333; */
	width: 60%;
	height: 40rpx;
}
.under_one_xx{
	font-size: 25rpx;
	color: #999999;
	margin-left: -550rpx;
	margin-top: 85rpx;
	height: 50rpx;
	/* background-color: #4CD964; */
}
.under_one_time{
	font-size: 25rpx;
	color: #BBBBBB;
	margin-left: 40rpx;
	margin-top: 40rpx;
	/* background-color: #007AFF; */
	height: 40rpx;
}
</style>

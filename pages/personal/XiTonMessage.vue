<template>
	<view>
		<view class="top">
			<view class="topone">
				<view class="top_one_ima"><image class="topima" src="../../static/images/ring_white.png" style="width: 60rpx;height: 60rpx;"></image></view>
				<view class="top_one_wz">2017-10-08</view>
				<view class="top_one_time">15:32:21</view>
				<view class="zw"><text>系统更新系哈哈哈哈哈哈哈哈哈哈哈哈姐姐南面西南合成公式是不锈钢的运动会哈哈哈哈哈哈哈哈</text></view>
			<!-- <view class="imaWD"><image src="../../static/images/WD.png"style="width: 18rpx;height: 18rpx; border-radius: 100%;" ></image></view> -->
			</view>
			
			<!-- 回复 -->
			<view class="toptwo">
				<view class="huifu">
					<image class="one" src="../../static/images/huifu.png"></image>
					<text id="tone">回复</text>
				</view>
				<view class="sc">
					<image class="two" src="/static/image/SC.png" style="width: 38rpx;height: 36rpx;"></image>
					<text id="ttwo">删除</text>
				</view>
				<view class="imaWD"><image src="../../static/images/WD.png"style="width: 18rpx;height: 18rpx; border-radius: 100%;" ></image></view>
			</view>
		</view>
		
		<view class="top">
			<view class="topone">
				<view class="top_one_ima"><image class="topima" src="../../static/images/ring_white.png" style="width: 60rpx;height: 60rpx;"></image></view>

				<view class="top_one_wz">2017-10-08</view>
				<view class="top_one_time">15:32:21</view>
				<view class="zw"><text>系统更新系哈哈哈哈哈哈哈哈哈哈哈哈姐姐南面西南合成公式是不锈钢的运动会哈哈哈哈哈哈哈哈</text></view>
			</view>
			<!-- 回复 -->
			<view class="toptwo">
				<view class="huifu">
					<image class="one" src="../../static/images/huifu.png"></image>
					<text id="tone">回复</text>
				</view>
				<view class="sc">
					<image class="two" src="/static/images/SC.png" style="width: 38rpx;height: 36rpx;"></image>
					<text id="ttwo">删除</text>
				</view>
				<view class="imaWD"><image src="../../static/images/WD.png"style="width: 18rpx;height: 18rpx; border-radius: 100%;" ></image></view>
			</view>
		</view>
		
		<view class="top">
			<view class="topone">
				<view class="top_one_ima"><image class="topima" src="../../static/images/ring_white.png" style="width: 60rpx;height: 60rpx;"></image></view>
		
				<view class="top_one_wz">2017-10-08</view>
				<view class="top_one_time">15:32:21</view>
				<view class="zw"><text>系统更新系哈哈哈哈哈哈哈哈哈哈哈哈姐姐南面西南合成公式是不锈钢的运动会哈哈哈哈哈哈哈哈</text></view>
			</view>
			<!-- 回复 -->
			<view class="toptwo">
				<view class="huifu">
					<image class="one" src="../../static/images/huifu.png"></image>
					<text id="tone">回复</text>
				</view>
				<view class="sc">
					<image class="two" src="/static/images/SC.png" style="width: 38rpx;height: 36rpx;"></image>
					<text id="ttwo">删除</text>
				</view>
				<!-- <view class="imaWD"><image src="../../static/images/WD.png"style="width: 18rpx;height: 18rpx; border-radius: 100%;" ></image></view> -->
			</view>
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
	height: auto;
	/* margin-top: 0rpx; */
	/* box-shadow: #C0C0C0 0rpx 0rpx 0rpx 5rpx; */
}
.topone {
	height: auto;
}
.topima {
	margin-top: 20rpx;
	margin-left: 60rpx;
	/* background-color: #007AFF; */
}
.imaWD {
	width: 20rpx;
	margin-top: -360rpx;
	margin-left: -600rpx;
	/* background-color: #007AFF; */
}
.top_one_wz {
	font-size: 25rpx;
	color: #999999;
	margin-left: 150rpx;
	margin-top: -60rpx;
}
.top_one_time {
	font-size: 25rpx;
	color: #999999;
	margin-left: 320rpx;
	margin-top: -33rpx;
}
.zw {
	height: auto;
	margin-top: 30rpx;
	line-height: 40rpx;
	margin-left: 25rpx;
	margin-right: 20rpx;
	color: #333333;
	font-size: 30rpx;
	/* font-weight: 500; */
	/* 首行缩进 */
	text-indent: 2em;
}
.toptwo {
	display: flex;
	border: 2rpx solid #f1f1f1;
	background-color: #ffffff;
	border-top: none;
	height: 80rpx;
	align-items: center;
}

.one {
	height: 35rpx;
	width: 30rpx;
	padding-top: 15rpx;
	margin-top: 50rpx;
}
.two {
	height: 40rpx;
	width: 60rpx;
	padding-top: 10rpx;
	margin-top: 50rpx;
}

.huifu {
	margin-left: 450rpx;
	display: flex;
	margin-bottom: 40rpx;
}

.sc {
	margin-left: 50rpx;
	display: flex;
	margin-bottom: 40rpx;
}
#tone {
	font-size: 25rpx;
	color: #bbbbbb;
	margin-left: 5rpx;
	margin-top: 60rpx;
}
#ttwo {
	font-size: 25rpx;
	color: #ff0000;
	margin-left: 0rpx;
	margin-top: 60rpx;
}
</style>

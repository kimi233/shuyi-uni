<template>
	<view>
		<view class="top">
			<view class="topone">头像</view>
			<view><image class="image" src="../../static/images/头像2.jpg" style="width:120rpx;height: 120rpx;border-radius: 100%;"></image></view>
			<view class="topthree"><image class="imag" src="../../static/images/更多.png" style="width: 30rpx;height: 35rpx;"></image></view>
		</view>
		<view class="mid">
			<view class="midone">昵称 :</view>
			<view class="midone_r"><input placeholder="林思鱼" /></view>
		</view>
		<view class="mid">
			<view class="midone">邮箱 :</view>
			<view class="midone_r"><input placeholder="65523355@qq.com" /></view>
		</view>
		<view class="mid">
			<view class="midone">手机 :</view>
			<view class="midone_r"><input placeholder="152866565635" /></view>
		</view>
		<view class="mid_two">
			<view class="midtwo">常住地址 :</view>
			<view class="midtwo_r">
				<textarea placeholder="贵州省贵阳市花溪区XXXXX镇XXXXXX村xxxx组xxxxxxxxx栋xxxxxx层xxxxx" maxlength="100" style="height: 300rpx;width: auto;"></textarea>
			</view>
		</view>
		<view class="x">
		<button class="bc">保存</button>
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
	height: 110rpx;
	/* background-color: #BBBBBB; */
	border-bottom: 1rpx solid #bbbbbb;
}
.topone {
	/* background-color: #007AFF; */
	width: 20%;
	margin-left: 30rpx;
	margin-top: 50rpx;
	/* border-bottom: 1rpx solid #bbbbbb; */
}
.topthree {
	margin-top: -90rpx;
	margin-left: 705rpx;
	/* background-color:  #FF0000; */
}
.image {
	/* background-color: #4CD964; */
	margin-left: 570rpx;
	margin-top: -85rpx;
}
.imag {
	/* margin-left: 700rpx; */
	/* margin-top: -600rpx; */
}
.mid {
	/* background-color: #F0AD4E; */
	height: 85rpx;
	border-bottom: 1rpx solid #bbbbbb;
}
.midone {
	/* background-color: #2C405A; */
	width: 40%;
	margin-top: 40rpx;
	margin-left: 30rpx;
}
.midone_r {
	/* background-color:  #4CD964; */
	margin-top: -50rpx;
	text-align: left;
	margin-left: 150rpx;
	color: #00BFFF;
}
.mid_two {
	/* background-color: #F0AD4E; */
	height: 280rpx;
	border-bottom: 1rpx solid #bbbbbb;
}
.midtwo {
	/* background-color: #2C405A; */
	width: 40%;
	margin-top: 40rpx;
	margin-left: 30rpx;
}
.midtwo_r {
	/* background-color:  #4CD964; */
	margin-top: 30rpx;
	text-align: left;
	margin-left: 30rpx;
}
.bc{
		color: #FFFFFF;
		font-size: 28rpx;
		margin-top: 100rpx;
		width: 500rpx;
		background-color: #00BFFF;
	}
</style>

<template>
	<view>
		<view class="top">
			<view class="tx"><textarea class="te" placeholder="这一刻的想法......" maxlength="200"></textarea></view>
		</view>
		<button class="fb">发表</button>
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
	/* background-color: #007AFF; */
	/* border-bottom: 1rpx solid #bbbbbb; */
	box-shadow: #808080 1rpx 1rpx 15rpx 1rpx;
	height: 500rpx;
}
.fb {
	color: #ffffff;
	font-size: 28rpx;
	margin-top: 100rpx;
	width: 520rpx;
	background-color: #00BFFF;
	/* border-radius: 100rpx; */
}
</style>

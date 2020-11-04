<template>
	<view>
		<tabs :currentIndex="currentIndex" @changTab="changeTabHandler">
			<!-- 信息 -->
			<tab tabName="信息" index="1">
				<!-- 中间内容 -->
				<view class="Lmid">
					<!-- 圈子名和头像 -->
					<view class="midone">
						<view class="circle"><image class="circletp" src="../../static/images/书2.jpg" style="width: 150rpx;height: 150rpx; border-radius: 10rpx;"></image></view>
						<view class="tpname">三屋w</view>
					</view>
					<!-- 简介 -->
					<view class="jj">
						<view class="jjName">简介</view>
						<view class="jjNR">
							<text>
								今哈哈哈哈哈哈哈哈今天上课觉得很经常技术的几句话大学哈哈哈哈呵呵好的环境斤斤计较看到看看今哈哈哈哈哈哈哈哈今天上课觉得很经常技术的几句话大学经济哈哈哈哈呵呵好的环境斤斤计较看到看看好好的简介哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈好好的简介哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
							</text>
						</view>
					</view>
				</view>
			</tab>
			<!-- 成员 -->
			<tab tabName="成员" index="2">
				<!-- 中间内容 -->
				<!-- 管理层 -->
					<view class="GLC">
						<view class="GLCname"><text>管理层(1)</text></view>
						<view class="GLCima">
							<view class="GLCone">
								<view class="GLY">
									<image class="circletp" src="../../static/images/after.jpg" style="width: 120rpx;height: 120rpx; border-radius: 100%;"></image>
								</view>
								<view class="name">黄蓉</view>
							</view>
							<view class="GLCone">
								<view class="GLY">
									<image class="circletp" src="../../static/images/notice.jpg" style="width: 120rpx;height: 120rpx; border-radius: 100%;"></image>
								</view>
								<view class="name">郭靖</view>
							</view>
							<view class="GLCone">
								<view class="GLY">
									<image class="circletp" src="../../static/images/头像2.jpg" style="width: 120rpx;height: 120rpx; border-radius: 100%;"></image>
								</view>
								<view class="name">杨过</view>
							</view>
						</view>
					</view>
					<!-- 其他成员 -->
					<view class="CY">
						<view class="CYname"><text>其他成员(200)</text></view>
						<view class="cyuan">
								<view class="tr">
									<image class="ima" src="../../static/images/头像2.jpg" style="width: 120rpx;height: 120rpx;border-radius: 50%;"></image>
									<view class="mz">肖石榴</view>
								</view>
								<view class="tr">
									<image class="ima" src="../../static/images/头像2.jpg" style="width: 120rpx;height: 120rpx;border-radius: 50%;"></image>
									<view class="mz">肖石榴</view>
								</view>
								<view class="tr">
									<image class="ima" src="../../static/images/头像2.jpg" style="width: 120rpx;height: 120rpx;border-radius: 50%;"></image>
									<view class="mz">肖石榴</view>
								</view>
								<view class="tr">
									<image class="ima" src="../../static/images/头像2.jpg" style="width: 120rpx;height: 120rpx;border-radius: 50%;"></image>
									<view class="mz">肖石榴</view>
								</view>
								<view class="tr">
									<image class="ima" src="../../static/images/头像2.jpg" style="width: 120rpx;height: 120rpx;border-radius: 50%;"></image>
									<view class="mz">肖石榴</view>
								</view>
								<view class="tr">
									<image class="ima" src="../../static/images/头像2.jpg" style="width: 120rpx;height: 120rpx;border-radius: 50%;"></image>
									<view class="mz">肖石榴</view>
								</view>
								<view class="tr">
									<image class="ima" src="../../static/images/头像2.jpg" style="width: 120rpx;height: 120rpx;border-radius: 50%;"></image>
									<view class="mz">肖石榴</view>
								</view>
								<view class="tr">
									<image class="ima" src="../../static/images/头像2.jpg" style="width: 120rpx;height: 120rpx;border-radius: 50%;"></image>
									<view class="mz">肖石榴</view>
								</view>
						</view>
					</view>
			</tab>
		</tabs>
	</view>
</template>

<script>
export default {
	data() {
		return {
			currentId: '' /* 控制被选中 */,
			currentIndex: '' /* 控制位置 */,
			brands: ['信息', '成员'],
			currentIndex: '1'
		};
	},

	onLoad() {},

	methods: {
		handleScroll(index) {
			this.currentId = index;
			this.currentIndex = Math.max(0, index - 1);
		},

		cl() {
			uni.showModal({
				title: '提示',
				content: '是否加入该圈子',
				success: function(res) {
					if (res.confirm) {
						console.log('确认');
					} else if (res.cancel) {
						console.log('取消');
					}
				}
			});
		},
		changeTabHandler(index) {
			this.currentIndex = index;
		}
	}
};
</script>

<style lang="scss" scoped>
//信息中间内容
.midone {
	height: 300rpx;
	border-bottom: 1rpx solid #dfdfdf;
}
.circle {
	margin-top: 100rpx;
	margin-left: 25rpx;
	text-align: center;
}
.tpname {
	font-size: 28rpx;
	margin-top: 10rpx;
	margin-left: 25rpx;
	text-align: center;
}
// 简介
.jj {
}
.jjName {
	margin-top: 20rpx;
	margin-left: 30rpx;
}
.jjNR {
	margin: 15rpx 20rpx;
	color: #666666;
	font-size: 28rpx;
}
// 成员
.GLCname{
	margin-top: 20rpx;
	margin-left: 20rpx;
}
.GLCima {
	height: 220rpx;
	width: 100%;
	display: inline-flex;
	box-shadow: #F4F5F6 0rpx 18rpx 0rpx 0rpx;
}
.GLY {
	margin-top: 30rpx;
	margin-left: 25rpx;
}
.name {
	font-size: 28rpx;
	margin-top: 10rpx;
	margin-left: 25rpx;
	text-align: center;
}
.xqin {
	width: 100%;
	height: 150rpx;
	font-size: 28rpx;
	margin-top: 10rpx;
	align-items: center;

	border-bottom: 1rpx solid #F1F1F1;
}
.CYname{
	margin-top: 40rpx;
	margin-left: 20rpx;
}
.cyuan{
	margin-top: 20rpx;
}
.tr {
	height: 165rpx;
	// background-color: red;
	display: flex;
	border-bottom: 1rpx solid #F1F1F1;
	// align-items: center;
	// text-align: center;
}
.ima {
	margin-top: 20rpx;
	margin-left: 20rpx;
}
.mz {
	font-size: 35rpx;
	margin-top: 55rpx;
	align-items: center;
	margin-left: 30rpx;
}

</style>

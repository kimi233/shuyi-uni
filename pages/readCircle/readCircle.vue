<template>
	<view>
		<!-- 头部圈子 -->
		<view class="top">
			<view class="topone">
				<navigator url="./readCircleXQ">
					<view class="circle"><image class="circletp" src="../../static/images/after.jpg" style="width: 120rpx;height: 120rpx; border-radius: 10rpx;"></image></view>
				</navigator>
				<view class="tpname">三味书屋w</view>
			</view>
			<view class="topone">
				<navigator url="./readCircleNR">
					<view class="circle"><image class="circletp" src="../../static/images/书3.jpg" style="width: 120rpx;height: 120rpx; border-radius: 10rpx;"></image></view>
				</navigator>
				<view class="tpname">三屋w</view>
			</view>
			<view class="topone">
				<view class="circle"><image class="circletp" src="../../static/images/书2.jpg" style="width: 120rpx;height: 120rpx; border-radius: 10rpx;"></image></view>
				<view class="tpname">三屋w</view>
			</view>
			<view class="topone">
				<view class="circle"><image class="circletp" src="../../static/images/after.jpg" style="width: 120rpx;height: 120rpx; border-radius: 10rpx;"></image></view>
				<view class="tpname">三屋wh</view>
			</view>
			<view class="topone">
				<view class="circle"><image class="circletp" src="../../static/images/gengduo.png" style="width: 120rpx;height: 120rpx; border-radius: 10rpx;"></image></view>
				<view class="tpname">更多圈子</view>
			</view>
		</view>
		<!-- 中间内容 -->
		<view class="under">
			<view class="show">
				<view class="showone">
					<view class="person">
						<view class="tou"><image class="imagetwo" src="../../static/images/头像2.jpg" style="width: 90rpx;height: 90rpx;border-radius: 50%;"></image></view>
						<view class="bn"><text class="name">爱丽丝</text></view>
						<view class="tw"><view class="time">2020-08-09 14:10</view></view>
						<!-- <view class="delate"@click="cl">
							<image class="imgethree" src="../../static/images/schu.png"style="width: 28rpx;height: 30rpx;"></image>
						</view> -->
					</view>
					<view class="zy">
						<text>
							《预见未来》哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈灌灌灌帆帆帆帆烦烦烦哈哈哈哈哈哈哈哈哈哈后哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈好好...
						</text>
					</view>
					<view class="tab">
						<view class="imgs">
							<image class="img" src="../../static/images/书1.jpg" style="width: 220rpx; height: 240rpx;"></image>
							<image class="img" src="../../static/images/书3.jpg" style="width: 220rpx; height: 240rpx;"></image>
							<image class="img" src="../../static/images/书2.jpg" style="width: 220rpx; height: 240rpx;"></image>
						</view>
					</view>
				</view>

				<view class="showtwo">
					<view class="dz">
						<image class="wave" src="../../static/images/zan.png"></image>
						<text id="t">9999</text>
					</view>
					<view class="pl">
						<image class="wave" src="../../static/images/pinglun.png" style="width: 38rpx;height: 36rpx;"></image>
						<text id="t">1.3w</text>
					</view>
				</view>
			</view>
			<view class="show">
				<view class="showone">
					<view class="person">
						<view class="tou"><image class="imagetwo" src="../../static/images/notice.jpg" style="width: 90rpx;height: 90rpx;border-radius: 50%;"></image></view>
						<view class="bn"><text class="name">爱丽丝</text></view>
						<view class="tw"><view class="time">2020-08-09 14:10</view></view>
					</view>
					<view class="zy"><text>《预见未来》今 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</text></view>
					<view class="book">
						<view class="bookone"><image class="booktp" src="../../static/images/书2.jpg" style="width: 130rpx; height: 180rpx;"></image></view>
						<view class="bookn"><text class="bookname">最强帝国副瑞士</text></view>
						<view class="zzn"><text class="zzname">雷迪</text></view>
					</view>
				</view>
				<view class="showtwo">
					<view class="dz">
						<image class="wave" src="../../static/images/zan.png"></image>
						<text id="t">9999</text>
					</view>
					<view class="pl">
						<image class="wave" src="../../static/images/pinglun.png" style="width: 38rpx;height: 36rpx;"></image>
						<text id="t">1.3w</text>
					</view>
				</view>
			</view>
			<view class="show">
				<view class="showone">
					<view class="person">
						<view class="tou"><image class="imagetwo" src="../../static/images/头像2.jpg" style="width: 90rpx;height: 90rpx;border-radius: 50%;"></image></view>
						<view class="bn"><text class="name">爱丽丝</text></view>
						<view class="tw"><view class="time">2020-08-09 14:10</view></view>
					</view>
					<view class="zy"><text>《预见未来》今 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</text></view>
				</view>

				<view class="showtwo">
					<view class="dz">
						<image class="wave" src="../../static/images/zan.png"></image>
						<text id="t">9999</text>
					</view>
					<view class="pl">
						<image class="wave" src="../../static/images/pinglun.png" style="width: 38rpx;height: 36rpx;"></image>
						<text id="t">1.3w</text>
					</view>
				</view>
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
/* 头部 */
.top {
	height: 220rpx;
	width: 100%;
	display: inline-flex;
	box-shadow: #f1f1f1 0rpx 18rpx 0rpx 0rpx;
}
/* .topone {
} */
.circle {
	margin-top: 30rpx;
	margin-left: 25rpx;
}
.tpname {
	font-size: 28rpx;
	margin-top: 10rpx;
	margin-left: 25rpx;
	text-align: center;
}
/* 中间 */
.under {
	line-height: 150rpx;
	/* 设置行高*/
}

.show {
	height: auto;
	margin-top: 40rpx;
	color: #f1f1f1;
}

.showone {
	/* 背景图片 */
	/* background-image: url(../../image/after.jpg); */
	color: #999999;
	height: auto;
	margin-top: 10rpx;
	border-radius: 50rpx;
}

.person {
	line-height: 20rpx;
	display: flex;
}

.tou {
	/* height: 50%; */
	/* display: block; */
}

.imagetwo {
	margin-top: 0rpx;
	margin-left: 20rpx;
}

.name {
	font-size: 30rpx;
	margin: 20rpx;
	top: 90rpx;
	color: #00bfff;
	/* background-color: #007AFF; */
}

.bn {
	height: 100%;
	margin-top: 20rpx;
	/* background-color: #007AFF; */
}
.tw {
	margin-top: -130rpx;
	margin-left: 500p;
}

.time {
	font-size: 20rpx;
	margin-top: 190rpx;
	margin-left: -110rpx;
}
.delate {
	margin-left: 400rpx;
	margin-top: 20rpx;
	background-color: #00BFFF;
	width: 28rpx;
	height: 30rpx;
}
.zy {
	margin-top: 10rpx;
	line-height: 40rpx;
	margin-left: 25rpx;
	margin-right: 20rpx;
	font-size: 28rpx;
	font-weight: 300rpx;
	color: #808080;
}
.tab {
	margin: 10rpx 10rpx;
}
.book {
	height: 240rpx;
	margin: 20rpx 30rpx;
	/* background-color: #007AFF; */
	box-shadow: #f1f1f1 0rpx 0rpx 10rpx 5rpx;
	border-radius: 8rpx;
}
.bookone {
	/* margin-top: 20rpx; */
}
.booktp {
	margin-top: 30rpx;
	margin-left: 30rpx;
	/* align-items: center; */
}
.bookn {
	margin-top: -260rpx;
	margin-left: 200rpx;
	font-size: 40rpx;
	color: #333333;
}
.zzn {
	font-size: 32rpx;
	color: #333333;
	margin-top: -100rpx;
	margin-left: 200rpx;
}
.imgs {
	display: flex;
	width: 95%;
	margin-left: 20rpx;
	margin-top: 10rpx;
}
.img {
	size: 100%;
	margin: 10rpx 12rpx;
}

.showtwo {
	display: flex;
	/* border: 2rpx solid  #F1F1F1; */
	background-color: #ffffff;
	border-top: none;
	height: 80rpx;
	align-items: center;
	box-shadow: #f1f1f1 0rpx 8rpx 0rpx 8rpx;
}

.wave {
	z-index: 3;
	right: 0;
	bottom: 0;
	opacity: 0.725;
	height: 40rpx;
	width: 40rpx;
	padding-top: 10rpx;
	margin-top: 50rpx;
	/* animation: wave 10s linear infinite;  */
}

.dz {
	margin-left: 450rpx;
	display: flex;
	/* background-color: #007AFF; */
}

.pl {
	margin-left: 80rpx;
	display: flex;
	/* background-color: #007AFF; */
}
#t {
	font-size: 25rpx;
	color: #bbbbbb;
	margin-left: 5rpx;
	margin-top: 10rpx;
	/* background-color: #4CD964; */
}
</style>

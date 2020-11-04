<template>
	<view class="show">
		
		<view class="mid">
			<view class="zt">
				<view class="zt1">
					温馨提示：进入到线下交易环节的订单将不能取消预约。取消预约将影响您在“书易”的信誉。
				</view>
				
			</view>
			<view class="midone">
				
				<view class="zhengti">
					<image class="imag" src="../../static/images/ap.jpg" style="width: 125rpx; height: 170rpx;"></image>
					<view class="midwz">致敬老师</view>
				</view>
				<view >
					<view class="s1">作者：
						<view class="s6">汪魏青</view>
					</view>
					<view class="s2">出版社：浙江大学出版社</view>
					<view class="s7">
						<view class="s3">出版时间：2017-09-10</view>
						<view class="s4">广东省立中山图书馆馆藏，广东中山图书馆
							<!-- <view class="s5">等待持书人还书</view> -->
						</view>
						
						
					</view>
					
				</view>
				
			</view>
		
				<view class="s8">
					<button type="warn" class="btn1"><view class="wz">取消预约</view></button>
				</view>
		</view>
		
	</view>
</template>

<script></script>

<style>
.show{
	/* margin-bottom: auto; */
	width: auto;
	height: auto;
}
/* .bt{
	margin-top: 1045rpx;
} */
.mid {	
	margin-top:20rpx;
	width: 100%;
	height: 200rpx;
	/* background-color: #007AFF; */
	/* border: #808080 1rpx solid; */
}
.zt1{
	color: #DD524D;
	font-size: 22rpx;
	margin-left: 50rpx;
	line-height: center;
	margin-top: 40rpx;
}
.zt{
	height: 100rpx;
	border-bottom:solid 1rpx;
	/* border-top:solid 1rpx; */
	/* margin-bottom: -20rpx; */
	color: #BBBBBB;
}
.midone {
	width: 100%;
	height: 200rpx;
	font-size: 30rpx;
	margin-top: 35rpx;
	align-items: center;
	border-bottom: 1rpx solid #bbbbbb;
}
.zhengti {
	display: flex;
}
.imag{
	margin-left:30rpx;
}
.midwz {
	font-size: 28rpx;
	height:35rpx;
	margin-top: -5rpx;
	align-items: center;
	margin-left: 30rpx;
	/* background-color:  #333333; */
}
.s1{
	font-size: 20rpx;
	height:35rpx;
	margin-top: -120rpx;
	align-items: center;
	margin-left: 190rpx;
	color: #999999;
	display: flex;
}
.s2{
	font-size: 20rpx;
	height:35rpx;
	margin-top: 0rpx;
	align-items: center;
	margin-left: 190rpx;
	color: #999999;
}
.s3{
	font-size: 20rpx;
	height:35rpx;
	margin-top: 0rpx;
	align-items: center;
	margin-left: 190rpx;
	color: #999999;
}
.s4{
	font-size: 20rpx;
	height:35rpx;
	margin-top: 10rpx;
	align-items: center;
	margin-left: 190rpx;
	color: #F0AD4E;
}
.s5{
	font-size: 20rpx;
	height:35rpx;
	margin-top: -26rpx;
	align-items: center;
	margin-left: 100rpx;
	color: #555555;
}
.s6{
	color: #00BFFF;
	
}

.s7{
	height:35rpx;
	align-items: center;
	width: auto;
	/* display: flex; */
}

.s8{
	text-align: center;
	text-align: center;
	margin-top: 120rpx;
}
.btn1{
	color: #F8F8F8;
	width: 655rpx;
	/* height: 55rpx; */
	margin-left: 50rpx;
	margin-right: -30rpx;
	/* margin-top: -60rpx; */
	border-radius: 15rpx;
	}


.flesh{
	
}
.wz{
	font-size: 28rpx;
	margin-top: 8rpx;
	height: 90rpx;
	
}
.shumu {
	margin-left: 180rpx;
	font-size: 25rpx;
	margin-top: -130rpx;
	color:   #999999;
	width: 120rpx;
	display: block;
}
.shumuone{
	margin-left: 180rpx;
	font-size: 25rpx;
	color: #999999;
	/* background-color: #4CD964; */
}
.shumutwo{
	margin-left: 250rpx;
	font-size: 20rpx;
	color:  #00BFFF;
	margin-top: -30rpx;
	/* background-color: #F0AD4E; */
}
.shumuthree{
	margin-top: 10rpx;
	font-size: 25rpx;
	color: #F0AD4E;
	margin-left: 180rpx;
}

</style>

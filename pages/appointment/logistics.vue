<template>
	<view class="show">
		
		<view class="mid">
			<view class="zt">
				<view class="zt1">
					订单编号：156487912
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
				<view class="dt">
					订单承运：书易物流
				</view>
				<view class="ti">
					预计到达：2017-10-20
				</view>
			</view>
		</view>
		
		<!--step样式表-->
		<view class="step">
			<view class="package-status">
				<view class="status-box">
					<view class="status-list">
						<view class="lists">
							<view class="status-content-before">您的订单开始处理</view>
							<view class="status-time-before">2019-8-21 07:00:49</view>
							<view class="status-line"></view>
						</view>
						<view class="lists">
							<view class="status-content-before">卖家发货</view>
							<view class="status-time-before">2019-8-22 07:00:49</view>
							<view class="status-line"></view>
						</view>
						<view class="lists">
							<view class="status-content-before">发往深圳中转站</view>
							<view class="status-time-before">2019-8-23 07:00:49</view>
							<view class="status-line"></view>
						</view>
						<view class="lists">
							<view class="status-content-before">到达深圳</view>
							<view class="status-time-before">2019-8-24 07:00:49</view>
							<view class="status-line"></view>
						</view>
						<view class="lists">
							<view class="status-content-before">快件到达 潮汕中心</view>
							<view class="status-time-before">2019-8-24 07:00:49</view>
							<view class="status-line"></view>
						</view>
						<view class="lists lastest">
							<view class="status-content-latest">上门取件</view>
							<view class="status-time-latest">2019-8-24 07:00:49</view>
							<view class="status-line"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script></script>

<style>
	/* step表 */
	.step{
		margin-top: 210rpx;
		margin-left: 50rpx;
		font-size: 25rpx;
	}
	
	.lists{
		list-style:none;
		
	}
	.package-status .status-list .lists{
		border-left: 2rpx solid #00BFFF;
		text-align: left;
	}
	.package-status{
		padding: 18rpx 0 0 0;
	}
	.status-list{
		margin: 0;
		padding: 0;
		margin-top: -5rpx;
		padding-left: 8rpx;
		list-style: none;
	}
	
	/* .list{
		border-left:2rpx solid #0278D8;
		text-align: left;
	} */
	.package-status .status-list .lists {
	}
	
	.package-status .status-list .lists:before {
		/* 流程点的样式 */
		content: '';
		border: 3rpx solid #00BFFF;
		background-color: #00BFFF;
		display: inline-block;
		width: 6rpx;
		height: 6rpx;
		border-radius: 10rpx;
		margin-left: -7rpx;
		margin-right: 10rpx;
		
	}
	
	.package-status .status-box{
		overflow: hidden;
	}
	
	.package-status .status-list .lists{
		height: auto;
		width: 95%;
	}
	
	.package-status .status-list {
		margin-top: -8rpx;
	}
	.package-status .status-box {
		position: relative;
	}
	.package-status .status-box:before{
		content: "";
		background-color: #f3f3f3;
		display: block;
		position: absolute;
		top: -8rpx;
		left: 20rpx;
		width: 20rpx;
		height: 4rpx;
	}
	.status-list{
		margin-top: 0rpx;
	}
	.status-list .lists:not(:first-child){
		padding-top: 10rpx;
	}
	.status-content-before{
		text-align: left;
		margin-left: 25rpx;
		margin-top: -20rpx;
	}
	.status-content-latest{
		text-align: left;
		margin-left: 25rpx;
		color: #00BFFF;
		margin-top: -20rpx;
	}
	.status-time-before{
		text-align: left;
		margin-left: 25rpx;
		font-size: 15rpx;
		margin-top: 5rpx;
		
	}
	.status-time-latest{
		text-align: left;
		margin-left: 25rpx;
		color: #00BFFF;
		font-size: 10rpx;
		margin-top: 5rpx;
	}
	.status-line{
		border-bottom: 1rpx solid #ccc;
		margin-left: 25rpx;
		margin-top: 10rpx;
	}
	
	.lists{
		line-height: 30rpx;
		color: #616161;
	}
	
	.list{
		padding: 0 20rpx;
		background-color: #F8F8F8;
		margin: 10rpx 0 0 25rpx;
		border: 1rpx solid #EBEBEB;
	}
	/* step表 */
	
.show{
	/* margin-bottom: auto; */
	width: auto;
	height: auto;
	
}
.mid {	
	margin-top:20rpx;
	width: 100%;
	height: 200rpx;
	/* background-color: #007AFF; */
	/* border: #808080 1rpx solid; */
}
.zt1{
	color: #808080;
	font-size: 22rpx;
	margin-left: 50rpx;
	line-height: center;
	margin-top: 20rpx;
}
.zt{
	height: 50rpx;
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
	
	display: flex;
	border-bottom: #BBBBBB 1rpx solid;
}
.dt{
	margin-top: 30rpx;
	margin-left: 50rpx;
	font-size: 23rpx;
	color: #808080;
	margin-bottom: 30rpx;
}
.ti{
	color: #00BFFF;
	margin-top: 30rpx;
	font-size: 23rpx;
	margin-left: 230rpx;
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

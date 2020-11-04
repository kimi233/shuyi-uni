<template>
	<view>
		<view class="top">
		<view class="header-input">
			<input @input="goToSearch" placeholder="输入书名查找" placeholderStyle="color:#BBBBBB" type="text"></input>
			<view>
				<image class="image" src="../../static/images/search_icon.png">
				</image>
			</view>
		</view>
		</view>
		<view class="mid">
			<!--预约中开始-->
		<view class="zt">
			<view class="zt1">
				线上预约中
			</view>
			
		</view>
		<view class="midone">
			
			<view class="zhengti">
				<image class="imag" src="../../static/images/书2.jpg" style="width: 125rpx; height: 170rpx;"></image>
				<view class="midwz">致敬老师</view>
			</view>
			<view >
				<view class="s1">预约时间：2017-11-08 <image style="width: 30rpx; height: 30rpx;" src="../../static/images/dingwei.png"></image>
					<view class="s6">1.2km</view>
				</view>
				<view class="s2">上一位借书人：爱哭的猫</view>
				<view class="s7">
					<view class="s3">上一次还书期：2017-09-10</view>
					<view class="s4">当前状态：
						<view class="s5">等待持书人还书</view>
					</view>
						<view class="s8">
							<navigator url="abolish">
								<button class="btn1">
									<view class="wz">取消预约</view>
								</button>
							</navigator>
						</view>
					
				</view>
				
			</view>
			
		</view>
		<!--预约成功开始-->
		<view class="zt">
			<view class="zt1">
				预约成功
			</view>
			
		</view>
		<view class="midone">
			
			<view class="zhengti">
				<image class="imag" src="../../static/images/书2.jpg" style="width: 125rpx; height: 170rpx;"></image>
				<view class="midwz">致敬老师</view>
			</view>
			<view >
				<view class="s1">预约时间：2017-11-08 <image style="width: 30rpx; height: 30rpx;" src="../../static/images/dingwei.png"></image>
					<view class="s6">1.2km</view>
				</view>
				<view class="s2">上一位借书人：爱哭的猫</view>
				<view class="s7">
					<view class="s3">上一次还书期：2017-09-10</view>
					<view class="s4">当前状态：
						<view class="s5">交易成功</view>
					</view>
						<view class="s8">
							<navigator url="abolish">
								<button class="btn3">
									<view class="wz">查看详情</view>
								</button>
							</navigator>
						</view>
				</view>
			</view>
		</view>
		<!--预约失败开始-->
		<view class="zt">
			<view class="zt1">
				预约失败
			</view>
			
		</view>
		<view class="midone">
			
			<view class="zhengti">
				<image class="imag" src="../../static/images/书2.jpg" style="width: 125rpx; height: 170rpx;"></image>
				<view class="midwz">致敬老师</view>
				
			</view>
			<view >
				<view class="s1">预约时间：2017-11-08 <image style="width: 30rpx; height: 30rpx;" src="../../static/images/dingwei.png"></image>
					<view class="s6">1.2km</view>
				</view>
				<view class="s2">上一位借书人：爱哭的猫</view>
				<view class="s7">
					<view class="s3">上一次还书期：无</view>
					<view class="s4">当前状态：
						<view class="s5">预约失败，交易终止</view>
					</view>
					<view class="s8">
						<button class="btn5"><view class="wz1">删除</view></button>
					</view>
				</view>
			</view>
		</view>
		<!--预约失败结束-->
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
	.top{
		/* background-color: #007AFF; */
		height: 90rpx;
		box-shadow: #E3E3E3 2rpx 10rpx 5rpx 0rpx;
	}
	.header-input {
	    margin-left: 28rpx;
	    margin-top: 20rpx;
	    width: 694rpx;
	    height: 66rpx;
	    border-radius: 36rpx;
	    background-color: rgba(245,245,245,0.9);
	    border: 1rpx solid #dfdfdf;
	    display: flex;
	    flex-direction: row;
		/* box-shadow: #808080 1rpx 1rpx 15rpx 1rpx; */
	} 
	.header-input input {
	    margin-left: 31rpx;
	    width: 564rpx;
	    height: 66rpx;
	    line-height: 66rpx;
	    /* border-right: 1rpx solid #dfdfdf; */
	    font-size: 28rpx;
	}
	
	.header-input view {
	    width: 96rpx;
	    height: 66rpx;
	}
	
	.image {
	    margin-left: 20rpx;
	    margin-top: 11rpx;
	    width: 55rpx;
	    height: 55rpx;
	}
	.mid {
		/* margin-top:30rpx; */
		width: 100%;
		height: auto;
		/* background-color: #007AFF; */
		/* box-shadow: #808080 1rpx 1rpx 15rpx 1rpx; */
	}
	.zt{
		/* height: 40rpx; */
		border-bottom:solid 1rpx;
		/* border-top:solid 1rpx; */
		margin-top: -5rpx;
		height: 60rpx;
		color: #BBBBBB;
	}
	.zt1{
		color: #00BFFF;
		font-size: 22rpx;
		margin-left: 50rpx;
		line-height: center;
		margin-top: 25rpx;
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
		width: 100%;
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
		width: auto;
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
		margin-top: 0rpx;
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
		color: #DD524D;
		
	}
	
	.s7{
		height:35rpx;
		align-items: center;
		width: auto;
		/* display: flex; */
	}
	
	.s8{
		text-align: center;
	}
	.btn1{
		color: #F8F8F8;
		width: 137rpx;
		height: 55rpx;
		margin-right: 20rpx;
		margin-top: -60rpx;
		background-color: #00BFFF;
		border-radius: 15rpx;
		}
		.btn3{
				color: #F8F8F8;
				width: 137rpx;
				height: 55rpx;
				margin-right: 20rpx;
				margin-top: -60rpx;
				background-color: #4CD964;
				border-radius: 15rpx;
				}
		.wz{
			font-size: 16rpx;
			margin-top: 8rpx;
			/* width: 137rpx; */
			margin-left: 5rpx;
			text-align: center;
			position: absolute;
		}
		.btn5{
			color: #F8F8F8;
			width: 137rpx;
			height: 55rpx;
			margin-right: 20rpx;
			margin-top: -60rpx;
			background-color: #DD524D;
			border-radius: 15rpx;
			text-align: center;
			}
	.wz1{
		font-size: 16rpx;
		margin-top: 8rpx;
		/* width: 137rpx; */
		margin-left: 20rpx;
		text-align: center;
		position: absolute;
	}		
</style>

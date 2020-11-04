<template>
	<view class="show">
		<view class="midone">
			<view class="zhengti">
				<image class="imag" src="../../static/images/C.jpg" style="width: 125rpx; height: 170rpx;"></image>
				<view class="midwz">C++ Printer Plus</view>
			</view>
			<view >
				<view class="s1">作者：
					<view class="s6">汪魏青</view>
				</view>
				<view class="s2">出版社：浙江大学出版社</view>
				<view class="s7">
					<view class="s3">出版时间：2017-09-10</view>
					<view class="s4">
						C++程序设计经典教程，畅销30年的C++大百科全书全新升级，经典C++入门教程十年新版再现，孟岩、高博倾力推荐，赠送价值99元的e读版电子书及在线实验环境，赠送大尺寸全书思维导图，赠199元训练营
					</view>
				</view>
			</view>
		</view>
		
		<view class="content">
			<view class="b1">
				馆外流通
			</view>
			<view class="b1">
				馆藏的书
			</view>
			<view class="b3">
				可借优先
			</view>
			<view class="b3">
				距离优先
			</view>
		</view>
		
		<!--可预约-->
		<view class="all">
			<view class="user">
				<view class="imag">
					<image src="../../static/images/user.jpg" style="width: 70rpx; height: 70rpx;border-radius: 50%;"></image>
				</view>
				<view class="person">
					<view class="tou">爱书的猫</view>
					<view class="time">归还日期：2017-05-06</view>
					<view class="option">
						<view>
							<image src="../../static/images/位置.png"  style="width: 30rpx; height: 30rpx;"></image>
						</view>
						<view class="">1.2km</view>
					</view>
				</view>
			</view>
			<view class="tx">
				<view class="" style="color: #007AFF;">可预约</view>
				<view class="get1">已有</view>
				<view class="count" >1</view>
				<view class="">人预约</view>
			</view>
			<view class="btns">
				<view class="btn">
					<button class="btn1" style="background-color: #4CD964;  width:120rpx ;">借走</button>
				</view>
				<view class="btn">
					<button class="btn1">在馆预约</button>
				</view>
				<view class="btn">
					<button class="btn1"  style="background-color: #F0AD4E; width:170rpx ;">加入借书车</button>
				</view>
			</view>
		</view>
		
		<!--可借-->
		<view class="all">
			<view class="user">
				<view class="imag">
					<image src="../../static/images/user.jpg" style="width: 70rpx; height: 70rpx;border-radius: 50%;"></image>
				</view>
				<view class="person">
					<view class="tou">哈利波特</view>
					<view class="time">归还日期：2017-05-06</view>
					<view class="option">
						<view>
							<image src="../../static/images/位置.png"  style="width: 30rpx; height: 30rpx;"></image>
						</view>
						<view class="">1.2km</view>
					</view>
				</view>
			</view>
			<view class="tx">
				<view class="" style="color: #4CD964;">可借</view>
				<view class="get1">已有</view>
				<view class="count" style="color: #4CD964;"  >0</view>
				<view class="">人预约</view>
			</view>
			<view class="btns">
				<view class="btn">
					<button class="btn1" style="background-color: #4CD964;  width:120rpx ;">借走</button>
				</view>
				<view class="btn">
					<button class="btn1">在馆预约</button>
				</view>
				<view class="btn">
					<button class="btn1"  style="background-color: #F0AD4E; width:170rpx ;">加入借书车</button>
				</view>
			</view>
		</view>
		
		<!--不可借-->
		<view class="all">
			<view class="user">
				<view class="imag">
					<image src="../../static/images/user.jpg" style="width: 70rpx; height: 70rpx;border-radius: 50%;"></image>
				</view>
				<view class="person">
					<view class="tou">哈利波特</view>
					<view class="time">归还日期：2017-05-06</view>
					<view class="option">
						<view>
							<image src="../../static/images/位置.png"  style="width: 30rpx; height: 30rpx;"></image>
						</view>
						<view class="">50km</view>
					</view>
				</view>
			</view>
			<view class="tx">
				<view class="" style="color: #DD524D;">不可借</view>
				<view class="get1">数量：</view>
				<view class="count" style="color: #DD524D;"  >1</view>
			</view>
			<view class="btns">
				<view class="btn">
					<button class="btn1" style="background-color: #C8C7CC;  width:120rpx ;">借走</button>
				</view>
				<view class="btn">
					<button class="btn1" style="background-color: #C8C7CC;">在馆预约</button>
				</view>
				<view class="btn">
					<button class="btn1"  style="background-color: #C8C7CC; width:170rpx ;">加入借书车</button>
				</view>
			</view>
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
	
	.btns{
		margin-top: 45rpx;
		display: flex;
		margin-left: 260rpx;
		}
	.btn1{
		background-color: #00BFFF;
		color: #F8F8F8;
		font-size: 21rpx;
		width: 145rpx;
		height: 60rpx;
		margin-right: 20rpx;
		align-items: center;
	}
	.all{
		border-bottom: 1rpx solid #C8C7CC;
	}
	.get1{
		margin-left: 30rpx;
	}
	
	.count{
		margin-left: 10rpx;
		margin-right: 10rpx;
		color: #00BFFF;
	}
	.tx{
		display: flex;
		font-size: 25rpx;
		color: #555555;
		margin-left: 140rpx;
	}
	.tou{
		color: #F0AD4E;
		font-size: 23rpx;
		align-items: center;
		
	}
	.time{
		font-size: 25rpx;
		color: #555555;
		margin-left: 60rpx;
	}
	.person{
		display: flex;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}
	.option{
		color: #999999;
		font-size: 23rpx;
		display: flex;
		margin-left: 50rpx;
	}
	.user{
		margin-top: 50rpx;
		margin-left: 25rpx;
		display: flex;
	}
	
	.show{
		width: auto;
		height: auto;
	}
	.content{
		height: 75rpx;
		background-color: #F1F1F1;
		font-size: 23rpx;
		/* margin-top: 10rpx; */
		text-align: center;
		align-items: center;
		display: flex;
	}
	.b1{
		background-color:#00BFFF ;
		width: 100rpx;
		border-radius: 10rpx;
		height: 35rpx;
		/* object-position: initial; */
		margin-left: 70rpx;
		color: #F1F1F1;
		margin-bottom: 10rpx;
		align-items: center;
		
		}
		
		.b3{
			width: 100rpx;
			border-radius: 10rpx;
			height: 35rpx;
			margin-left: 70rpx;
			color: #999999;
			border: #C8C7CC 2rpx solid;
			margin-bottom: 10rpx;
			align-items: center;
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
		height: 340rpx;
		font-size: 30rpx;
		margin-top: 35rpx;
		align-items: center;
		/* background-color: #007AFF; */
		/* border-bottom: 1rpx solid #bbbbbb; */
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
		font-size: 25rpx;
		height:150rpx;
		margin-top: 30rpx;
		align-items: center;
		margin-left: 50rpx;
		color: #555555;
		width: 88%;
		/* background-color: #4CD964; */
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
	
	
	.dt{
		margin-top: 30rpx;
		margin-left: 50rpx;
		font-size: 23rpx;
		color: #808080;
		margin-bottom: 30rpx;
	}
	.ti{
		color: #007AFF;
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
		color:  #007AFF;
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

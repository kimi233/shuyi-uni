<template>
	<view>
		<!-- 导航栏 -->
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/back.png" style="width: 60rpx; height: 60rpx;"></image>
			<view class="tit1">图书详情</view>
			<share>
			<image class="im"  src="../../static/images/分享1.png" style="width: 50rpx; height: 50rpx;"></image>
			</share>
			
			</view>
			<!-- 图片背景 -->
			<view class="bg">
				<image class="ima" src="../../static/images/封面.png" style="width: 200rpx; height: 300rpx;"></image>
			</view>
			<view class="table">
			<view class="tit">书名</view>
			<view class="tex">作者：</view>
			<view class="tex">出版社：</view>
			<view class="tex">出版日期：</view>
			<view class="ta">
			<view class="tex1">馆藏：广东省图书馆、广东中山图书馆、....</view>
			<image class="imag" src="../../static/images/更多.png"style="width: 40rpx; height: 40rpx;"></image>
			</view>
			<view class="ta">
			<view class="tex1">书易读者：受打击啊、的骄傲是.....</view>
			<image class="imag" src="../../static/images/更多.png"style="width: 40rpx; height: 40rpx;"></image>
			</view>
			</view>
			<!-- 图书简介 -->
			<view class="jian">
				<view class="tit2">图书简介</view>
				<view class="text">光大证券首席金融业分析师王一峰认为，自7月份开始，货币市场短期与中长期资金利率运行出现明显分化迹象。</view>
			</view>
			
			<!-- 作者简介 -->
			<view class="jian">
				<view class="tit2">作者简介</view>
				<view class="text">光大证券首席金融业分析师王一峰认为，自7月份开始，货币市场短期与中长期资金利率运行出现明显分化迹象。</view>
			</view>
			<!-- 书评 -->
			<view class="lis">
				<view class="tit2">书评</view>
				<view class="li">
					<image class="toux" src="../../static/images/头像.jpg" style="width: 80rpx; height: 80rpx;"></image>
				<view class="name">爱书的猫</view>
				<view class="vip">LV.11</view>
				<view class="time">2017-05-05  15:32</view>
				</view>
				<view class="text1">光大证券首席金融业分析师王一峰认为，自7月份开始，货币市场短期与中长期资金利率运行出现明显分化迹象。</view>
			<view class="li">
				<image class="toux" src="../../static/images/头像.jpg" style="width: 80rpx; height: 80rpx;"></image>
			<view class="name">爱书的猫</view>
			<view class="vip">LV.11</view>
			<view class="time">2017-05-05  15:32</view>
			</view>
			<view class="text1">光大证券首席金融业分析师王一峰认为，自7月份开始，货币市场短期与中长期资金利率运行出现明显分化迹象。</view>
			</view>
			<!-- 类似的书 -->
			<view class="jian1">
				<view class="tit2">类似的书</view>
				<view>
					<image class="image" src="../../static/images/封面.png"></image>
					<image class="image" src="../../static/images/封面.png"></image>
					<image class="image" src="../../static/images/封面.png"></image>
					<image class="image" src="../../static/images/封面.png"></image>
					<image class="image" src="../../static/images/封面.png"></image>
				</view>
			</view>
			<!-- 底部 -->
			<view class="btn">
				<button class="btn1">借书</button>
				<button class="btn2">收藏</button>
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
.tab1 {
	margin-top: 69rpx;
		display: flex;
	}
	.tit1 {
		margin-top: 9rpx;
		color: #555555 ;
		/* margin-left: 215rpx; */
		font-size: 45rpx;
	}
	
	.back {
		margin-top: 18rpx;
		margin-left: 10rpx;
	}
	.im{
		margin-top: 15rpx;
		margin-left: 420rpx;
	}
	.ima{
		margin-top: 20rpx;
        margin-left: 260rpx; 
		 -moz-box-shadow:2px 2px 10px #06c;
		 -webkit-box-shadow:2px 2px 10px #06c;
		 box-shadow:2px 2px 10px #06c;
	}
	.bg{
		height: 350rpx;
		width: 95%;
		margin-top: 18rpx;
		margin-left: 18rpx;
		background-color: #F8F8F8;
		 -moz-box-shadow:0 0 10px #06c;
		 -webkit-box-shadow:0 0 10px #06c;
		 box-shadow:0 0 10px #06c;
	}
	.tit{
		margin: 20rpx 20rpx;
	}
	.tex{
		margin: 10rpx 20rpx;
		color: #8F8F94;
		font-size: 30rpx;
	}
	.tex1{
		margin: 10rpx 10rpx;
		margin-top: 20rpx;
		color: #8F8F94;
		height: 30rpx;
		width: 660rpx;
		font-size: 30rpx;
	}
	.ta{
		display: flex;
	}
	.imag{
		/* margin-left: 150rpx; */
		margin-top: 20rpx;
	}
	.table{
		height: 360rpx;
		border-bottom: 1rpx solid #C0C0C0;
	}
	.jian{
		height: 240rpx;
		border-bottom: 1rpx solid #C0C0C0;
	}
	.jian1{
		height: 240rpx;
		/* border-bottom: 1rpx solid #C0C0C0; */
	}
	.tit2{
		margin: 20rpx 50rpx;
		color: #F0AD4E;
	}
	.text{
		margin: 20rpx 20rpx;
		font-size: 32rpx;
		color: #808080;
	}
	.lis{
		height: 500rpx;
		border-bottom: 1rpx solid #C0C0C0;
	}
	.toux{
		border-radius: 50%;
		margin: 20rpx 20rpx;
	}
	.li{
		display: flex;
	}
	.name{
		color: #00AAFF;
		margin-top: 35rpx;
		font-size: 30rpx;
	}
	.vip{
		color: #F0AD4E;
		font-size: 25rpx;
		border-radius: 10rpx;
		border:1rpx solid #F0AD4E;
		height: 35rpx;
		margin-top: 38rpx;
		background-color: #FFFFFF;
		text-align: center;
		width: 80rpx;
		margin-left: 10rpx;
	}
	.time{
		color: #8F8F94;
		font-size: 25rpx;
		margin-left: 200rpx;
		margin-top: 37rpx;
	}
	.text1{
		margin: 10rpx 20rpx;
		font-size: 25rpx;
		margin-left: 100rpx;
		color: #808080;
	}
	.image{
		width: 100rpx;
		height: 150rpx;
		margin: 10rpx 20rpx;
		margin-left: 26rpx;
	}
	.btn{
		display: flex;
	}
	.btn1{
		width: 50%;
		margin-left: 0rpx;
		background-color:#00AAFF ;
		color: #FFFFFF;
		border-radius: 0rpx;
	}
	.btn2{
		width: 50%;
		margin-right: 0rpx;
		background-color: #F0AD4E;
		color: #FFFFFF;
		border-radius: 0rpx;
	}
</style>

<template>
	<view>
		<view class="fenl" mode="aspectFill" @click.stop="ShowHidden=!ShowHidden">
			<image class="shua" src="../../static/images/分类.png" style="width: 45rpx; height: 45rpx;"></image>
			<view class="tit1">分类</view>
			</view>
			<!-- 弹出下拉筛选框 -->
			<view class="Array" v-if="ShowHidden">
				<view class="ty">
				<view class="type" mode="aspectFill" @click.stop="type=!type1">通俗分类</view>
				<view class="type" mode="aspectFill" @click.stop="type=!type2">中图法分类</view>
				</view>
				<view class="d4"></view>
					<view class="side">
						
				<nav class="nav1" v-if="Type1">
					<ul>
						<li>小说作品</li>
						<view class="liBottomBorder"></view>
						<li>人文社科</li>
						<view class="liBottomBorder"></view>
						<li>品质生活</li>
						<view class="liBottomBorder"></view>
						<li>两性情感</li>
						<view class="liBottomBorder"></view>
						<li>人文社科</li>
						<view class="liBottomBorder"></view>
						<li>成功励志</li>
						<view class="liBottomBorder"></view>
						<li>经济管理</li>
						<view class="liBottomBorder"></view>
						<li>文学作品</li>
						<view class="liBottomBorder"></view>
						<li>文化艺术</li>
						<view class="liBottomBorder"></view>
						<li>自然科学</li>
						<view class="liBottomBorder"></view>
						<li>亲子少儿</li>
						<view class="liBottomBorder"></view>
						<li>计算机</li>
						<view class="liBottomBorder"></view>
						<li>培训考试</li>
					</ul>
				</nav>
				<nav class="nav2" v-else="Type2">
					<ul>
						<li>A</li>
						<view class="liBottomBorder"></view>
						<li>人文社科</li>
						<view class="liBottomBorder"></view>
						<li>品质生活</li>
						<view class="liBottomBorder"></view>
						<li>两性情感</li>
						<view class="liBottomBorder"></view>
						<li>人文社科</li>
						<view class="liBottomBorder"></view>
						<li>成功励志</li>
						<view class="liBottomBorder"></view>
						<li>经济管理</li>
						<view class="liBottomBorder"></view>
						<li>文学作品</li>
						<view class="liBottomBorder"></view>
						<li>文化艺术</li>
						<view class="liBottomBorder"></view>
						<li>自然科学</li>
						<view class="liBottomBorder"></view>
						<li>亲子少儿</li>
						<view class="liBottomBorder"></view>
						<li>计算机</li>
						<view class="liBottomBorder"></view>
						<li>培训考试</li>
					</ul>
				</nav>
			</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ShowHidden:false,
				Type:true,
			}
		},
		methods: {
			//点击页面事件，隐藏需要隐藏的区域
			HiddenClick(){
				this.ShowHidden=false
				this.Type=false
			},
		},
		mounted(){
			
		}
	}
</script>

<style>
	.ty{
		display: flex;
	}
	.type{
		margin-left: 40rpx;
		margin-top: 20rpx;
		width: 200rpx;
		height: 100rpx;
	}
.Array{
		width: 500rpx;
		position: absolute;
		height: 100%;
		background-color: #F8F8F8;
		right: 0rpx;
		margin-top: 20rpx;
		z-index: 99;}
	.side{
			width: 250rpx;
			line-height: 75rpx;
			margin-left: 50rpx;
			/* border-bottom: 1rpx solid #007AFF; */
			/* background-color: #007AFF; */
			/* li{
				height: 150rpx;
				text-align: center;
				font-size: 30rpx;
			} */
			}
			.liBottomBorder{
				/* border-bottom: 1rpx solid #007AFF; */
				border: 0.1rpx solid #C8C7CC;
				margin-top: 20rpx;
			}
		
		.d4{
			width: 0rpx;
			height: 0rpx;
			margin-left: 150rpx;
			margin-top: -20rpx;
			border-width: 20rpx;
			border-color: transparent #007AFF transparent transparent;
			transform: rotate(90deg);
		}
	
	.shua {
		margin-top: 18rpx;
		margin-left: 250rpx;
	
	}
	
	.tit1 {
		margin-top: 15rpx;
		color: #808080;
		margin-left: 10rpx;
		font-size: 36rpx;
	}
	.fenl{
		display: flex;
	}
</style>

<template>
	<view class="all">
		<!-- <view class="">
			<button style="font-size: 20rpx; background-color: #00BFFF; width: 100rpx; height: 50rpx; margin-left: 620rpx;">提交</button>
		</view> -->
		<view class="tt">
			<view class="name">
				<view class="">
					书名：
				</view>
				<view class="a1">
					<textarea class="" maxlength="15" placeholder="输入书名~上限15字" style="font-size: 28rpx;  width: 500rpx; height: 60rpx; color: #00BFFF;"></textarea>
				</view>
			</view>
			<view class="name">作者：
				<view class="a1">
					<textarea class="" maxlength="20" placeholder="输入作者~上限20字" style="font-size: 28rpx;  width: 500rpx; height: 60rpx; color: #00BFFF;"></textarea>
				</view>
			</view>
		</view>
		
		<view class="tt">
			<view class="name">
				<view class="">
					简介：
				</view>
				<view class="a1">
					<textarea class="" maxlength="150" placeholder="输入简介~上限150字" style="font-size: 28rpx;  width: 500rpx; height: 60rpx; color: #00BFFF;"></textarea>
				</view>
			</view>
			<view class="name">图书类型：
				<view class="a1">
					<textarea class="" maxlength="20" placeholder="请选择" style="font-size: 28rpx;  width: 500rpx; height: 60rpx; color: #00BFFF;"></textarea>
				</view>
			</view>
		</view>
		
		
		<view class="tt">
			<view class="name">
				<view class="">
					书貌上传：
				</view>
				
			</view>
			<view class="name">
				<view class="a1">
					<view class="" style="font-size: 28rpx;  width: 500rpx; height: 300rpx; color: #00BFFF;">
						
						<image src="../../static/images/上传图片.png" style="width: 100rpx; height: 100rpx; margin-left: 550rpx; margin-top: 100rpx;"></image>
					</view>
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
	.all{
		width: 100%;
		height: 100%;
		line-height: 80rpx;
		/* border: #EEEEEE 1rpx solid; */
		box-shadow: #FFFFFF;
		color: #00BFFF;
	}
	.name{
		margin-bottom: 5rpx;
		border: 1rpx solid #EEEEEE;
		background-color: #F8F8F8;
		display: flex;
		margin-left: 30rpx;
		margin-right: 30rpx;
	}
	.a1{
		align-items: center;
		margin-top: 20rpx;
	}
	.tt{
		margin-top: 30rpx;
	}
</style>

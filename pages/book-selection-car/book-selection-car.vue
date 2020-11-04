<template>
	<view>
		<!--书籍-->
		<view class="show">
			<view class="yuan">
			</view>
			
			<view class="midone">
				<view class="zhengti">
					<image class="imag" src="../../static/images/ap.jpg" style="width: 125rpx; height: 170rpx;"></image>
					<view class="midwz">致敬老师</view>
				</view>
				<view>
					<view class="s1">作者：
						<view class="s6">汪魏青</view>
					</view>
					<view class="s2">出版社：浙江大学出版社</view>
					<view class="s7">
						<view class="s3">出版时间：2017-09-10</view>
					</view>
				</view>
				<view class="aa">
					<view class="sa">
						<view class="ss">馆藏：
							<view class="s5">广州图书馆</view>
						</view>
						<view class="s7">
							<view class="s4">状态：
								<view class="s5">书易流通/在馆待借</view>
							</view>
						</view>
					</view>
					<view class="sa2">
						<button type="warn" class="delete">删除</button>
					</view>
				</view>


			</view>
		</view>
		<!--书籍-->
		
		<view class="show">
			<view class="yuan">
			</view>
			
			<view class="midone">
				<view class="zhengti">
					<image class="imag" src="../../static/images/ap.jpg" style="width: 125rpx; height: 170rpx;"></image>
					<view class="midwz">致敬老师</view>
				</view>
				<view>
					<view class="s1">作者：
						<view class="s6">汪魏青</view>
					</view>
					<view class="s2">出版社：浙江大学出版社</view>
					<view class="s7">
						<view class="s3">出版时间：2017-09-10</view>
					</view>
				</view>
				<view class="aa">
					<view class="sa">
						<view class="ss">馆藏：
							<view class="s5">广州图书馆</view>
						</view>
						<view class="s7">
							<view class="s4">状态：
								<view class="s5">书易流通/在馆待借</view>
							</view>
						</view>
					</view>
					<view class="sa2">
						<button type="warn" class="delete">删除</button>
					</view>
				</view>
		
		
			</view>
		</view>
		<!--书籍-->
		<view class="show">
			<view class="yuan">
			</view>
			
			<view class="midone">
				<view class="zhengti">
					<image class="imag" src="../../static/images/ap.jpg" style="width: 125rpx; height: 170rpx;"></image>
					<view class="midwz">致敬老师</view>
				</view>
				<view>
					<view class="s1">作者：
						<view class="s6">汪魏青</view>
					</view>
					<view class="s2">出版社：浙江大学出版社</view>
					<view class="s7">
						<view class="s3">出版时间：2017-09-10</view>
					</view>
				</view>
				<view class="aa">
					<view class="sa">
						<view class="ss">馆藏：
							<view class="s5">广州图书馆</view>
						</view>
						<view class="s7">
							<view class="s4">状态：
								<view class="s5">书易流通/在馆待借</view>
							</view>
						</view>
					</view>
					<view class="sa2">
						<button type="warn" class="delete">删除</button>
					</view>
				</view>
		
		
			</view>
		</view>
		
		<!--书籍-->
		<view class="show">
			<view class="yuan">
			</view>
			
			<view class="midone">
				<view class="zhengti">
					<image class="imag" src="../../static/images/ap.jpg" style="width: 125rpx; height: 170rpx;"></image>
					<view class="midwz">致敬老师</view>
				</view>
				<view>
					<view class="s1">作者：
						<view class="s6">汪魏青</view>
					</view>
					<view class="s2">出版社：浙江大学出版社</view>
					<view class="s7">
						<view class="s3">出版时间：2017-09-10</view>
					</view>
				</view>
				<view class="aa">
					<view class="sa">
						<view class="ss">馆藏：
							<view class="s5">广州图书馆</view>
						</view>
						<view class="s7">
							<view class="s4">状态：
								<view class="s5">书易流通/在馆待借</view>
							</view>
						</view>
					</view>
					<view class="sa2">
						<button type="warn" class="delete">删除</button>
					</view>
				</view>
		
		
			</view>
		</view>
		<!--书籍-->
		<view class="bottom">
			<view class="yuan">
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
	.bottom{
		border: #EEEEEE 1rpx solid;
	}
	.show {
		border-bottom: 1rpx solid #C8C7CC;
		display: flex;
	}

	.delete {
		width: 110rpx;
		font-size: 20rpx;
		height: 50rpx;
	}

	.sa2 {
		margin-left: 150rpx;
		margin-top: 30rpx;
	}

	.aa {
		display: flex;
	}

	.yuan {
		border-radius: 50%;
		width: 45rpx;
		height: 40rpx;
		border: 1rpx solid #C8C7CC;
		margin-top: 100rpx;
		margin-left: 50rpx;
		margin-right: -70rpx;

	}

	.midone {
		width: 100%;
		height: 200rpx;
		font-size: 30rpx;
		margin-top: 35rpx;
		margin-bottom: 50rpx;
		align-items: center;
		/* background-color: #007AFF; */
		margin-left: 40rpx;
	}

	.zhengti {
		display: flex;
		width: 100%;
		/* background-color: #4CD964; */
	}

	.imag {
		margin-left: 30rpx;
	}

	.midwz {
		font-size: 28rpx;
		height: 35rpx;
		margin-top: -5rpx;
		align-items: center;
		margin-left: 30rpx;
		width: auto;
		/* background-color:  #333333; */
	}

	.s1 {
		font-size: 20rpx;
		height: 35rpx;
		margin-top: -120rpx;
		align-items: center;
		margin-left: 190rpx;
		color: #999999;
		display: flex;
	}

	.s2 {
		font-size: 20rpx;
		height: 35rpx;
		margin-top: 0rpx;
		align-items: center;
		margin-left: 190rpx;
		color: #999999;
	}

	.s3 {
		font-size: 20rpx;
		height: 35rpx;
		margin-top: 0rpx;
		align-items: center;
		margin-left: 190rpx;
		color: #999999;
	}

	.s4 {
		font-size: 20rpx;
		height: 35rpx;
		margin-top: 0rpx;
		align-items: center;
		margin-left: 190rpx;
		color: #F0AD4E;
	}

	.ss {
		font-size: 20rpx;
		height: 35rpx;
		margin-top: 0rpx;
		align-items: center;
		margin-left: 190rpx;
		color: #00BFFF;
	}

	.s5 {
		font-size: 20rpx;
		height: 35rpx;
		margin-top: -26rpx;
		align-items: center;
		margin-left: 60rpx;
		color: #;
	}

	.s6 {
		color: #00BFFF;

	}

	.s7 {
		height: 35rpx;
		align-items: center;
		width: auto;
		/* display: flex; */
	}
</style>

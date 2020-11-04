<template>
	<view>
		<!-- 顶部部分 -->
		<view class="head">
			<view class="header-wrap">
				<view class="index-header">
					<image class="address" src="../../static/images/app_icon.png"></image>
					<view class="input-wrap">
						<input type="search" placeholder="书易搜索" v-model="value" @change="inputChange" />
						<image class="img" src="/static/images/search_icon.png"></image>
					</view>
					<view class="map-wrap" @click="rightClick">
						<image class="iconfont" src="../../static/images/ring_white.png"></image>
					</view>
				</view>
			</view>
			<view class="blank"></view>
		</view>
		<!-- 轮播图 -->
		<view class="lunbo">
			<swiper style="height: 300rpx;" indicator-dots="true" autoplay="true" interval='5000' indicator-active-color="#18C7F2"
			 circular="true">
				<swiper-item>
					<image class="ima1" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3498136939,2417991357&fm=26&gp=0.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image class="ima1" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1357414921,2164656298&fm=26&gp=0.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image class="ima1" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1532335944,2894070473&fm=26&gp=0.jpg"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 功能模块 -->
		<view class="neir">
			<!-- 找还书列表 -->
			<view class="gongnen">
				<view class="module">
					<navigator url="../borrow/borrow">
						<image class="tupian" src="../../static/images/icon_find_book.png"></image>
						<view class="name">找书</view>
					</navigator>
				</view>
				<view class="module">
					<navigator url="../return/return">
						<image class="tupian" src="../../static/images/icon_return_book.png"></image>
						<view class="name">还书</view>
					</navigator>
				</view>
				
					<view class="module">
						<navigator url="../allOrders/index">
						<image class="tupian" src="../../static/images/icon_preborrow.png"></image>
						<view class="name">预约</view>
						</navigator>
					</view>
				<view class="module">
					<image class="tupian" src="../../static/images/icon_collection.png"></image>
					<view class="name">收藏</view>
				</view>
				<view class="module">
					<image class="tupian" src="../../static/images/icon_view.png"></image>
					<view class="name">附近的书</view>
				</view>
			</view>
			<!-- 分类 -->
			<view class="fenlei">
				<view class="module1">
					<image class="tupian1" src="../../static/images/icon_fiction.png"></image>
					<view class="name">文学</view>
				</view>
				<view class="module1">
					<image class="tupian1" src="../../static/images/icon_art.png"></image>
					<view class="name">艺术</view>
				</view>
				<view class="module1">
					<image class="tupian1" src="../../static/images/icon_economic.png"></image>
					<view class="name">经济</view>
				</view>
				<view class="module1">
					<image class="tupian1" src="../../static/images/icon_technology.png"></image>
					<view class="name">科技</view>
				</view>
				<view class="module1">
					<image class="tupian1" src="../../static/images/icon_story.png"></image>
					<view class="name">小说</view>
				</view>
			</view>
			<view class="fenlei">
				<view class="module1">
					<image class="tupian1" src="../../static/images/icon_child.png"></image>
					<view class="name">儿童</view>
				</view>
				<view class="module1">
					<image class="tupian1" src="../../static/images/icon_law.png"></image>
					<view class="name">法律</view>
				</view>
				<view class="module1">
					<image class="tupian1" src="../../static/images/icon_history.png"></image>
					<view class="name">历史</view>
				</view>
				<view class="module1">
					<image class="tupian1" src="../../static/images/icon_activity.png"></image>
					<view class="name">活动</view>
				</view>
				<view class="module1">
					<image class="tupian1" src="../../static/images/icon_all_class.png"></image>
					<view class="name">全部分类</view>
				</view>
			</view>
			<!-- 分割线 -->
			<view class="br"></view>
			<!-- 新书上架 -->
			<view class="xinshu">
				<view class="tit">
					<view class="shu">新书上架</view>
					<image class="imag1" src="../../static/images/devider_right.png"></image>
					<view class="gengduo">更多</view>
					<image class="imag2" src="../../static/images/right_arrow.png"></image>
				</view>
				<view class="lieshu">
					<view class="lies">
						<navigator url="../borrow/borrow">
							<image class="imag3" src="http://cdn.static.17k.com/book/189x272/61/95/3159561.jpg-189x272?v=1590116249000"></image>
							<view class="name1">解忧杂货铺牛吼i哦吼i的hi后i松平定紧哦碰上架</view>
							<view class="name2">[日]东野圭吾电风扇广泛广泛是</view>
						</navigator>
					</view>
					<view class="lies">
						<image class="imag3" src="http://cdn.static.17k.com/book/189x272/83/03/3200383.jpg-189x272?v=1596527153000"></image>
						<view class="name1">解忧杂货铺</view>
						<view class="name2">[日]东野圭吾</view>
					</view>
					<view class="lies">
						<image class="imag3" src="https://img11.360buyimg.com/n1/jfs/t26623/338/419718625/245064/7ef5b21b/5b9106caNc9b79061.jpg"></image>
						<view class="name1">解忧杂货铺</view>
						<view class="name2">[日]东野圭吾</view>
					</view>
				</view>
				<view class="lieshu">
					<view class="lies">
						<image class="imag3" src="http://cdn.static.17k.com/book/189x272/61/95/3159561.jpg-189x272?v=1590116249000"></image>
						<view class="name1">解忧杂货铺牛吼i哦吼i的hi后i松平定紧哦碰上架</view>
						<view class="name2">[日]东野圭吾电风扇广泛广泛是</view>
					</view>
					<view class="lies">
						<image class="imag3" src="http://cdn.static.17k.com/book/189x272/83/03/3200383.jpg-189x272?v=1596527153000"></image>
						<view class="name1">解忧杂货铺牛吼i哦吼i</view>
						<view class="name2">[日]东野圭吾</view>
					</view>
					<view class="lies">
						<image class="imag3" src="https://img11.360buyimg.com/n1/jfs/t26623/338/419718625/245064/7ef5b21b/5b9106caNc9b79061.jpg"></image>
						<view class="name1">解忧杂货铺牛吼i哦吼i</view>
						<view class="name2">[日]东野圭吾</view>
					</view>
				</view>
			</view>
			<!-- 分割线 -->
			<view class="br"></view>
			<!-- 热门推荐 -->
			<view class="xinshu">
				<view class="tit">
					<view class="shu">热门推荐</view>
					<image class="imag1" src="../../static/images/devider_right.png"></image>
					<view class="gengduo">更多</view>
					<image class="imag2" src="../../static/images/right_arrow.png"></image>
				</view>
				<view class="lieshu">
					<view class="lies">
						<image class="imag3" src="http://cdn.static.17k.com/book/189x272/61/95/3159561.jpg-189x272?v=1590116249000"></image>
						<view class="name1">解忧杂货铺牛吼i哦吼i的hi后i松平定紧哦碰上架</view>
						<view class="name2">[日]东野圭吾电风扇广泛广泛是</view>
					</view>
					<view class="lies">
						<image class="imag3" src="http://cdn.static.17k.com/book/189x272/83/03/3200383.jpg-189x272?v=1596527153000"></image>
						<view class="name1">解忧杂货铺牛吼i哦吼i</view>
						<view class="name2">[日]东野圭吾</view>
					</view>
					<view class="lies">
						<image class="imag3" src="https://img11.360buyimg.com/n1/jfs/t26623/338/419718625/245064/7ef5b21b/5b9106caNc9b79061.jpg"></image>
						<view class="name1">解忧杂货铺牛吼i哦吼i</view>
						<view class="name2">[日]东野圭吾</view>
					</view>
				</view>
				<view class="lieshu">
					<view class="lies">
						<image class="imag3" src="http://cdn.static.17k.com/book/189x272/61/95/3159561.jpg-189x272?v=1590116249000"></image>
						<view class="name1">解忧杂货铺牛吼i哦吼i的hi后i松平定紧哦碰上架</view>
						<view class="name2">[日]东野圭吾电风扇广泛广泛是</view>
					</view>
					<view class="lies">
						<image class="imag3" src="http://cdn.static.17k.com/book/189x272/83/03/3200383.jpg-189x272?v=1596527153000"></image>
						<view class="name1">解忧杂货铺牛吼i哦吼i</view>
						<view class="name2">[日]东野圭吾</view>
					</view>
					<view class="lies">
						<image class="imag3" src="https://img11.360buyimg.com/n1/jfs/t26623/338/419718625/245064/7ef5b21b/5b9106caNc9b79061.jpg"></image>
						<view class="name1">解忧杂货铺牛吼i哦吼i</view>
						<view class="name2">[日]东野圭吾</view>
					</view>
				</view>
			</view>
			<!-- 分割线 -->
			<view class="br"></view>
			<!-- 猜您喜欢 -->
			<view class="xinshu">
				<view class="tit">
					<view class="shu">猜您喜欢</view>
					<image class="imag1" src="../../static/images/devider_right.png"></image>
					<view class="gengduo">更多</view>
					<image class="imag2" src="../../static/images/right_arrow.png"></image>
				</view>
				<view class="lieshu">
					<view class="lies">
						<image class="imag3" src="http://cdn.static.17k.com/book/189x272/61/95/3159561.jpg-189x272?v=1590116249000"></image>
						<view class="name1">解忧杂货铺牛吼i哦吼i的hi后i松平定紧哦碰上架</view>
						<view class="name2">[日]东野圭吾电风扇广泛广泛是</view>
					</view>
					<view class="lies">
						<image class="imag3" src="http://cdn.static.17k.com/book/189x272/83/03/3200383.jpg-189x272?v=1596527153000"></image>
						<view class="name1">解忧杂货铺牛吼i哦吼i</view>
						<view class="name2">[日]东野圭吾</view>
					</view>
					<view class="lies">
						<image class="imag3" src="https://img11.360buyimg.com/n1/jfs/t26623/338/419718625/245064/7ef5b21b/5b9106caNc9b79061.jpg"></image>
						<view class="name1">解忧杂货铺牛吼i哦吼i</view>
						<view class="name2">[日]东野圭吾</view>
					</view>
				</view>
				<view class="lieshu">
					<view class="lies">
						<image class="imag3" src="http://cdn.static.17k.com/book/189x272/61/95/3159561.jpg-189x272?v=1590116249000"></image>
						<view class="name1">解忧杂货铺牛吼i哦吼i的hi后i松平定紧哦碰上架</view>
						<view class="name2">[日]东野圭吾电风扇广泛广泛是</view>
					</view>
					<view class="lies">
						<image class="imag3" src="http://cdn.static.17k.com/book/189x272/83/03/3200383.jpg-189x272?v=1596527153000"></image>
						<view class="name1">解忧杂货铺牛吼i哦吼i</view>
						<view class="name2">[日]东野圭吾</view>
					</view>
					<view class="lies">
						<image class="imag3" src="https://img11.360buyimg.com/n1/jfs/t26623/338/419718625/245064/7ef5b21b/5b9106caNc9b79061.jpg"></image>
						<view class="name1">解忧杂货铺牛吼i哦吼i</view>
						<view class="name2">[日]东野圭吾</view>
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
				value: ''
			}
		},
		methods: {
			inputChange: function() {
				this.$emit('change', this.value)
			},
			rightClick: function() {
				this.$emit("rightClick")
			}
		}
	}
</script>

<style lang="scss">
	// 顶部页面
	$color-base: #fff;
	$words-color-base: #333333;
	$words-color-light: #999999;

	.header-wrap {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 999;

		.index-header {
			height: 110upx;
			line-height: 110upx;
			padding: 0 30upx;
			padding-top: 40upx;
			background-color: $color-base;
			font-size: 28upx;
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.address {
				// margin-left: 50upx;
				width: 60upx;
				height: 60upx;
				font-size: 26upx;
			}

			.input-wrap {
				display: flex;
				width: 500upx;
				height: 70upx;
				padding: 10upx 80upx 10upx 50upx;
				margin-left: 0;
				box-sizing: border-box;
				background-color: #F5F5F5;
				border-radius: 50upx;
				color: $words-color-base;
				position: relative;

				image {
					height: 70upx;
					width: 70upx;
					position: absolute;
					// left: 50upx;
					top: -8upx;
					color: $words-color-light;
					font-size: 30upx;
				}

				.img {
					width: 70upx;
					height: 70upx;
					margin-top: 7upx;
					margin-left: 375upx;
					color: $words-color-light;
					font-size: 30upx;
					z-index: 1000;
				}
			}


			.map-wrap {
				.iconfont {
					margin-top: 50upx;
					width: 60upx;
					height: 60upx;
					font-size: 32upx;
					margin-right: 5upx;
				}

				text {
					font-size: 26upx;
				}
			}
		}
	}

	.blank {
		height: 126upx;
	}

	/* 轮播 */
	.lunbo {
		width: 100%;
		height: 300upx;
	}

	.ima1 {
		width: 100%;
		height: 300upx;
	}

	/* 轮播图圆点样式 */
	wx-swiper .wx-swiper-dot {
		width: 10px;
		height: 10px;
	}

	wx-swiper .wx-swiper-dot-active {
		background-color: #18C7F2;
		width: 10px;
		border-radius: 10px;
		background: #18C7F2;
	}

	/* 功能模块 */
	.neir {
		background-color: #FFFFFF;
		width: 100%;
		height: 450rpx;
	}

	.gongnen {
		display: flex;
		margin-top: 20rpx;
		width: 100%;
		height: 150rpx;
	}

	.module {
		width: 20%;
		height: 150rpx;
	}

	.tupian {
		width: 75%;
		height: 100rpx;
		margin-left: 10%;
	}

	.name {
		width: 100%;
		height: 50rpx;
		color: #5F5F5F;
		font-size: 30rpx;
		text-align: center;
		margin-top: -8rpx;
	}

	/* 分类 */
	.fenlei {
		display: flex;
		margin-top: 25rpx;
		width: 100%;
		height: 125rpx;
	}

	.module1 {
		width: 20%;
		height: 125rpx;
	}

	.tupian1 {
		width: 70%;
		height: 85rpx;
		margin-left: 15%;
	}

	.br {
		margin-top: 30rpx;
		width: 100%;
		height: 15rpx;
		background-color: #F5F5F5;
	}

	/* 新书上架 */
	.xinshu {
		width: 100%;
		height: 1070rpx;
	}

	.tit {
		display: flex;
		width: 100%;
		height: 80rpx;
	}

	.shu {
		color: #3C3C3C;
		font-size: 45rpx;
		margin-left: 20rpx;
		margin-top: 20rpx;
		margin-right: 15rpx;
	}

	.imag1 {
		margin-top: 37rpx;
		width: 4%;
		height: 35rpx;
	}

	.gengduo {
		color: #838383;
		margin-top: 35rpx;
		margin-left: 50%;
		float: right;
		height: 50rpx;
		font-size: 32rpx;
	}

	.imag2 {
		margin-top: 37rpx;
		width: 4%;
		height: 40rpx;
	}

	/* 新书 */
	.lieshu {
		display: flex;
		width: 100%;
		height: 500rpx;
	}

	.lies {
		margin-left: 20rpx;
		margin-top: 20rpx;
		width: 30%;
		height: 450rpx;
	}

	.imag3 {
		width: 100%;
		height: 300rpx;
	}

	.name1 {
		display: -webkit-box;
		width: 100%;
		height: 90rpx;
		font-size: 35rpx;
		color: #3C3C3C;
		word-break: break-all;
		text-overflow: ellipsis;
		/*自适应字体*/
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		/*设置 需要显示的行数*/
	}
	.name2 {
		display: -webkit-box;
		width: 100%;
		height: 40rpx;
		margin-top: 10rpx;
		font-size: 30rpx;
		color: #838383;
		word-break: break-all;
		text-overflow: ellipsis;
		/*自适应字体*/
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		/*设置 需要显示的行数*/
	}
</style>

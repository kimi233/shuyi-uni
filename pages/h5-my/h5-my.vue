<template>
	<c-page ref="page" :tabbar="true" title="个人中心">
		<u-gap height="20"></u-gap>
		<u-cell-group>
			<navigator url="/pages/h5-my/h5-myinfo">
				<u-cell-item class="user_info">
					<u-avatar style="float: left;" src="/static/images/头像3.jpg" size="large"></u-avatar>
					<view class="user_info_view">
						<text class="user_info_view_nickname">
							月夕
						</text>
						<br />
						<text class="user_info_view_username">
							账号: shfsdhfiush
						</text>
					</view>
				</u-cell-item>
			</navigator>
			<!--      <u-cell-item class="cell-item">
		  <view class="cell-item-content">
			  <image src="../../static/images/userinfo_space.png"></image>
			  <text>我的主页</text>
		  </view>
	  </u-cell-item> -->
			<u-cell-item title="我的主页">
				<u-icon class="iconBox" color="#ff0000" slot="icon" size="32" name="home-fill"></u-icon>
			</u-cell-item>
			<u-cell-item title="我的通知">
				<u-icon class="iconBox" slot="icon" size="32" name="chat-fill"></u-icon>
				<text>有新消息<u-badge class="iconBox_badge" type="error" count="7"></u-badge></text>
			</u-cell-item>
		</u-cell-group>
		<u-gap height="40"></u-gap>
		<u-cell-group>
			<u-cell-item icon="integral-fill" title="读书心得"></u-cell-item>
			<u-cell-item icon="setting-fill" title="我的收藏"></u-cell-item>
		</u-cell-group>
	</c-page>
</template>

<script>
	export default {
		name: "h5-my",
		data() {
			return {
				msg: "h5-my页面"
			}
		},
		methods: {},
		mounted() {},
		created() {},
	}
</script>

<style lang="scss" scoped>
	.user_info {
		height: 85px;

		&_view {
			width: 70%;
			height: 48px;
			margin: 6px 0 6px 10px;
			text-align: left;
			float: left;
			color: #000000;

			&_nickname {
				font-size: 20px;
				line-height: 20px;
			}

			&_username {
				font-size: 14px;
			}
		}
	}

	.iconBox {
		margin-right: 5px;

		&_badge {
			right: 25px !important;
		}
	}

	.cell-item {
		&-content {
			display: flex;
			align-items: center;

			&>image {
				width: 35px;
				height: 35px;
				float: left;
			}

			&>text {
				float: left;
				color: #606266;
				font-size: 28upx;
			}
		}

		padding: 5px 10px;
	}
</style>

<template>
	<c-page ref="page" title="个人信息">
		<view class="headPortraitBox">
			<view class="headPortraitBox_image">
				<u-avatar @tap="showImg" :src="avatar" size="180"></u-avatar>
			</view>
			<text @tap="chooseAvatar" class="c-link">更换头像</text>
		</view>
		<u-cell-group title="账号信息">
			<u-cell-item title="昵称" :value="userinfo.nickname"></u-cell-item>
			<u-cell-item title="用户名" :value="userinfo.username"></u-cell-item>
			<u-cell-item title="绑定微信号" :value="userinfo.weChat"></u-cell-item>
			<u-cell-item title="绑定qq号" :value="userinfo.qq"></u-cell-item>
		</u-cell-group>
		<u-cell-group title="个人信息">
			<u-cell-item title="姓名" :value="userinfo.name"></u-cell-item>
			<u-cell-item title="性别" :value="userinfo.sex===1?'男':'女'"></u-cell-item>
			<u-cell-item title="手机号" :value="userinfo.phone.hide('*',3,-4)"></u-cell-item>
			<u-cell-item title="真实地址" :value="userinfo.address"></u-cell-item>
			<u-cell-item title="收获地址" :value="userinfo.delivery_address"></u-cell-item>
		</u-cell-group>
	</c-page>
</template>

<script>
	export default {
		name: "h5-myinfo",
		data() {
			return {
				avatar: 'https://cdn.uviewui.com/uview/common/logo.png',
				userinfo:{
					username: "scgs762dgw9",
					nickname: "花晨月夕",
					avatar: "https://cdn.uviewui.com/uview/common/logo.png",
					weChat: "wangming1571356682",
					qq: "1571356682",
					name: "王明",
					sex: 1,
					phone: "15870290085",
					address: "贵州省贵阳市贵安新区党武乡贵州民族大学",
					delivery_address: "贵州省贵阳市贵安新区党武乡贵州民族大学"
				}
			}
		},
		methods: {
			chooseAvatar() {
				// 此为uView的跳转方法，详见"文档-JS"部分，也可以用uni的uni.navigateTo
				this.$u.route({
					// 关于此路径，请见下方"注意事项"
					url: '/uview-ui/components/u-avatar-cropper/u-avatar-cropper',
					// 内部已设置以下默认参数值，可不传这些参数
					params: {
						// 输出图片宽度，高等于宽，单位px
						destWidth: 300,
						// 裁剪框宽度，高等于宽，单位px
						rectWidth: 200,
						// 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
						fileType: 'jpg',
					}
				})
			},
			showImg() {
				//全屏浏览图片
				uni.previewImage({
					urls: [this.avatar]
				})
			}
		},
		created() {
			// 监听从裁剪页发布的事件，获得裁剪结果
			uni.$on('uAvatarCropper', path => {
				this.avatar = path;
				// 可以在此上传到服务端
				uni.uploadFile({
					url: 'http://www.example.com/upload',
					filePath: path,
					name: 'file',
					complete: (res) => {
						console.log(res);
					}
				});
			})
		},
	}
</script>

<style lang="scss" scoped>
	.headPortraitBox {
		text-align: center;
		padding: 30px;

		&_image {
			padding-bottom: 10px;
		}
	}
</style>

<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";

	.c-link {
		color: rgb(41, 121, 255);
		font-size: 14px;
		border-bottom: none;
		padding-bottom: 0px;
	}
</style>

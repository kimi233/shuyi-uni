<template>
  <u-mask :show="show">
    <view class="warp">
      <view class="rect" @tap.stop>
        <view class="rect_logo">
          <c-loading-animation user-style="width: 60rpx;height: 60rpx;"/>
        </view>
        <view class="rect_message">
          <text>{{ title }}</text>
        </view>
      </view>
    </view>
  </u-mask>
</template>

<script>

export default {
  name: "c-loading",
  props: {
    title: {
      type: String,
      default: "请稍后"
    },
    show: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="less" scoped>
.warp {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.rect {
  width: 220upx;
  height: 220upx;
  border-radius: 10upx;
  background-color: #fff;

  &_logo {
    width: 100%;
    height: 105upx;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &_message {
    display: flex;
    width: 100%;
    height: 75upx;
    color: #888;
    justify-content: center;
  }
}
</style>

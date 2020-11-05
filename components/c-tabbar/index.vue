<template>
  <view class="c-tabbar">
    <u-tabbar v-model="current" :list="list"></u-tabbar>
  </view>
</template>

<script>
export default {
  name: "c-tabbar",
  props: {},
  data() {
    return {
      // #ifdef MP-WEIXIN
list: [{
        iconPath: "home",
        selectedIconPath: "home-fill",
        text: '首页',
        customIcon: false,
        pagePath: "/pages/my/my"
      },
        {
          iconPath: "grid",
          selectedIconPath: "grid-fill",
          text: '分类',
          customIcon: false,
          pagePath: "/pages/my/my"
        },
        {
          iconPath: "account",
          selectedIconPath: "account-fill",
          text: '我的',
          count: 23,
          isDot: false,
          customIcon: false,
          pagePath: "/pages/my/my"
        },
        {
          iconPath: "shopping-cart",
          selectedIconPath: "shopping-cart-fill",
          text: '选书车',
          customIcon: false,
          pagePath: "/pages/my/my"
        },
        {
          iconPath: "account",
          selectedIconPath: "account-fill",
          text: '好友',
          count: 23,
          isDot: false,
          customIcon: false,
          pagePath: "/pages/my/my"
        },
      ],
      // #endif
      // #ifdef H5
list: [{
        iconPath: "home",
        selectedIconPath: "home-fill",
        text: '首页',
        customIcon: false,
        pagePath: "/pages/h5-my/h5-my"
      },
        {
          iconPath: "grid",
          selectedIconPath: "grid-fill",
          text: '分类',
          customIcon: false,
          pagePath: "/pages/h5-my/h5-my"
        },
        {
          iconPath: "account",
          selectedIconPath: "account-fill",
          text: '我的',
          count: 23,
          isDot: false,
          customIcon: false,
          pagePath: "/pages/h5-my/h5-my"
        },
        {
          iconPath: "shopping-cart",
          selectedIconPath: "shopping-cart-fill",
          text: '选书车',
          customIcon: false,
          pagePath: "/pages/h5-my/h5-my"
        },
        {
          iconPath: "account",
          selectedIconPath: "account-fill",
          text: '好友',
          count: 23,
          isDot: false,
          customIcon: false,
          pagePath: "/pages/h5-my/h5-my"
        },
      ],
      // #endif
      current: 0,
    }
  },
}
</script>

<style scoped lang="less">

</style>

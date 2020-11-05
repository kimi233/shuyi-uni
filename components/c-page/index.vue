<template>
  <view class="page">
    <!--导航栏-->
    <!--back-text="返回"-->
    <c-navbar
              title-color="#fff"
              :border-bottom="borderBottom"
              back-icon-color="#fff"
              :title="title"
              :background="{background: 'linear-gradient(to right, #56ccf2, #2f80ed)'}"
              :back-text-style="{color: '#fff'}">
      <template slot="right">

      </template>
    </c-navbar>
    <!--全局组件-->
    <c-loading :show="loadingState.show" :title="loadingState.title"></c-loading>
    <u-toast ref="uToast"/>
    <!--内容区域-->
    <scroll-view
        :class="{'content':true, 'content_tabbar':tabbar,'content_width':type==='content',hideScroll}"
        :style="{backgroundColor}"
        :scroll-y="scrollY"
        :refresher-enabled="refresherEnabled"
        :refresher-triggered="refresherTriggered"
        @refresherrefresh="(e)=>{this.$emit('refresherrefresh',e)}"
        @scrolltoupper="(e)=>{this.$emit('scrolltoupper',e)}"
        @scrolltolower="(e)=>{this.$emit('scrolltolower',e)}">
      <slot>

      </slot>
    </scroll-view>
    <!--底部导航栏-->
    <c-tabbar v-show="tabbar"></c-tabbar>
  </view>
</template>

<script>
export default {
  props: {
    refresherTriggered: {
      type: Boolean,
      default: false
    },
    scrollY: {
      type: Boolean,
      default: true
    },
    upperThreshold: {
      type: Number,
      default: 50
    },
    lowerThreshold: {
      type: Number,
      default: 50
    },
    refresherEnabled: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default:
          "首页"
    },
    tabbar: {
      type: Boolean,
      default: false
    },
    borderBottom: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "full"
    },
    backgroundColor: {
      type: String,
      default: "#f3f4f6"
    },
    hideScroll:{
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      loadingState: {
        title: "请稍后...",
        show: false
      }
    }
  },
  methods: {
    loadingOpen(config = {}) {
      this.loadingState.title = config.title || "请稍后...";
      this.loadingState.show = true
    },
    loadingDown() {
      this.loadingState.show = false
    },
    messageOpen(...config) {
      this.$refs.uToast.show(...config)
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // #ifdef H5
  height: calc(100% - 44px);
  // #endif

  // #ifndef H5
  height: calc(100% - 68px);
  // #endif
}

.content_tabbar {
  // #ifdef H5
  height: calc(100% - 44px - 50px);
  // #endif

  // #ifndef H5
  height: calc(100% - 66px - 50px);
  // #endif

}

//两边留出距离来
.content_width{
  padding: 15px;
}

.page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.hideScroll ::-webkit-scrollbar {
  width: 0;
  height: 0;
  background-color: transparent;
}
</style>

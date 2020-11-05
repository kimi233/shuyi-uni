<template>
  <view {{if config.userStyle}} :style="userStyle" {{/if}} {{if config.className}} :class="className" {{/if}} >
    <text style="font-size: 20px">{{ msg }}</text>
  </view>
</template>

<script>
export default {
  name: "{{componentName}}",
  props: {
    {{if config.userStyle}}userStyle: {
      type: String,
      default: ""
    },
{{/if}}{{if config.className}}
    className: {
      type: String,
      default: ""
    },{{/if}}
  },
  data() {
    return {
      msg: "{{componentName}}组件\n标题都不写，这不是什么善茬"
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
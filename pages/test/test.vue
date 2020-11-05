<template>
  <c-page ref="page" :tabbar="true" title="测试页面">
    <button @click="loading">调用loading</button>
    <button @click="message">调用message</button>
    <text>详细页面配置和Api请查看c-page组件文档</text>
  </c-page>
</template>

<script>
export default {
  name: "test",
  data() {
    return {

    }
  },
  methods: {
    message(){
      this.$refs.page.messageOpen({title:"测试提示"})
    },
    loading(){
      this.$refs.page.loadingOpen({title:"请稍后"})
      setTimeout(()=>{
        this.$refs.page.loadingDown()
      },2000)
    }
  },
  mounted() {},
  created() {},
}
</script>

<style lang="scss" scoped>

</style>

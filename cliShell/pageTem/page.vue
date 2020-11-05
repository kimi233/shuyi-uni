<template>
  <c-page ref="page">
    <text v-text="msg"></text>
  </c-page>
</template>

<script>
export default {
  name: "{{pageName}}",
  data() {
    return {
      msg: "{{pageName}}页面"
    }
  },
  methods: {},
  mounted() {},
  created() {},
}
</script>

<style lang="scss" scoped>

</style>
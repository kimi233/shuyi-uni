<template>
	<li @click="changeIndexHandler" :class='["tab",active]'>{ this.tabName }</li>
</template>

<script>
export default {
    name:"Tab",
    props:{
        index:{
            type:[String,Number],
            default:"1"
        },
        tabName:{
            type:String,
            default:"tab"
        }
    },
    mounted() {
        this.$parent.panes.push(this);
    },
    computed:{
        active(){
            return this.$parent.currentIndex == this.index
        }
    },
    methods:{
        changeIndexHandler(){
            // 把数据传递给父元素
            // this.$emit("onChangeIndex",this.index);
            this.$parent.onChangeIndex(this.index);
        }
    }
}
</script>
<style scoped>

.tab {
    flex:1;
    list-style: none;
    line-height: 40px;
    margin-right: 0px;
    position: relative;
    text-align:center;
}

.tab.active {
  border-bottom: 4rpx solid #00BFFF;
}

</style>


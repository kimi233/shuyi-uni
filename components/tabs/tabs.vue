<template>
	<view>
	  <ul class="tabs-header">
	    {{ this.$slots.default }}
	  </ul>
	  <Content :panes="panes"/>
	</view>
</template>
<script>

import Content from "./content.vue"

export default {
    name:"Tabs",
	components:{Content},
    data(){
        return{
            panes:[]
        }
    },
    props:{
        currentIndex:{
            type:[String,Number],
            default:"1"
        }
    },
    methods:{
        onChangeIndex(index){
            this.$emit("changTab",index);
        }
    }
}
</script>

<style scoped>

.tabs-header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 6rpx solid #ededed;
}


</style>

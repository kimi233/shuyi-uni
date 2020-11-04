<template>
	<view>
		<template v-for="(element,index) in panes">
				{{element.active ? element.$slots.default : ""}}
		</template>
	</view>
</template>
<script>
export default {
    name: "Content",
    props: {
        panes: {
            type: Array,
            default: function() {
                return [];
            }
        }
    }
};
</script>

// <style scoped>
// </style>


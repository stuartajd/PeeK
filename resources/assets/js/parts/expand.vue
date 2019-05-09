<template>
    <div class="mb-5">
        <div class="expand-header border-bottom pb-3 mb-3 cursor-pointer" @click.prevent="expanded = !expanded">
            <h4 class="cursor-pointer float-right">+</h4>

            <h3>{{title}}</h3>
        </div>

        <transition name="slide">
            <div class="expand" v-if="expanded"><slot /></div>
        </transition>
    </div>
</template>

<script>
	export default {
		name: "expand",
        components: {  },
        props: ['title'],
        data(){
		    return {
                expanded: false
            }
        }
	}
</script>

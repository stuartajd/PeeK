<template>
    <span :class="getPriority('css')">
        <icon :name="getPriority('icon')"></icon> {{getPriority('title')}}
    </span>
</template>

<script>
	import '../icons/priority_low';
	import '../icons/priority_normal';
	import '../icons/priority_high';

	import { varPriority } from '../variables';

	export default {
		name: "priority",
        props: ['priority'],
        methods: {
			getPriority(type){
				return varPriority[this.priority][type];
            }
        }
	}
</script>

<style scoped>

</style>
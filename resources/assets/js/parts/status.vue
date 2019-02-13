<template>
    <span>
        {{getStatus('title')}}
    </span>
</template>

<script>
	import { varStatus } from '../variables';

	export default {
		name: "status",
        props: ['status'],
        methods: {
			getStatus(type){
				return varStatus[this.status][type];
            }
        }
	}
</script>

<style scoped>

</style>
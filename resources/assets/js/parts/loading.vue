<template>
    <span v-cloak v-if="!loading" class="text-muted" :class="classes">
        <icon name="cog" class="spin" /> {{ message || 'Loading..' }}
    </span>
</template>

<script>
    import '../icons/cog';

	export default {
		name: "loading",
        props: ['loading', 'classes', 'message']
	}
</script>

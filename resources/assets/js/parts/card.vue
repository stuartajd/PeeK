<template>
    <div class="card">
        <div class="card-body">
            <h5 v-if='title' class="card-title">{{title}}</h5>
            <h6 v-if='subtitle' class="card-subtitle mb-2 text-muted">{{subtitle}}</h6>
            <div>
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "card",
        props: ['title', 'subtitle']
	}
</script>

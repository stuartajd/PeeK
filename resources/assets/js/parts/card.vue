<template>
    <div class="card">
        <div class="card-body">
            <div v-if="loading">
                <loading>{{loadingText}}</loading>
            </div>
            <div v-else>
                <h5 v-if='title' class="card-title not-selectable">{{title}}</h5>
                <h6 v-if='subtitle' class="card-subtitle mb-2 not-selectable text-muted">{{subtitle}}</h6>
                <div>
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import loading from '../parts/loading';
	export default {
		name: "card",
        components: { loading },
        props: ['title', 'subtitle', 'loading', 'loadingText']
	}
</script>

<template>
    <div id="app">
        <navigation class="mb-3" />

        <router-view></router-view>
    </div>
</template>

<script>
    import navigation from './parts/navigation.vue';

    export default {
        name: "App",
        components: { navigation }
    }
</script>
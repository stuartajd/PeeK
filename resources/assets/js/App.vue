<template>
    <div id="app">
        <navigation class="mb-4" />

        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import navigation from './parts/navigation.vue';

    export default {
        name: "App",
        components: { navigation },
        data(){
            return {
            	state: []
            }
        },
        mounted(){
			axios.get('api/state')
				.then(response => {
					this.state = response.data;
				});
        }
    }
</script>
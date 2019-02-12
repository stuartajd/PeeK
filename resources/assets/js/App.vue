<template>
    <div id="app">
        <navigation class="mb-4" />

        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <router-view></router-view>

                    <div class="text-center mt-3 mb-5 text-muted">
                        <small>&copy; {{getYear}} PeeK &bull; Project Management</small>
                    </div>
                </div>
            </div>
        </div>

        <notifications class="mt-3 mr-2" />
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
        computed: {
            getYear(){
            	return new Date().getFullYear();
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
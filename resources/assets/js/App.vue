<template>
    <div id="app">
        <div class="container-fluid position-fixed navigation" style="z-index: 9999;">
            <div class="row justify-content-center bg-brand">
                <div class="col-md-10">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-brand">
                        <a class="navbar-brand" href="/"><icon name="logo" class="large"/>&nbsp; PeeK</a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Logged in as: {{this.$store.getters.user.name}}
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="/logout">Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

        <div class="container-fluid pt-5">
            <div class="row pt-4">
                <div class="col-md-2">
                    <navigation />
                </div>
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
        computed: {
            getYear(){
            	return new Date().getFullYear();
            }
        },
        mounted(){
			axios.get('api/state')
				.then(response => {
                    this.$store.commit( 'setUser', response.data.user);
				});
        }
    }
</script>
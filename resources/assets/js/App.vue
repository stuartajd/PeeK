<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-brand">
            <div class="container">
                <a class="navbar-brand" href="/"><icon name="logo" class="large"/>&nbsp; PeeK</a>
                <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link to="/overview" class="nav-link">
                                <icon name="dashboard" />&nbsp;Dashboard
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/search" class="nav-link">
                                <icon name="search" />&nbsp;Search
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/tasks" class="nav-link">
                                <icon name="list" />&nbsp;Tasks
                            </router-link>
                        </li>
                        <li class="nav-item" v-if="this.isAdmin">
                            <router-link to="/admin" class="nav-link">
                                <icon name="cog" />&nbsp;Settings
                            </router-link>
                        </li>
                    </ul>
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
            </div>
        </nav>

        <div class="nav-scroller bg-white text-dark shadow-sm">
            <div class="container px-0">
                <nav class="nav nav-underline">
                    <router-link to="/overview" class="nav-link">
                        <icon name="dashboard" />&nbsp;Dashboard
                    </router-link>
                </nav>
            </div>
        </div>

        <portal-target name="portal"></portal-target>

        <div class="container pt-3 px-0">
            <router-view></router-view>

            <div class="text-center mt-3 mb-5 text-muted">
                <small>&copy; {{getYear}} PeeK &bull; Project Management</small>
            </div>
        </div>

        <notifications class="mt-3 mr-2" />
    </div>
</template>

<script>
    import './icons/logo';
    import './icons/dashboard';
    import './icons/search';
    import './icons/list';
    import './icons/cog';

    export default {
        name: "App",
        components: {  },
        computed: {
            getYear(){
            	return new Date().getFullYear();
            }
        },
        mounted(){
			this.$http.get('api/state')
				.then(response => {
                    this.$store.commit( 'setUser', response.data.user);
                    this.$store.commit( 'setCompany', response.data.company);
                    this.$store.commit( 'setRoles', response.data.roles);
				});
        }
    }
</script>
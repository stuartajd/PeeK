<template>
    <div class="container-fluid sticky-top navigation">
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
                                    Logged in as: {{state.user.name || unknown}}
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div class="row bg-white navigation-subbar">
            <div class="col-md-12">
                <div class="row justify-content-center">
                    <div class="col-md-10 align-items-center">
                        <div class="container-fluid py-2 text-muted">
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item">
                                    <router-link to="/overview"><icon name="dashboard" />&nbsp;Dashboard</router-link>
                                </li>
                                <li class="list-inline-item">
                                    <router-link to="/tasks"><icon name="tasks" />&nbsp;Tasks</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../icons/logo';
	import '../icons/dashboard';
	import '../icons/cog';
	import '../icons/list';
	import '../icons/verified';

	export default {
		props: ['state'],
        data(){
            return {}
        },
        mounted()
        {

        },
        methods: {}
    }
</script>
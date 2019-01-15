<template>
    <div class="container-fluid sticky-top">
        <div class="row justify-content-center bg-brand">
            <div class="col-md-10">
                <nav class="navbar navbar-expand-lg navbar-dark bg-brand">
                    <a class="navbar-brand" href="/"><icon name="logo" class="large"/>&nbsp; PeeK</a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <router-link to="/overview" class="nav-link"><icon name="dashboard"/> &nbsp; Dashboard</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/tasks" class="nav-link"><icon name="list"/> &nbsp; Tasks</router-link>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <icon name="verified" />&nbsp; Manage
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <router-link to="/admin/tasks" class="dropdown-item"><icon name="list"/> &nbsp; Tasks</router-link>
                                    <router-link to="/admin/users" class="dropdown-item"><icon name="list"/> &nbsp; Users</router-link>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <icon name="cog" />&nbsp; Settings
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <router-link to="/user/settings" class="dropdown-item"><icon name="cog" />&nbsp;Settings</router-link>
                                    <a class="dropdown-item" href="/logout">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
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
        data(){
            return {}
        },
        mounted()
        {

        },
        methods: {}
    }
</script>
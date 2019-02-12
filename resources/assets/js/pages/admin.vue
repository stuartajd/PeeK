<template>
    <div class="container-fluid">
        <h5 class="page-title">Admin</h5>

        <div class="row">
            <div class="col-md-3">
                <router-link to="/admin/users" class='no-style'>
                    <select-card background="">
                        <div>Manage Users</div>
                    </select-card>
                </router-link>
            </div>
            <div class="col-md-3">
                <router-link to="/admin/tasks" class='no-style'>
                    <select-card background="">
                        <div>Manage Tasks</div>
                    </select-card>
                </router-link>
            </div>
            <div class="col-md-3">
                <router-link to="/admin/settings" class='no-style'>
                    <select-card background="">
                        <div>Settings</div>
                    </select-card>
                </router-link>
            </div>
            <div class="col-md-3">
                <router-link to="/admin/reporting" class='no-style'>
                    <select-card background="">
                        <div>Reporting</div>
                    </select-card>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import selectCard from '../parts/select-card';

	export default {
		name: "admin",
        components: {
			selectCard
        }
	}
</script>

<style scoped>

</style>
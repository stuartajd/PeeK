<template>
    <div class="container-fluid">
        <h5 class="page-title">Admin</h5>

        <div class="row mb-3">
            <div class="col-md-4">
                <router-link to="/admin/users" class='no-style'>
                    <select-card background="">
                        <div>Manage Users</div>
                    </select-card>
                </router-link>
            </div>
            <div class="col-md-4">
                <router-link to="/admin/tasks" class='no-style'>
                    <select-card background="">
                        <div>Manage Tasks</div>
                    </select-card>
                </router-link>
            </div>
            <div class="col-md-4">
                <router-link to="/admin/settings" class='no-style'>
                    <select-card background="">
                        <div>Settings</div>
                    </select-card>
                </router-link>
            </div>
        </div>

        <div>
            <h5 class="page-title">Reporting</h5>
            <card>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis fugit nesciunt ratione similique. Aliquid assumenda autem eligendi error est explicabo, facere, fugit ipsa, non odit officia quae sunt voluptate voluptatum?</p>
                <ul>
                    <li>Outstanding Tasks count</li>
                    <li>Current Tasks count</li>
                    <li>Pie chart showing all tasks at statuses</li>
                </ul>
            </card>

        </div>

    </div>
</template>

<script>
    import selectCard from '../parts/select-card';
    import card from '../parts/card';

	export default {
		name: "admin",
        components: { selectCard, card }
	}
</script>

<style scoped>

</style>
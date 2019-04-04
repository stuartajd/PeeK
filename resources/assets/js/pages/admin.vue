<template>
    <div class="container-fluid">
        <h5 class="page-title">Admin</h5>

        <div class="row mb-3">
            <div class="col-md-4">
                <ul class="side-bar-list">
                    <li><router-link to="#users">Users</router-link></li>
                    <li><router-link to="#integrations">Integrations</router-link></li>
                    <li><router-link to="#settings">Settings</router-link></li>
                </ul>
            </div>
            <div class="col-md-8">
                <card id="users" title="Manage Users" class="mb-3">
                    // Table of users
                </card>

                <card id="integrations" title="Manage Integrations" class="mb-3">
                    Slack: <span class="text-success">Connected</span><br />
                    Email: <span class="text-danger">Disconnected</span>
                </card>

                <card id="settings" title="Manage Settings" class="mb-3">
                    // Form for settings
                </card>
            </div>
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
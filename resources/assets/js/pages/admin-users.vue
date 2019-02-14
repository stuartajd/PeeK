<template>
    <div class="container-fluid">
        <h5 class="page-title">Manage Users</h5>

        <card>
            <p>Click on a user to see their account and update all the information.</p>

            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody class="cursor-pointer">
                    <tr>
                        <td>1</td>
                        <td>Test</td>
                        <td>Member</td>
                    </tr>
                </tbody>
            </table>
        </card>
    </div>
</template>

<script>
    import card from '../parts/card';
	export default {
		name: "admin-users",
        components: { card }
	}
</script>

<style scoped>

</style>
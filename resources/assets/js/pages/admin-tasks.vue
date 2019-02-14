<template>
    <div class="container-fluid">
        <h5 class="page-title">Manage Tasks</h5>

        <card>
            <p>View all tasks, update and edit any of the outstanding tasks</p>

            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>TAsk</th>
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
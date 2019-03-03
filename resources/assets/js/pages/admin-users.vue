<template>
    <div class="container-fluid">
        <h5 class="page-title">Manage Users</h5>

        <div class="row">
            <div class="col-md-3">

                <card>
                    Here you are able to create a new user account. blah blah blah

                    <div>
                    <button type="button" class="btn btn-success btn-block">Create User</button></div>
                </card>
            </div>
            <div class="col-md-9">
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
                        <tr v-for="user in users">
                            <td>{{user.id}}</td>
                            <td>{{user.name}}</td>
                            <td>{{user.role.role_name}}</td>
                        </tr>
                        </tbody>
                    </table>
                </card>
            </div>
        </div>
    </div>
</template>

<script>
    import card from '../parts/card';
	export default {
		name: "admin-users",
        components: { card },
        data(){
			return {
		        users: []
            }
        },
        mounted(){
		    axios.get('api/users/getAllUsers')
                .then(resp => this.users = resp.data)
                .catch(err => this.$notify({
                    title: 'Failed to load',
                    text: 'Could not load the users information',
                    type: 'error'
                }));
        },
	}
</script>

<style scoped>

</style>
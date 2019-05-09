<template>
    <div class="container-fluid" id="top">
        <h5 class="page-title">Manage Users</h5>

        <div class="row">
            <div class="col-md-3">

                <ul class="list-group list-group-navigation">
                    <li class="list-group-item"><router-link :to="{ hash: '#users' }">All Users</router-link></li>
                    <li class="list-group-item"><router-link :to="{ hash: '#invite' }">Invite User</router-link></li>
                </ul>

            </div>

            <div class="col-md-9">
                <div class="mb-3" id="users">
                    <h6 class="page-title">All Users</h6>

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

                <div class="mb-3" id="invite">
                    <h6 class="page-title">
                        Invite User
                        <span class="float-right"><router-link :to="{ hash: '#top' }">Back to top</router-link></span>
                    </h6>

                    <card>
                        <p>Enter all the required information to invite a user to your organisation.<br />They will receive an email to set their password.</p>

                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" class="form-control" v-model="create.name" id="name" placeholder="Enter User's Name">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="emailaddress">Email address</label>
                                        <input type="email" class="form-control" v-model="create.email" id="emailaddress" placeholder="Enter email">
                                    </div>
                                </div>
                                <div class="col-md-12 text-right">
                                    <button class="btn btn-success" @click.prevent="createUser">Create User</button>
                                </div>
                            </div>
                        </form>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "users",
        components: {  },
        data(){
			return {
		        users: [],
                create: {
		            name: '',
                    email: '',

                }
            }
        },
        mounted(){
		    this.$http.get('api/users/getAllUsers')
                .then(resp => this.users = resp.data)
                .catch(err => this.$notify({
                    title: 'Failed to load',
                    text: 'Could not load the users information',
                    type: 'error'
                }));
        },
        methods: {
		    createUser(){
		        this.$http.post(`api/users/create/${this.$store.getters.user.company_id}`, this.create)
                        .then(resp => console.log(resp.data));
            }
        }
	}
</script>

<style scoped>

</style>
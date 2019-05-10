<template>
    <div class="container-fluid">
        <h5 class="page-title">Admin</h5>

        <div class="row mb-3">
            <div class="col-md-4">
                <ul class="side-bar-list">
                    <li><router-link to="#users">Users</router-link></li>
                    <li><router-link to="#roles">Roles</router-link></li>
                    <li><router-link to="#integrations">Integrations</router-link></li>
                </ul>
            </div>
            <div class="col-md-8">
                <expand title="Users">
                    <card id="users" title="Manage Users" class="mb-3">
                        <p>Select a user to update their details.</p>

                        <table class="table table-hover cursor-pointer">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="!user.loaded">
                                <td colspan="3">
                                    <loading message="Loading Existing Users.."></loading>
                                </td>
                            </tr>
                            <tr v-for="user in user.users" @click="editUser(user)">
                                <td>{{user.name}}</td>
                                <td>{{user.email}}</td>
                                <td>{{user.role.role_name}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </card>

                    <card id="users-edit" title="Update User" class="mb-3" v-if="user.editing">
                        <form>
                            <div class="form-group">
                                <label for="userName">Name</label>
                                <input type="text" class="form-control" v-model="user.edit.name" name="userName" id="userName" placeholder="User Name">
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" v-model="user.edit.email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>

                            <div class="form-group">
                                <label for="role">User Role</label>
                                <select v-model="user.edit.role_id" class="form-control" id="role">
                                    <option selected disabled>Select role type</option>
                                    <option v-for="role in roles.data" :value="role.id">{{role.role_name}}</option>
                                </select>
                            </div>
                            <div class="float-right">
                                <button type="button" @click.prevent="user.editing = false; user.edit = {};" class="btn btn-outline-danger">
                                    Clear
                                </button>
                            </div>
                            <button type="button" @click.prevent="updateUser()" class="btn btn-outline-success">Update User</button>

                        </form>
                    </card>

                    <card id="users-create" title="Create a User" class="mb-3">
                        <div>
                            <div class="form-group">
                                <label for="userName">Name</label>
                                <input type="text" class="form-control" v-model="user.create.name" name="userName" id="userName" placeholder="User Name">
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" v-model="user.create.email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                <small id="emailHelp" class="form-text text-muted">The user will be asked to enter their password after the account has been activated.</small>
                            </div>

                            <div class="form-group">
                                <label for="role">User Role</label>
                                <select v-model="user.create.role_id" class="form-control" id="role">
                                    <option selected disabled>Select role type</option>
                                    <option v-for="role in roles.data" :value="role.id">{{role.role_name}}</option>
                                </select>
                            </div>
                            <button type="button" @click="createUser()" class="btn btn-outline-success">Create User</button>
                        </div>
                    </card>
                </expand>

                <expand title="Roles">
                    <card id="roles-all" title="All Roles" class="mb-3">
                        <table class="table mb-0">
                            <thead>
                            <tr>
                                <th>Role Name</th>
                                <th>Role Type</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="!roles.loaded">
                                <td colspan="3">
                                    <loading message="Loading Roles.."></loading>
                                </td>
                            </tr>
                            <tr v-if="!roles.data.length">
                                <td colspan="3" class="text-center">
                                    There are no configured roles.
                                </td>
                            </tr>
                            <tr v-for="role in roles.data" :class="{'table-danger':role.deleted}">
                                <td>
                                    <input type="text" aria-label="First name" v-model="role.role_name" class="form-control">
                                </td>
                                <td :colspan="{'2':role.deleted}">
                                    <select class="custom-select" v-model="role.role_type" id="inputGroupSelect01">
                                        <option selected disabled>Select role type</option>
                                        <option value="developer">Developer</option>
                                        <option value="task">Task Controller</option>
                                        <option value="administrator">Administrator</option>
                                    </select>
                                </td>
                                <td v-if="!role.deleted" @click.prevent="removeRole(role)" style="vertical-align: middle;" class="cursor-pointer">
                                    X
                                </td>
                            </tr>
                            <tr v-if="roles.loaded">
                                <td colspan="2" class="text-center cursor-pointer font-weight-bold" @click.prevent="addRole()">
                                    + Add Role
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <div class="text-right">
                            <button class="btn btn-outline-success" @click.prevent="saveRoles()">Save Roles</button>
                        </div>
                    </card>
                </expand>

                <expand title="Integrations">
                    <card id="integrations" title="Manage Integrations" rightText="Add Integration" rightLink="addIntegration" class="mb-3">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item list-group-item-action">
                                <div class="media align-items-center">
                                    <img src="/images/Slack_Mark.svg" class="mr-3"  style="max-width: 75px;"  alt="">
                                    <div class="media-body">
                                        <h5 class="mt-0">Slack</h5>
                                        <span class="text-danger font-weight-bold">Disconnected</span><br />
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item list-group-item-action">
                                <div class="media align-items-center">
                                    <img src="/images/Mail_Mark.png" class="mr-3" style="height: 45px;margin-right: 30px!important;" alt="">
                                    <div class="media-body">
                                        <h5 class="mt-0">Email</h5>
                                        <span class="text-success font-weight-bold">Connected</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </card>
                </expand>
            </div>
        </div>
    </div>
</template>

<script>
    import selectCard from '../parts/select-card';
    import card from '../parts/card';
    import expand from '../parts/expand';

	export default {
		name: "admin",
        components: { selectCard, card, expand },
        data() {
		    return {
		        roles: {
		            loaded: false,
		            data: []
                },
		        user: {
		            loaded: false,
                    users: [],
                    create: {
                        name: "",
                        email: "",
                        role: ""
                    },
                    createErrors: {},
                    editing: false,
                    edit: {
                        name: "",
                        email: "",
                        role: ""
                    },
                }
            }
        },
        mounted(){
		    // Select users
		    this.$http.get('/api/users/getAllUsers')
                .then(resp => {
                    this.user.users = resp.data;
                    this.user.loaded = true;
                });

            // Set roles
            this.$http.get('/api/settings/role')
                    .then(resp => {
                        this.roles.data = resp.data;
                        this.roles.loaded = true;
                    });
        },
        methods: {
		    removeRole(role){
                this.$set(role, 'deleted', true);
            },
		    addRole(){
		        this.roles.data.push({ role_name: "", role_type: "" });
            },
            saveRoles(){
                this.$http.post('/api/settings/role/update', this.roles.data)
                    .then(resp => {
                        this.$notify({
                            type: 'success',
                            text: 'Roles have been saved successfully'
                        });

                        this.roles.data = resp.data;
                    });
            },
            updateUser(){
                this.$http.post('/api/users/update', this.user.edit)
                        .then(resp => {
                            this.$notify({
                                type: 'success',
                                text: 'User account has been updated successfully'
                            });

                            this.user.edit = {name: "",email: "",role_id: ""};
                            this.user.editing = false;
                            this.user.users = resp.data;
                        })
                        .catch(err => {
                            this.$notify({
                                type: 'error',
                                text: 'User account could not be created'
                            })
                        })
            },
		    createUser(){
		          this.$http.post('/api/users/create', this.user.create)
                      .then(resp => {
                          this.$notify({
                              type: 'success',
                              text: 'User account has been registered successfully'
                          });

                          this.user.create = {name: "",email: "",role_id: ""};
                          this.user.users = resp.data;
                      })
                      .catch(err => {
                        this.$notify({
                              type: 'error',
                              text: 'User account could not be created'
                          })
                      })
            },
		    editUser(user){
		        this.user.editing = true;
		        this.user.edit = user;
            }
        }
	}
</script>

<style scoped>

</style>
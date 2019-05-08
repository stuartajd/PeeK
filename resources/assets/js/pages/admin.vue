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
    
                <card id="users-create" title="Create a User" class="mb-3">
                    <form>
                        <div class="form-group">
                            <label for="userName">Name</label>
                            <input type="text" class="form-control" v-model="create.username" name="userName" id="userName" placeholder="User Name">
                        </div>
                        
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" v-model="create.email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            <small id="emailHelp" class="form-text text-muted">The user will be asked to enter their password after the account has been activated.</small>
                        </div>
                        
                        <div class="form-group">
                            <label for="role">User Role</label>
                            <select v-model="create.role" class="form-control" id="role">
                                <option>Developer</option>
                                <option>Quality Assurance</option>
                                <option>Manager</option>
                                <option>System Administrator</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-outline-success">Create User</button>
                    </form>
                </card>

                <card id="integrations" title="Manage Integrations" rightText="Add Integration" rightLink="addIntegration" class="mb-3">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-action">
                            <div class="media align-items-center">
                                <img src="/images/Slack_Mark.svg" class="mr-3"  style="max-width: 75px;"  alt="">
                                <div class="media-body">
                                    <h5 class="mt-0">Slack</h5>
                                    <span class="text-danger font-weight-bold">Disconnected</span><br />
                                    <span class="text-muted">Click this action to begin the integration.</span>
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
        components: { selectCard, card },
        data() {
		    return {
		        create: {
		            username: "",
                    email: "",
                    role: ""
                }
            }
        }
	}
</script>

<style scoped>

</style>
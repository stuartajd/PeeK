<template>
    <div class="container-fluid">

        <h5 class="page-title">Create Task</h5>

        <div class="row">
            <div class="col-md-8">
                <card title="Task Details">
                    <div class="form-group">
                        <label for="taskName">Task Name</label>
                        <input type="text" class="form-control" id="taskName" v-model='task.title' placeholder="Task Name">
                    </div>
                    <div class="form-group">
                        <label for="taskDescription">Task Description</label>
                        <textarea class="form-control" id="taskDescription" placeholder="Task Description" v-model='task.description' rows="10"></textarea>
                    </div>
                </card>
            </div>
            <div class="col-md-4">
                <card title="Task Options" class="mb-3">
                    <div class="form-group">
                        <label for="taskName">Task Priority</label>
                        <select name="" id="" class="form-control" v-model="task.priority">
                            <option value="" disabled>Select Priority</option>
                            <option value="low">Low Priority</option>
                            <option value="normal">Normal Priority</option>
                            <option value="urgent">Urgent Priority</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="taskDescription">Task Due Date</label>
                        <datepicker input-class="form-control" format="dsu MMM yyyy" v-model="task.due_date"></datepicker>
                    </div>
                    <div class="form-group">
                        <label for="taskDescription">Account</label>
                        <select name="" id="" class="form-control" v-model="task.account_id">
                            <option value="" disabled>Select Account</option>
                            <option v-for="account in accounts" :value="account.id">{{account.name}}</option>
                        </select>
                    </div>
                </card>

                <card title="Task Users" class="mb-3">
                    <user-list @updateUsers="updateUsers"></user-list>
                </card>

                <div>
                    <button class="btn btn-success btn-block btn-sm" @click.prevent="createTask()">Create Task</button>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
    import card from '../parts/card';
    import userList from '../parts/user-list';
	import Datepicker from 'vuejs-datepicker';

	export default {
		name: "task-create",
		components: { card, Datepicker, userList },
        data() {
			return {
			    accounts: [],
				task: {
					title: "",
                    description: "",
                    priority: "",
                    due_date: "",
                    account_id: "",
                    users: []
                }
            }
        },
        methods: {
			updateUsers(users){
			    this.task.users = users;
            },
		    createTask(){
		    	this.$http.post('/api/tasks/create', this.task)
                    .then(resp => {
                    	this.$notify({
                            title: 'Task Created',
                            type: 'success'
                        });

                    	this.$router.push(`/tasks/view/${resp.data.id}`);
                    })
                    .catch(error => {
                    	console.log(error);
                    })
            }
        },
		mounted() {
            this.$http.get('/api/settings/accounts')
                .then(resp => {
                    this.accounts = resp.data;
                });
		}
	}
</script>

<style>

</style>
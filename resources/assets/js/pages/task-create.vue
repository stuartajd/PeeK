<template>
    <div class="container-fluid">

        <h5 class="page-title">Create Task</h5>

        <div class="row">
            <div class="col-md-8">
                <card title="Task Details">
                    <div class="form-group">
                        <label for="taskName">Task Name</label>
                        <input type="text" class="form-control" :class="{ 'is-invalid' : errors && errors.title.length}" id="taskName" v-model='task.title' placeholder="Task Name">
                        <div v-if="errors && errors.title.length" class="text-danger">{{errors.title[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label for="taskDescription">Task Description</label>
                        <textarea class="form-control" :class="{ 'is-invalid' : errors && errors.description.length}"
                                  id="taskDescription" placeholder="Task Description" v-model='task.description' rows="10"></textarea>
                        <div v-if="errors && errors.description.length" class="text-danger">{{errors.description[0]}}</div>
                    </div>
                </card>
            </div>
            <div class="col-md-4">
                <card title="Task Options" class="mb-3">
                    <div class="form-group">
                        <label for="taskName">Task Priority</label>
                        <select name="" id="" class="form-control" :class="{ 'is-invalid' : errors && errors.priority.length}" v-model="task.priority">
                            <option value="" disabled>Select Priority</option>
                            <option value="low">Low Priority</option>
                            <option value="normal">Normal Priority</option>
                            <option value="urgent">Urgent Priority</option>
                        </select>
                        <div v-if="errors && errors.priority.length" class="text-danger">{{errors.priority[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label for="taskDescription">Task Due Date</label>
                        <datepicker input-class="form-control" :class="{ 'is-invalid' : errors && errors.due_date.length}" format="dsu MMM yyyy" v-model="task.due_date"></datepicker>
                        <div v-if="errors && errors.due_date.length" class="text-danger">{{errors.due_date[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label for="taskDescription">Account</label>
                        <select name="" id=""  :class="{ 'is-invalid' : errors && errors.account_id.length}" class="form-control" v-model="task.account_id">
                            <option value="" disabled>Select Account</option>
                            <option v-for="account in accounts" :value="account.id">{{account.name}}</option>
                        </select>
                        <div v-if="errors && errors.account_id.length" class="text-danger">{{errors.account_id[0]}}</div>
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
			    errors: null,
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
                    .catch(err => {
                        this.$notify({
                            title: 'Task could not be created.',
                            type: 'error'
                        });
                        this.errors = err.response.data.errors;
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
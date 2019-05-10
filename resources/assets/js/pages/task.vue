<template>
    <div class="container-fluid">
        <loading :loading="task.loaded" message="Loading Task Details.." />

        <div v-if="task.loaded && task.data">
            <div class="row">
                <div class="col-md-9">
                    <card :title="task.data.title" class="mb-3">
                        <div class="inset-text">{{task.data.description}}</div>
                    </card>

                    <div class="row">
                        <div class="col-md-6">
                            <card title="Attachments" class="mb-3">
                                <div class="text-center">There are currently no files attached to this task.</div>
                            </card>
                        </div>
                        <div class="col-md-6">
                            <card title="Audit Logs" class="mb-3">
                                <scroll-group>
                                    <div v-for="action in task.data.audit" class="list-group-item list-group-item-action not-selectable cursor-pointer">{{action.audit}}<br />
                                        <small>{{action.user.name}} at {{action.created_at}}</small>
                                    </div>
                                </scroll-group>
                            </card>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <h6 class="page-title text-right">Project Actions</h6>
                    <div class="mb-3">
                        <button type="button" @click.prevent="$router.push(`/tasks/actions/${task.data.id}`)" class="btn btn-brand btn-sm btn-block mb-3">Open Breakdown</button>

                        <modal button="Edit Task" @opened="setEditable" buttonclass="btn btn-outline-success btn-sm btn-block mb-3" submit="Update Task" @submit="updateTask">
                            <div class="row">
                                <div class="col-md-8">
                                    <card title="Task Details" class="shadow-0">
                                        <div class="form-group">
                                            <label for="taskName">Task Name</label>
                                            <input type="text" class="form-control" :class="{ 'is-invalid' : errors && errors.title.length}"
                                                   id="taskName" v-model='task.edit.title' placeholder="Task Name">
                                            <div v-if="errors && errors.title.length" class="text-danger">{{errors.title[0]}}</div>
                                        </div>
                                        <div class="form-group">
                                            <label for="taskDescription">Task Description</label>
                                            <textarea class="form-control" id="taskDescription" :class="{ 'is-invalid' : errors && errors.description.length}" placeholder="Task Description" v-model='task.edit.description' rows="10"></textarea>
                                            <div v-if="errors && errors.description.length" class="text-danger">{{errors.description[0]}}</div>
                                        </div>
                                    </card>
                                </div>
                                <div class="col-md-4">
                                    <card title="Task Options" class="mb-3">
                                        <div class="form-group">
                                            <label for="taskName">Task Priority</label>
                                            <select name="" id="" class="form-control" v-model="task.edit.priority" :class="{ 'is-invalid' : errors && errors.priority.length}">
                                                <option value="" disabled>Select Priority</option>
                                                <option value="low">Low Priority</option>
                                                <option value="normal">Normal Priority</option>
                                                <option value="urgent">Urgent Priority</option>
                                            </select>
                                            <div v-if="errors && errors.priority.length" class="text-danger">{{errors.priority[0]}}</div>
                                        </div>
                                        <div class="form-group">
                                            <label for="taskDescription">Task Due Date</label>
                                            <datepicker input-class="form-control" format="dsu MMM yyyy" v-model="task.edit.due_date"
                                                        :class="{ 'is-invalid' : errors && errors.due_date.length}"></datepicker>
                                            <div v-if="errors && errors.due_date.length" class="text-danger">{{errors.due_date[0]}}</div>
                                        </div>
                                        <div class="form-group">
                                            <label for="taskDescription">Account</label>
                                            <select name="" id="" class="form-control" v-model="task.edit.account_id" :class="{ 'is-invalid' : errors && errors.account_id.length}">
                                                <option value="" disabled>Select Account</option>
                                                <option value="1">Test</option>
                                            </select>
                                            <div v-if="errors && errors.account_id.length" class="text-danger">{{errors.account_id[0]}}</div>
                                        </div>
                                    </card>

                                    <card title="Task Users" class="mb-3">
                                        <user-list @updateUsers="updateEditUsers"></user-list>
                                    </card>

                                </div>
                            </div>
                        </modal>

                        <div class="btn-group d-block" role="group">
                            <button id="btnGroupDrop1" type="button" class="btn btn-secondary btn-sm btn-block dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Set Status
                            </button>
                            <div class="dropdown-menu w-100" aria-labelledby="btnGroupDrop1">
                                <div v-for="state in status">
                                    <div class="dropdown-item not-selectable cursor-pointer" @click.prevent="setStatus(task, state.name)">{{state.title}}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h6 class="page-title text-right">Project Details</h6>
                    <card class="mb-3">
                        <div class="mb-3">
                            <h6 class="page-title">Due Date</h6>
                            <div>{{task.data.due_date}}</div>
                        </div>

                        <div class="mb-3">
                            <h6 class="page-title">Priority</h6>
                            <div>
                                <priority :priority="task.data.priority"></priority>
                            </div>
                        </div>

                        <div class="mb-3">
                            <h6 class="page-title">Status</h6>
                            <div>
                                <status :status="task.data.status"></status>
                            </div>
                        </div>

                        <div>
                            <h6 class="page-title">Account</h6>
                            <div><router-link :to="`/accounts/${task.data.account.id}`">{{task.data.account.name}}</router-link></div>
                        </div>
                    </card>

                    <card class="mb-3">
                        <h6 class="page-title">Assigned Users</h6>
                        <div v-for="assigned in task.data.users"><router-link :to="`/users/${assigned.id}`">{{assigned.name}}</router-link></div>
                    </card>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
	import card from '../parts/card';
	import loading from '../parts/loading';
	import priority from '../parts/priority';
	import status from '../parts/status';
	import scrollGroup from '../parts/scroll-group';
    import userList from '../parts/user-list';
    import Datepicker from 'vuejs-datepicker';

	import {varStatus} from '../variables';

	export default {
		name: "task",
		components: { card, loading, priority, status, scrollGroup, userList, Datepicker },
		data() {
			return {
                errors: null,

                task: {
                    edit: {},
					data: {},
					loaded: false,
				}
			}
		},
        computed: {
            status(){
            	return varStatus;
            }
        },
        methods: {
		    updateEditUsers(users){
		        this.task.edit.users = users;
            },
            setEditable(){
		        this.task.edit = this.task.data;
            },
            updateTask(){
                this.$http.put('api/tasks/update/'+ this.$route.params.tid, this.task.edit)
                        .then(response => {
                            this.task.data = response.data;
                            this.$notify({
                                title: 'Update complete',
                                text: 'Task has been updated',
                                type: 'success'
                            })
                        })
                        .catch(error => {
                            this.$notify({
                                title: 'Failed update',
                                text: 'Could not update the task, please try again.',
                                type: 'error'
                            })

                            this.errors = error.response.data.errors;
                        });
            },
		    setStatus(task, state){
		    	if(!task || !state) return false;
				this.$http.put('api/tasks/update/'+ this.$route.params.tid, { status: state })
                    .then(response => {
                        this.task.data = response.data;
                        this.$notify({
                            title: 'Update complete',
                            text: 'Task status has been updated',
                            type: 'success'
                        })
                    })
                    .catch(error => {
                    	this.$notify({
                            title: 'Failed update',
                            text: 'Could not update the task status, please try again.',
                            type: 'error'
                        })
                    });
            }
        },
		mounted() {
			this.$http.get('api/tasks/'+ this.$route.params.tid)
				.then(response => {
					this.task.loaded = true;
					this.task.data = response.data;

					if(!this.task.data){
						this.$router.push({ name: '404' })
                    }
				})
                .catch(err => {
                    console.error("Error");
                });
		}
	}
</script>

<style>

</style>
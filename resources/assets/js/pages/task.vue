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
                                <div>Attachments</div>
                            </card>
                        </div>
                        <div class="col-md-6">
                            <card title="Audit Logs" class="mb-3">
                                <scroll-group>
                                    <div v-for="action in task.data.audit" class="list-group-item list-group-item-action not-selectable cursor-pointer">{{action.audit}}</div>
                                </scroll-group>
                            </card>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <h6 class="page-title text-right">Project Actions</h6>
                    <div class="mb-3">
                        <button type="button" @click.prevent="$router.push(`/tasks/actions/${task.id}`)" class="btn btn-brand btn-sm btn-block mb-3">Open Actions</button>

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
                        <div v-for="assigned in task.data.users"><router-link :to="`/users/${assigned.user.id}`">{{assigned.user.name}}</router-link></div>
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

	import {varStatus} from '../variables';

	export default {
		name: "task",
		components: { card, loading, priority, status, scrollGroup },
		data() {
			return {
				task: {
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
		    setStatus(task, state){
		    	if(!task || !state) return false;
				axios.put('api/tasks/'+ this.$route.params.tid, { status: state })
                    .then(response => {
                        this.task.data = response.data.tasks[0];
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
			axios.get('api/tasks/'+ this.$route.params.tid)
				.then(response => {
					this.task.loaded = true;
					this.task.data = response.data.tasks[0];

					if(!this.task.data){
						this.$router.push({ name: '404' })
                    }
				});
		}
	}
</script>

<style>

</style>
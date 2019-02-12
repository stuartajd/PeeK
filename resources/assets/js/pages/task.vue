<template>
    <div class="container-fluid">
        <h5 class="page-title">Task <span v-if="task.loaded && task.data">#{{task.data.id}}</span></h5>

        <loading :loading="task.loaded" message="Loading Task Details.." />

        <div v-if="task.loaded && task.data">
            <div class="row">
                <div class="col-md-9">
                    <card :title="task.data.title" class="mb-3">
                        <div class="inset-text">{{task.data.description}}</div>
                    </card>

                    <div class="row">
                        <div class="col-md-6">
                            <card title="Audit Logs" class="mb-3">
                                <div>Audit Logs</div>
                            </card>
                        </div>
                        <div class="col-md-6">
                            <card title="Attachments" class="mb-3">
                                <div>Attachments</div>
                            </card>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <h6 class="page-title text-right">Project Actions</h6>
                    <div class="mb-3">
                        <button type="button" class="btn btn-brand btn-sm btn-block">Open Actions</button>
                    </div>

                    <h6 class="page-title text-right">Project Details</h6>
                    <card class="mb-3">
                        <h6 class="page-title">Due Date</h6>
                        <div>{{task.data.due_date}}</div>
                    </card>

                    <card class="mb-3">
                        <h6 class="page-title">Priority</h6>
                        <div>
                            <priority :priority="task.data.priority"></priority>
                        </div>
                    </card>

                    <card class="mb-3">
                        <h6 class="page-title">Created By</h6>
                        <div><router-link :to="`/users/${task.data.creator.id}`">{{task.data.creator.name}}</router-link></div>
                    </card>

                    <card class="mb-3">
                        <h6 class="page-title">Assigned Users</h6>
                        <div v-for="assigned in task.data.users"><router-link :to="`/users/${assigned.user.id}`">{{assigned.user.name}}</router-link></div>
                    </card>

                    <card class="mb-3">
                        <h6 class="page-title">Account</h6>
                        <div>Company Account</div>
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

	import '../variables';

	export default {
		name: "task",
		components: { card, loading, priority },
		data() {
			return {
				task: {
					data: {},
					loaded: false,
				}
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
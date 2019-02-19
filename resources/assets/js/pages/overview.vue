<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col-md-9">
                <h5 class="page-title">Dashboard</h5>

                <div class="row mb-3">
                    <div class="col-md-4">
                        <card class="text-center" :loading="!tasks.loaded" loadingText="Loading tasks">
                            <h1>{{incompleteTasks.length}}</h1>
                            <span class="text-muted">Incomplete Tasks <small>this week</small></span>
                        </card>
                    </div>

                    <div class="col-md-4">
                        <card class="text-center" :loading="!tasks.loaded" loadingText="Loading tasks">
                            <h1>{{awaitingTasks.length}}</h1>
                            <span class="text-muted">Awaiting Testing Tasks <small>this week</small></span>
                        </card>
                    </div>

                    <div class="col-md-4">
                        <card class="text-center" :loading="!tasks.loaded" loadingText="Loading tasks">
                            <h1>{{completedTasks.length}}</h1>
                            <span class="text-muted">Completed Tasks <small>this week</small></span>
                        </card>
                    </div>
                </div>

                <card title="Component Title" subtitle="Component Subtitle">
                    <ul>
                        <li>Display of current tasks</li>
                        <li>Display of pie chart of priority tasks</li>
                        <li>Statistics of current & completed tasks for the days</li>
                        <li>Team member lists & profiles</li>
                        <li>Notes section</li>
                        <li>News and updates module</li>
                    </ul>
                </card>

            </div>
            <div class="col-md-3">
                <div class="mb-3">
                    <div class="page-title text-right">Task Activity</div>

                    <card title="Outstanding Tasks">
                        <loading :loading="tasks.loaded" />
                        <div v-if="!tasks.data.length">You have no outstanding tasks</div>
                        <list-group :list="tasks.data" scroll="true" linked="true" linkRoute="tasks/view" linkKey="id"></list-group>
                    </card>
                </div>

                <div class="mb-3">
                    <div class="page-title text-right">Your Actions</div>
                    <router-link to='/tasks' class="btn btn-info text-white d-block mb-3">View Your Tasks</router-link>

                    <router-link to='/tasks/create' class="btn btn-success d-block">Create Task</router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import card from '../parts/card';
	import loading from '../parts/loading';
    import listGroup from '../parts/list-group';

    export default {
        name: "overview",
        components: { card, loading, listGroup },
        data() {
			return {
				tasks: {
					data: [],
                    loaded: false,
                }
            }
        },
        computed: {
            completedTasks(){
            	return this.tasks.data.filter(el => el.status == 'completed');
            },
            incompleteTasks(){
                return this.tasks.data.filter(el => el.status !== 'completed');
            },
            awaitingTasks(){
            	return this.tasks.data.filter(el => el.status == 'awaiting');
            }
        },
        mounted() {
            axios.get('api/tasks')
				.then(response => {
					this.tasks.loaded = true;
					this.tasks.data = response.data.tasks;
                })
                .catch(error => {
                	console.log(error);
                });
        }
    }
</script>

<style>

</style>
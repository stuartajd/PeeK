<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col-md-9">
                <h5 class="page-title">Dashboard</h5>

                <div class="row mb-3">
                    <div class="col-md-4">
                        <card class="text-center">
                            <h1>3</h1>
                            <span class="text-muted">Incomplete Tasks <small>this week</small></span>
                        </card>
                    </div>

                    <div class="col-md-4">
                        <card class="text-center">
                            <h1>3</h1>
                            <span class="text-muted">Awaiting Testing Tasks <small>this week</small></span>
                        </card>
                    </div>

                    <div class="col-md-4">
                        <card class="text-center">
                            <h1>3</h1>
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

                        <div v-for="task in tasks.data" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom"><router-link :to="`/tasks/${task.id}`">{{task.title}}</router-link></div>
                    </card>
                </div>

                <div class="mb-3">
                    <div class="page-title text-right">Overview Actions</div>

                    <router-link to='tasks/create' class="btn btn-success d-block">Create Task</router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import card from '../parts/card';
	import loading from '../parts/loading';

    export default {
        name: "overview",
        components: { card, loading },
        data() {
			return {
				tasks: {
					data: [],
                    loaded: false,
                }
            }
        },
        mounted() {
            axios.get('api/tasks')
				.then(response => {
					this.tasks.loaded = true;
					this.tasks.data = response.data.tasks;
                });
        }
    }
</script>

<style>

</style>
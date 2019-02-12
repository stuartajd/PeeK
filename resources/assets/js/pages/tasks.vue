<template>
    <div class="container-fluid">

        <h5 class="page-title">Tasks</h5>

        <loading :loading="tasks.loaded" message="Loading Tasks.." />

        <div class="row">
            <div class="col-md-12" v-if="!tasks.data.length"><card>There are no tasks to display.</card></div>

            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Status</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="task.id" v-for="task in tasks.data" class="cursor-pointer" @click.prevent="$router.push(`/tasks/${task.id}`)">
                        <td>{{task.id}}</td>
                        <td>{{task.title}}</td>
                        <td>{{task.status}}</td>
                        <td>{{task.priority}}</td>
                        <td>{{task.due_date}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
	import card from '../parts/card';
	import loading from '../parts/loading';

	export default {
		name: "tasks",
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
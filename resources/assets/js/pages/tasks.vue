<template>
    <div class="container-fluid">

        <h5 class="page-title">Tasks</h5>

        <loading :loading="tasks.loaded" message="Loading Tasks.." />

        <div class="row">
            <div class="col-md-6" :key="task.id" v-for="task in tasks.data">
                <router-link :to="`/tasks/${task.id}`" class='no-style'>
                    <card :title="task.title" class="mb-3 hoverable">
                        <div>{{task.description}}</div>
                    </card>
                </router-link>
            </div>
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
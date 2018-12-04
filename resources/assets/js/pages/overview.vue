<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col-md-9">
                <h5 class="page-title">Dashboard</h5>
                <card title="Component Title" subtitle="Component Subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto distinctio dolore eaque eius eveniet excepturi itaque laboriosam libero, molestias nam nostrum perferendis possimus quasi, quidem similique sunt tenetur, unde.</card>

            </div>
            <div class="col-md-3">
                <div class="page-title text-right">Task Activity</div>

                <card title="Outstanding Tasks">
                    <loading :loading="tasks.loaded" />
                    <div v-for="task in tasks.data">{{task.title}}</div>
                </card>
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
            axios.get('https://jsonplaceholder.typicode.com/todos')
				.then(response => {
					this.tasks.loaded = true;
					this.tasks.data = response.data;
                });
        }
    }
</script>

<style>

</style>
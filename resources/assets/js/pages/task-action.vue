<template>
    <div class="container-fluid">

        <h5 class="page-title">Task Actions</h5>

        <div class="row">
            <div class="col-md-3 ">
                <card title="Awaiting" class="dropzone">
                    <div class="list-group">
                        <draggable class="droparea" v-model="actions" :options="{group:'draggable'}" @start="drag=true" @end="drag=false">
                            <card v-for="element in actions" class="mb-3" :key="element.id">{{element.name}}</card>
                        </draggable>
                    </div>
                </card>
            </div>
            <div class="col-md-3 ">
                <card title="In Progress" class="dropzone">
                    <div class="list-group">
                        <draggable class='droparea' v-model="actions2" :options="{group:'draggable'}" @start="drag=true" @end="drag=false">
                            <div v-for="element in actions2" class="list-group-item" :key="element.id">{{element.name}}</div>
                        </draggable>
                    </div>
                </card>

            </div>
            <div class="col-md-3 ">
                <card title="Something else" class="dropzone">
                    <div class="list-group">
                        <draggable class='droparea' v-model="actions3" :options="{group:'draggable'}" @start="drag=true" @end="drag=false">
                            <div v-for="element in actions3" class="list-group-item" :key="element.id">{{element.name}}</div>
                        </draggable>
                    </div>
                </card>
            </div>
            <div class="col-md-3 ">
                <card title="Complete" class="dropzone">
                    <div class="list-group">
                        <draggable class='droparea' v-model="actions4" :options="{group:'draggable'}" @start="drag=true" @end="drag=false">
                            <div v-for="element in actions4" class="list-group-item" :key="element.id">{{element.name}}</div>
                        </draggable>
                    </div>
                </card>
            </div>
        </div>
    </div>
</template>

<script>
    import card from '../parts/card';
    import draggable from 'vuedraggable';

    export default {
		name: "task-action",
		components: { card, draggable },
        data() {
			return {
                actions: [
                	{id: 1, name:'test', description: 'test'},
                    {id: 2, name:'test2', description: 'test'},
                    {id: 3, name:'test3', description: 'test'},
                    {id: 4, name:'test4', description: 'test'}
                ],
                actions2: [],
                actions3: [],
                actions4: []
            }
        },
        methods: {

        },
		mounted() {

		}
	}
</script>

<style>

</style>
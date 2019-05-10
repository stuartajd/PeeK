<template>
    <div class="container-fluid">

        <h5 class="page-title">Task Breakdown</h5>

        <div class="text-right mb-3">
            <modal button="Create Breakdown Item" buttonclass="btn btn-outline-success" title="Create Breakdown Item" submit="Create Item" @submit="createItem">
                <form action="">
                    <div class="form-group">
                        <label for="taskName">Item Name</label>
                        <input type="text" class="form-control" id="taskName" v-model='create.title' placeholder="Task Name">
                    </div>
                    <div class="form-group">
                        <label for="taskDescription">Item Description</label>
                        <textarea class="form-control" id="taskDescription" placeholder="Task Description" v-model='create.description' rows="5"></textarea>
                    </div>
                    <select name="" id="" class="form-control" v-model="create.status">
                        <option value="" disabled>Select Status</option>
                        <option value="awaiting">Awaiting</option>
                        <option value="progress">In Progress</option>
                        <option value="testing">Ready for Testing</option>
                        <option value="complete">Complete</option>
                    </select>
                </form>
            </modal>
        </div>
        
        <div class="row">
            <div class="col-md-3 ">
                <card title="Awaiting" class="dropzone">
                    <div class="list-group">
                        <draggable class="droparea" v-model="list.awaiting" :options="{group:'draggable'}" @start="drag=true" @end="drag=false;updateLists();">
                            <card v-for="element in list.awaiting" class="mb-3" :key="element.id">{{element.title}}</card>
                        </draggable>
                    </div>
                </card>
            </div>

            <div class="col-md-3 ">
                <card title="In Progress" class="dropzone">
                    <div class="list-group">
                        <draggable class='droparea' v-model="list.progress" :options="{group:'draggable'}" @start="drag=true" @end="drag=false;updateList();">
                            <card v-for="element in list.progress" class="mb-3" :key="element.id">{{element.title}}</card>
                        </draggable>
                    </div>
                </card>
            </div>

            <div class="col-md-3 ">
                <card title="Ready for Testing" class="dropzone">
                    <div class="list-group">
                        <draggable class='droparea' v-model="list.testing" :options="{group:'draggable'}" @start="drag=true" @end="drag=false;updateList();">
                            <card v-for="element in list.testing" class="mb-3" :key="element.id">{{element.title}}</card>
                        </draggable>
                    </div>
                </card>
            </div>
            <div class="col-md-3 ">
                <card title="Complete" class="dropzone">
                    <div class="list-group">
                        <draggable class='droparea' v-model="list.complete" :options="{group:'draggable'}" @start="drag=true" @end="drag=false;updateList();">
                            <card v-for="element in list.complete" class="mb-3" :key="element.id">{{element.title}}</card>
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
    import modal from '../parts/modal';

    export default {
		name: "task-action",
		components: { card, draggable, modal },
        data() {
			return {
			    loaded: false,
                create: { title: "", description: "", status: ""},
			    task: {},
                list: {
			        awaiting: [],
                    progress: [],
                    testing: [],
                    complete: []
                }
            }
        },
        methods: {
            createItem(){
                this.$http.post('/api/tasks/breakdown/'+ this.$route.params.tid +'/create', this.create)
                    .resp(resp => {
                        this.$notify({
                            title: 'Breakdown item created successfully',
                            type: 'success'
                        })

                        this.task = resp.data;

                        this.sortLists();
                    });
            },
            sortLists(){
                this.list.awaiting = this.awaiting;
                this.list.progress = this.progress;
                this.list.testing = this.testing;
                this.list.complete = this.complete;
            }
        },
        computed: {
		    awaiting(){
		        return this.task.breakdown.filter(el => el.status == 'awaiting');
            },
            progress(){
                return this.task.breakdown.filter(el => el.status == 'progress');
            },
            testing(){
                return this.task.breakdown.filter(el => el.status == 'testing');
            },
            complete(){
                return this.task.breakdown.filter(el => el.status == 'complete');
            }
        },
		mounted() {
            this.$http.get('/api/tasks/breakdown/'+ this.$route.params.tid)
                .then(resp => {
                    this.task = resp.data;
                    this.sortLists();
                    this.loaded = true;
                });
		}
	}
</script>

<style>

</style>
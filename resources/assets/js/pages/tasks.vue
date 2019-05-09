<template>
    <div class="container-fluid">
        <h5 class="page-title">Your Tasks</h5>

        <loading :loading="tasks.loaded" message="Loading Tasks.." />

        <div class="row">
            <div class="col-md-12" v-if="!tasks.data.length"><card>There are no tasks to display.</card></div>

            <div class="col-md-12 mb-3" v-if="tasks.data.length">
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Search</span>
                            </div>
                            <input type="text" class="form-control" v-model="filterTerm">
                        </div>
                    </div>

                    <div class="col-md-2 text-right">
                        <button type="button" class="btn btn-secondary btn-block d-block">Tasks History</button>
                    </div>
                    <div class="col-md-2 text-right">
                        <button-popup buttonText="Advanced Searching" buttonClass="btn btn-secondary btn-block d-block">
                            <div>
                                <div>You are able to use specific advanced commands to search for your required task.</div>
                                <div><code>status:[status]</code> - Search by status</div>
                                <div><code>priority:[priority]</code> - Search by priority</div>
                            </div>
                        </button-popup>
                    </div>
                </div>
            </div>

            <div class="col-md-12" v-if="tasks.data.length">
                <div class="list-group">
                    <div class="list-group-item text-white bg-brand">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item">{{tasks.data.length}} Incomplete Tasks</li>
                                </ul>
                            </div>
                            <div class="col-md-6 text-right">
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item">
                                        <div class="cursor-pointer">
                                            <span @click.prevent="sortFiltered('id', 'asc')" v-if="sort.type != 'id'">Clear</span>
                                        </div>
                                    </li>
                                    <li class="list-inline-item">
                                        <div class="cursor-pointer">
                                            <span @click.prevent="sortFiltered('due_date', 'asc')" v-if="sort.type != 'due_date'">
                                                Due Date <icon name="arrow_right"/>
                                            </span>
                                            <span
                                                @click.prevent="sortFiltered('due_date', 'desc')"
                                                v-if="sort.type == 'due_date' && sort.mode == 'asc'">
                                                Due Date <icon name="arrow_down" /></span>

                                            <span
                                                @click.prevent="sortFiltered('due_date', 'asc')"
                                                v-if="sort.type == 'due_date' && sort.mode == 'desc'">
                                                Due Date <icon name="arrow_up" /></span>
                                        </div>
                                    </li>
                                    <li class="list-inline-item">
                                        <div class="cursor-pointer">
                                            <span @click.prevent="sortFiltered('status', 'asc')" v-if="sort.type != 'status'">
                                                Status <icon name="arrow_right"/>
                                            </span>
                                            <span
                                                    @click.prevent="sortFiltered('status', 'desc')"
                                                    v-if="(sort.type == 'status' && sort.mode == 'asc')">
                                                Status <icon name="arrow_down" /></span>

                                            <span
                                                    @click.prevent="sortFiltered('status', 'asc')"
                                                    v-if="sort.type == 'status' && sort.mode == 'desc'">
                                                Status <icon name="arrow_up" /></span>
                                        </div>
                                    </li>
                                    <li class="list-inline-item">
                                        <div class="cursor-pointer">
                                            <span @click.prevent="sortFiltered('priority', 'asc')" v-if="sort.type != 'priority'">
                                                Priority <icon name="arrow_right"/>
                                            </span>
                                            <span
                                                    @click.prevent="sortFiltered('priority', 'desc')"
                                                    v-if="(sort.type == 'priority' && sort.mode == 'asc')">
                                                Priority <icon name="arrow_down" /></span>

                                            <span
                                                    @click.prevent="sortFiltered('priority', 'asc')"
                                                    v-if="sort.type == 'priority' && sort.mode == 'desc'">
                                                Priority <icon name="arrow_up" /></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="list-group-item text-center" v-if="!filteredTasks.length && filterTerm.length">No tasks match the search term "{{filterTerm}}"</div>
                    <div class="list-group-item list-group-item-action cursor-pointer" :key="task.id" v-for="task in filteredTasks" @click.prevent="$router.push(`/tasks/view/${task.id}`)">
                        <div class="row align-items-center">
                            <div class="col-md-8">
                                <h5 class="d-inline"><strong>{{task.title}}</strong></h5> <span class="badge"><priority :priority="task.priority"></priority></span>
                                <div>#{{task.id}} opened on {{task.created_at}} for {{task.account.name}}</div>
                            </div>
                            <div class="col-md-2 text-right">
                                <strong>{{task.due_date}}</strong><br />
                                <small class="text-muted">Due Date</small>
                            </div>
                            <div class="col-md-2 text-right">
                                <strong><status :status="task.status"></status></strong><br />
                                <small class="text-muted">Status</small>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
	import card from '../parts/card';
	import priority from '../parts/priority';
	import status from '../parts/status';
	import loading from '../parts/loading';
	import buttonPopup from '../parts/button-popup';

	import '../icons/arrow_down';
	import '../icons/arrow_up';
	import '../icons/arrow_right';

	export default {
		name: "tasks",
		components: { card, loading, priority, status, buttonPopup },
		data() {
			return {
				tasks: {
					data: [],
					loaded: false,
				},
                filterTerm: "",
                sort: {
					type: 'id',
                    mode: 'asc'
                }
			}
		},
        computed: {
		    filteredTasks(){
		    	/** Can filter by the following:
                 * #id
                 * status:**
                 * priority:**
                 * **/
		    	var filters = [
                    { selector: "status:", element: "status" },
                    { selector: "priority:", element: "priority" }
                ];

                let self = this;
		    	let filtered = this.tasks.data.filter(function(el){
		    		for(var filter of filters){
		    			if(this.filterTerm.toLowerCase().indexOf(filter.selector) !== -1){
		    				// They are filtering on a specific thing
							if(el[filter.element].toLowerCase().indexOf(this.filterTerm.split(filter.selector)[1].toLowerCase()) !== -1) return true;
						}
                    }
					if(el.id == this.filterTerm) return true;
		    		if(el.title.toLowerCase().indexOf(this.filterTerm.toLowerCase()) !== -1) return true;
				}, this).sort(function(fir, sec){
					if(fir[self.sort.type] > sec[self.sort.type]) { return 1; }
					if(fir[self.sort.type] < sec[self.sort.type]) { return -1; }
					if(fir[self.sort.type] == sec[self.sort.type]) { return 0; }
				});

		    	if(self.sort.mode == 'asc') {
		    		return filtered;
				} else {
		    		return filtered.reverse();
                }
            }
        },
        methods: {
            sortFiltered(type, mode){
            	this.sort = {
            		type: type,
                    mode: mode
                };
            }
        },
		mounted() {
			this.$http.get('/api/tasks')
				.then(response => {
					this.tasks.loaded = true;
					this.tasks.data = response.data.tasks;
				});
		}
	}
</script>

<style>

</style>
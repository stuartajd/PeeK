<template>
    <div>
        <div v-if="selected.length">
            <p class="text-right"><strong>Selected Users</strong></p>

            <div class="row">
                <div class="col-md-4 cursor-pointer" v-for="user in selected" @click.prevent="removeUser(user)">
                    <div class="row align-items-center">
                        <div class="col-md-6 text-right"><img :src="user.profile_picture" :alt="user.name" class="rounded img-fluid"></div>
                        <div class="col-md-6">{{user.name}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!selected.length">No users have been selected</div>
        <hr>
        <div>
            <p v-if="remainingUsers.length" class="text-right"><strong>Select Users</strong></p>
            <div class="list-group scroll-group" v-if="remainingUsers.length">
                <div class="list-group-item list-group-item-action cursor-pointer not-selectable" v-for="user in remainingUsers" @click.prevent="selectUser(user)">{{user.name}}</div>
            </div>
            <div v-if="!remainingUsers.length" class="text-center">There are no users to select</div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "user-list",
        components: {  },
        props: [],
        data(){
		    return {
		    	users: [],
                selected: []
            }
        },
        computed: {
			remainingUsers(){
				return this.users.filter(el => this.selected.indexOf(el) === -1);
            }
        },
        mounted(){
            axios.get('/api/users/getAllUsers')
                .then(response => {
                	this.users = response.data;

                })
                .catch(error => {
                	this.$notify({
                        title: 'Failed Loading',
                        text: 'Could not load all users for the user selector'
                    })
                })
        },
        methods: {
            selectUser(user){
            	if(this.selected.indexOf(user) !== -1) return;
            	this.selected.push(user);
            },
            removeUser(user){
				var index = this.selected.indexOf(user);
				if(index === -1) return;
				this.selected.splice(index, 1);
            }
        }
	}
</script>

<style scoped>

</style>
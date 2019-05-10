<template>
    <div>
        <div>
            <div class="border" style="height: 300px;">
                <input v-model="searchTerm" class="form-control w-100 border-top-0 border-left-0 border-right-0 border-bottom" placeholder="Search Users"/>

                <div v-if="!filteredUsers.length" class="pt-3 text-center">
                    There are no users to select.
                </div>
                <div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-action cursor-pointer" :class="{ 'list-group-item-success' : user.selected }"
                            @click="selectUser(user)" v-for="user in filteredUsers">
                            {{user.name}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "user-list",
        components: {  },
        props: [ ],
        data(){
		    return {
                searchTerm: "",
		    	users: []
            }
        },
        computed: {
			filteredUsers(){
                let excludedCurrentUser = this.users.filter(el => el.name !== this.$store.getters.user.name);
                if(!this.searchTerm.length) return excludedCurrentUser;
				return excludedCurrentUser.filter(el => el.name.indexOf(this.searchTerm) !== -1);
            },
            selectedUsersList(){
                return this.users.filter(el => el.selected);
            }
        },
        mounted(){
            this.$http.get('/api/users/getAllUsers')
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
                this.$set(user, 'selected', !user.selected);
                this.$emit('updateUsers', this.selectedUsersList);
            }
        }
	}
</script>

<style scoped>

</style>
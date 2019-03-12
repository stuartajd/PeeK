<template>
    <div>
        <ul class="list-group list-group-flush navigation-link">
            <router-link to="/overview" tag="li" class="list-group-item list-group-item-action"><icon name="dashboard" />&nbsp;Dashboard</router-link>
            <router-link to="/tasks" tag="li" class="list-group-item list-group-item-action"><icon name="list" />&nbsp;Tasks</router-link>
            <router-link to="/admin" tag="li" class="list-group-item list-group-item-action"><icon name="cog" />&nbsp;Settings</router-link>
        </ul>
    </div>
</template>

<script>
    import '../icons/logo';
	import '../icons/dashboard';
	import '../icons/cog';
	import '../icons/list';
	import '../icons/verified';

	export default {
		props: ['state'],
        data(){
            return {}
        },
        mounted()
        {

        },
        methods: {}
    }
</script>
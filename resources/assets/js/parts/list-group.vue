<template>
    <div class="list-group list-group-flush" :class="{'scroll': list.length > 6}">
        <div class="list-group-item list-group-item-action cursor-pointer not-selectable" v-for="item in list" @click.prevent="clicked(item)">
            {{item.title}}
        </div>
    </div>
</template>

<script>
	export default {
		name: "list-group-scroll",
        props: ['scroll', 'list', 'linked', 'linkRoute', 'linkKey'],
        methods: {
			clicked(item){
				if(!this.linked) return;
				console.log(this.linkRoute + '/' + item[this.linkKey]);
			    this.$router.push('/'+ this.linkRoute + '/' + item[this.linkKey]);
            }
        }
	}
</script>

<style scoped>

</style>
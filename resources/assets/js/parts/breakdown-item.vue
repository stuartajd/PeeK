<template>
    <div class="card">
        <div class="card-body" >
            <div :class="{'text-center':expanded}" @click="expanded = !expanded">
                {{element.title}}
            </div>

            <div v-if="expanded" class="border-top mt-3 pt-3">
                {{element.description}}
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "breakdown",
        components: {  },
        props: ['element'],
        data(){
		    return {
		        expanded: false
            }
        }
	}
</script>

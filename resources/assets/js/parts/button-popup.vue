<template>
    <div>
        <button type="button" :class="buttonClass" v-on-clickaway="hide" @click.prevent="setShown(!shown)">{{buttonText}}</button>
        <div class="position-absolute text-left" style="z-index: 999;right: 0;width: 300px;" v-if="shown">
            <card title="Advanced Searching"><slot /></card>
        </div>
    </div>
</template>

<script>
    import card from '../parts/card';
	import { mixin as clickaway } from 'vue-clickaway';

	export default {
		name: "button-popup",
        components: { card },
        props: [ 'buttonText', 'buttonClass' ],
		mixins: [ clickaway ],
		data(){
			return {
				shown: false
            }
        },
        methods: {
		    setShown(status) {
				this.shown = status;
			},
            hide(){
		    	this.shown = false;
            }
        }
	}
</script>

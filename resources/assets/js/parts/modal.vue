<template>
    <div>
        <button @click="modalOpen" :class="buttonclass" class="btn">{{button}}</button>
        <portal to="portal" v-if="showModal">
            <div class="bg-overlay-darken" @click="modalOpen"></div>

            <div class="modal-popup" @click.prevent.stop="">
                <div class="wrapper">
                    <div class="header">
                        <h3 class="float-right cursor-pointer close-button" @click="modalOpen">×</h3>

                        <h5>{{title}}</h5>
                    </div>
                    <div class="content p-3">
                        <slot />
                    </div>
                    <div class="footer text-right" v-if="submit">
                        <button @click="$emit('submit');" class="btn btn-outline-success">{{submit}}</button>
                    </div>
                </div>
            </div>
        </portal>
    </div>
</template>

<script>
	export default {
		name: "modal",
	    props: ['title', 'button', 'buttonclass', 'submit'],
        data(){
		    return {
		        showModal: false
            }
        },
        methods: {
		    modalOpen(){
		        if(!this.showModal){
		            this.$emit('opened');
                } else {
                    this.$emit('closed');
                }

		        this.showModal = !this.showModal;
            }
        }
	}
</script>

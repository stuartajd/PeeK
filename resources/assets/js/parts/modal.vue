<template>
    <div>
        <button @click="modalOpen" class="btn btn-outline-primary">{{button}}</button>
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
                    <div class="footer" v-if="footer">

                    </div>
                </div>
            </div>
        </portal>
    </div>
</template>

<script>
	export default {
		name: "modal",
	    props: ['title', 'button'],
        data(){
		    return {
		        showModal: false
            }
        },
        methods: {
		    modalOpen(){
		        this.showModal = !this.showModal;
            }
        }
	}
</script>

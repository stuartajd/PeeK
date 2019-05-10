require('./bootstrap');

import Vue from 'vue';
window.Vue = Vue;

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import axios from 'axios';
Vue.prototype.$http = axios;

Vue.config.productionTip = false;
Vue.config.debug = true;

/** Sentry Debug Code **/
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

Raven
    .config('https://36d4c44df36f4ce6b82be17a5b8724ae@sentry.io/1352158')
    .addPlugin(RavenVue, Vue)
    .install();

/** Global Components **/
import Notifications from 'vue-notification'
Vue.use(Notifications);

import card from './parts/card';
Vue.component('card', card);

import loading from './parts/loading';
Vue.component('loading', loading);

import modal from './parts/modal';
Vue.component('modal', modal);

import PortalVue from 'portal-vue'
Vue.use(PortalVue);

import SvgIcon from 'vue-svgicon'
Vue.use(SvgIcon, {
    tagName: 'icon'
});

Vue.use(require('vue-moment'));

/**
 * Permissions
 */
class Permission {
    install(vue, options) {
        vue.mixin(this.mixin());
    }

    mixin() {
        return {
            computed: {
                isAdmin() {
                    let role = this.$store.state.roles.filter(el => el.id == this.$store.state.user.role_id)[0];
                    if(!role) return false;
                    return role.role_type === 'administrator';
                },
                isDeveloper() {
                    let role = this.$store.state.roles.filter(el => el.id == this.$store.state.user.role_id)[0];
                    if(!role) return false;
                    return role.role_type === 'developer';
                }
            }
        };
    }
}

Vue.use(new Permission());

/** Routes **/
import {routes} from './routes';

let router =  new VueRouter({
    routes : routes,
    mode : 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { selector: to.hash };
        }
        return { x: 0, y: 0 };
    }
});

/** Vue Instance **/
import App from './App.vue';
import { store } from './store';

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
require('./bootstrap');

import Vue from 'vue';
window.Vue = Vue;

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import axios from 'axios';
Vue.prototype.$http = axios;

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
Vue.component(card);

import loading from './parts/loading';
Vue.component(loading);

import SvgIcon from 'vue-svgicon'
Vue.use(SvgIcon, {
    tagName: 'icon'
});

Vue.use(require('vue-moment'));

/** Routes **/
let routes = [
    { path: '/', redirect: '/overview' },
    { path:'/overview', component: require('./pages/overview') },
    { path:'/example', component: require('./pages/example') },

    { path:'/tasks', component: require('./pages/tasks')},
    { path:'/tasks/create', component: require('./pages/task-create')},
    { path:'/tasks/view/:tid', component: require('./pages/task')},
    { path:'/tasks/actions/:tid', component: require('./pages/task-action') },

    { path:'/admin', component: require('./pages/admin')},
    { path:'/admin/users', component: require('./pages/admin-users')},
    { path:'/admin/tasks', component: require('./pages/admin-tasks')},
    { path:'/admin/settings', component: require('./pages/admin-settings')},

    { name: '404', path: "/error/not-found", component: require('./pages/errors/not-found')},
    { path: "*", redirect: '/error/not-found' }
];

let router =  new VueRouter({
    routes : routes,
    mode : 'history'
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
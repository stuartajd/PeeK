require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import SvgIcon from 'vue-svgicon'
Vue.use(SvgIcon, {
    tagName: 'icon'
});

Vue.use(require('vue-moment'));

import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

Raven
    .config('https://36d4c44df36f4ce6b82be17a5b8724ae@sentry.io/1352158')
    .addPlugin(RavenVue, Vue)
    .install();

import Notifications from 'vue-notification'
Vue.use(Notifications);

import card from './parts/card';
Vue.component(card);

$('[data-toggle="tooltip"]').tooltip();

window.Vue = Vue;
Vue.use(VueRouter);

function importError(error){
    console.error(error);
    window.location.reload();
}

let routes = [
    { path: '/', redirect: '/overview' },
    { path:'/overview', component: () => import('./pages/overview').catch(importError) },
    { path:'/example', component: () => import('./pages/example').catch(importError) },

    { path:'/tasks', component: () => import('./pages/tasks').catch(importError) },
    { path:'/tasks/create', component: () => import('./pages/task-create').catch(importError) },
    { path:'/tasks/view/:tid', component: () => import('./pages/task').catch(importError) },
    { path:'/tasks/actions/:tid', component: () => import('./pages/task-action').catch(importError) },

    { path:'/admin', component: () => import('./pages/admin').catch(importError) },
    { path:'/admin/users', component: () => import('./pages/admin-users').catch(importError) },
	{ path:'/admin/tasks', component: () => import('./pages/admin-tasks').catch(importError) },
	{ path:'/admin/settings', component: () => import('./pages/admin-settings').catch(importError) },

	{ name: '404', path: "/error/not-found", component: () => import('./pages/errors/not-found').catch(importError) },
    { path: "*", redirect: '/error/not-found' }
];

let router =  new VueRouter({
    routes : routes,
    mode : 'history'
});

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
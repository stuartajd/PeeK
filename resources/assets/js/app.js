require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import SvgIcon from 'vue-svgicon'
Vue.use(SvgIcon, {
    tagName: 'icon'
});

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
	{ path:'/tasks', component: () => import('./pages/tasks').catch(importError) },
	{ path:'/tasks/:tid', component: () => import('./pages/task').catch(importError) },
	{ path:'/tasks/create', component: () => import('./pages/task-create').catch(importError) },

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
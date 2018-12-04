require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import SvgIcon from 'vue-svgicon'
Vue.use(SvgIcon, {
    tagName: 'icon'
})

window.Vue = Vue;
Vue.use(VueRouter);

function importError(error){
    console.error(error);
    window.location.reload();
}

let routes = [
    { path: '/', redirect: '/overview' },
    { path:'/overview', component: () => import('./pages/overview').catch(importError) },

    { path: "*", component: () => import('./pages/404').catch(importError) }
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
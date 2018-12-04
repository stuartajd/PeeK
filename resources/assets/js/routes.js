import VueRouter from 'vue-router';
import Profile from './parts/navigation.vue';

let routes = [
    {
        path: '/profile',
        component: Profile
    }
];


export default new VueRouter({
    routes
});
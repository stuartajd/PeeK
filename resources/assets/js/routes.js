export const routes = [
	{ path: '/', redirect: '/overview' },
	{ path:'/overview', component: require('./pages/overview').default },
	{ path:'/search', component: require('./pages/search').default },

	{ path:'/tasks', component: require('./pages/tasks').default },
	{ path:'/tasks/create', component: require('./pages/task-create').default },
	{ path:'/tasks/view/:tid', component: require('./pages/task').default },
	{ path:'/tasks/actions/:tid', component: require('./pages/task-action').default },

	{ path:'/admin', component: require('./pages/admin').default },
	{ path:'/admin/users', component: require('./pages/admin/users').default },
	{ path:'/admin/tasks', component: require('./pages/admin/tasks').default },
	{ path:'/admin/settings', component: require('./pages/admin/settings').default },

	{ name: '404', path: "/error/not-found", component: require('./pages/errors/not-found').default },
	{ path: "*", redirect: '/error/not-found' }
];
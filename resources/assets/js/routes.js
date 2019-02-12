let routes = [
	{ path: '/', redirect: '/overview' },
	{ path:'/overview', component: () => import('./pages/overview').catch(importError) },
	{ path:'/tasks', component: () => import('./pages/tasks').catch(importError) },
	{ path:'/tasks/:tid', component: () => import('./pages/task').catch(importError) },
	{ path:'/tasks/create', component: () => import('./pages/task-create').catch(importError) },

	{ name: '404', path: "/error/not-found", component: () => import('./pages/errors/not-found').catch(importError) },
	{ path: "*", redirect: '/error/not-found' }
];
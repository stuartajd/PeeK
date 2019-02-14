let varPriority = {
	"urgent": {
		title: 'Urgent',
		icon: 'priority_high',
		colour: 'red',
		css: 'text-danger'
	},
	"normal": {
		title: 'Normal',
		icon: 'priority_normal',
		colour: 'green',
		css: 'text-info'
	},
	"low": {
		title: 'Low',
		icon: 'priority_low',
		colour: 'grey',
		css: 'text-success'
	}
};

let varStatus = {
	"awaiting": {
		title: 'Awaiting Assignment',
		name: 'awaiting'
	},
	"assigned": {
		title: 'Assigned',
		name: 'assigned'
	},
	"progress": {
		title: 'In Progress',
		name: 'progress'
	},
	"quality": {
		title: 'Quality Assurance',
		name: 'quality'
	},
	"complete": {
		title: 'Complete',
		name: 'complete'
	}
};


export { varPriority, varStatus }
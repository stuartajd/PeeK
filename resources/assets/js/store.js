import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		user: {},
		company: {},
		roles: []
	},
	mutations: {
		setUser(state, user) {
			state.user = user;
		},
		setCompany(state, company) {
			state.company = company;
		},
		setRoles(state, roles) {
			state.roles = roles;
		}
	},
	getters: {
		user: (state) => {
			return state.user;
		},
		company: (state) => {
			return state.company;
		},
		roles: (state) => {
			return state.roles;
		}
	}
})
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: {
			loggedIn: localStorage.getItem("x-token") ? true : false,
			isActivated: false
		}
	},
	getters: {
		auth(state) {
			return state.user;
		}
	},
	mutations: {
		UPDATE_LOGIN: state => {
			state.user.loggedIn = true;
		},
		UPDATE_ACTIVATE: state => {
			state.user.isActivated = true;
		}
	}
});

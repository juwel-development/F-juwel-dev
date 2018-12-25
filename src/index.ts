import Vue from 'vue';
import App from './vue/App.vue';

import './style/index.sass';
import VueRouter from 'vue-router';
import {routes} from './vue/routes';

const appDiv = document.createElement('div');
appDiv.id = 'app';
document.body.appendChild(appDiv);

const router = new VueRouter({
	mode: 'history',
	routes
});

Vue.use(VueRouter);

new Vue({
	el: '#app',
	components: {
		App
	},
	router,
	template: '<app></app>'
});
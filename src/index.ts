import Vue from 'vue';
import App from './vue/App.vue';

import './style/index.sass';

const appDiv =document.createElement('div');
appDiv.id = 'app';
document.body.appendChild(appDiv);

new Vue({
	el: '#app',
	components: {
		App
	},
	template: '<app></app>'
});
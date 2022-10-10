import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

Vue.config.productionTip = false;

const firebaseConfig = {
	apiKey: 'AIzaSyCprbMGT_6ZKu7ENnyp-eAcbmfhxnT2uQw',
	authDomain: 'vue-test-adc6f.firebaseapp.com',
	projectId: 'vue-test-adc6f',
	storageBucket: 'vue-test-adc6f.appspot.com',
	messagingSenderId: '567402404284',
	appId: '1:567402404284:web:d0277d9123df41921833b9',
	measurementId: 'G-DV11B1VY73',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Vue.prototype.$firebase = firebase;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');

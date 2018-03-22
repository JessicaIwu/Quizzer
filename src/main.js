// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;

let config = {
    apiKey: "AIzaSyDY4C7xFpcLopzaouq6mocMWuRlf0g7Z0o",
    authDomain: "quiz-app-firebase.firebaseapp.com",
    databaseURL: "https://quiz-app-firebase.firebaseio.com",
    projectId: "quiz-app-firebase",
    storageBucket: "quiz-app-firebase.appspot.com",
    messagingSenderId: "650633909718"
  };
  firebase.initializeApp(config);
  // let db = firebase.initializeApp(config).database();

// let database = firebase.initializeApp({
//     apiKey: "AIzaSyDY4C7xFpcLopzaouq6mocMWuRlf0g7Z0o",
//     authDomain: "quiz-app-firebase.firebaseapp.com",
//     databaseURL: "https://quiz-app-firebase.firebaseio.com",
//     projectId: "quiz-app-firebase",
//     storageBucket: "quiz-app-firebase.appspot.com",
//     messagingSenderId: "650633909718"

// }).database().ref();
  // let usertab = db.ref('usertable');
  // firebase.database().ref('usertable');

  firebase.auth().onAuthStateChanged(function(user){

  	if(!app){

/* eslint-disable no-new */
	new Vue({
	  el: '#app',
	  router,
	  components: { App },
	  template: '<App/>'
	})
	}
});
<template>
	<div class="login">
		<h1>QUIZ APP</h1>
		<p>Have as much fun as you want</p>

		<h3>Sign in Here</h3>
		<input type="text" v-model="email" placeholder="Enter your email">
		<input type="password" v-model="password" placeholder="Enter your password">
		<button v-on:click="signIn">Sign in</button>

		<p>You don't have an account? <router-link to="/SignUp">sign up here</router-link></p>


	</div>
</template>
<script>

import firebase from 'firebase'

	export default {
	  name: 'Login',
	  data: function() {
	  	return {
	  		email: '',
	  		password: ''
	  	}
	  },  
	  methods: {
	  	signIn: function (){
	  		// this.$router.replace('/Home')
	  		firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
	  			// function(user){
	  			// 	alert('You are signed in');
	  			// 	 this.$router.replace('/Home');
	  			// }

	  			(user) => {
	  				this.$router.replace('/Home')
	  			},
	  			(err) =>{
   					alert('Sorry, It seems like' + ' ' + (err.message).toLowerCase())
   				}
	  		)
    	}
     }
}
</script>
<style scoped>
	h1, p {
  font-weight: normal;
}
	p{
		color: #ccc;
	}
	.login{
		margin-top: 40px;
	}
	input{
		width: 20%;
		padding: 15px;
		display: block;
		margin: 10px auto; 
		margin-top: 20px;

	}
	button{
		margin-top: 20px;
		width: 10%;
		cursor: pointer;
		display: block;
		margin: auto; 

	}

</style>
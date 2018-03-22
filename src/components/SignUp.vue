<template>
	<div class="signUp">
		<h1>QUIZ APP</h1>
		<p>Have as much fun as you want</p>

		<h3>Sign Up Here</h3>
		<input type="text" v-model="email" placeholder="Enter your email">
		<input type="password" v-model="password" placeholder="Enter your password">
		<button v-on:click="signUp">Sign Up</button>

		<span>Already have an account?<router-link to="/Login"> Login</router-link></span>


	</div>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'SignUp',
  data: function (){
  		return{
  			email: '',
  			password: ''
  		}
   },
   methods: {
   		signUp: function(){
   			firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
   				// function(user){
   				// 	alert('account has been created!');
   				// }
   				(user) => {
   					this.$router.replace('/Home')
   				},
   				(err) =>{
   					alert('Sorry, It seems like' + ' ' +(err.message).toLowerCase())
   				}
   			);
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
	.signUp{
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
	span{
		display: block;
		margin-top: 20px;
		font-size: 11px;
	}
</style>
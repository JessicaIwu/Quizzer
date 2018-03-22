<template>
	<div class="home">
		<div id="nav">
			<span class="f-left">Welcome {{name}} !</span> 
			<button class="f-right" v-on:click="signOut">sign out</button>
		</div>
		<br>

		<div class="quizbtns">
			<!-- <button v-on:click="CreateQuiz">Create Quiz</button> -->
			<button><router-link to="/CreateQuiz">Create Quiz</router-link></button>
			<!-- <button><router-link to="/TakeQuiz">Take Quiz</router-link></button> -->
			<button v-on:click="take">Take Quiz</button>
		</div>

	</div>
</template>
<script>

import firebase from 'firebase'

export default {
  name: 'Home',
  data () {
    return {
      name: ' '
    }
  },
  methods: {
  	signOut: function(){
  		firebase.auth().signOut().then(()=>{
  			this.$router.replace('Login')
  		})
  	},
  	// CreateQuiz: function(){
  	// 	this.$router.push({path: '/CreateQuiz'})
  	// }
  	take: function(){
  		this.$router.push({path: '/TakeQuiz'})
  	}
  }
}
</script>

<style scoped>
	#nav{
		width: 60%;
		margin: auto; 
	}
	.f-left{
		float: left;
		font-size: 22px;
		font-weight: bold;
	}
	.f-right{
		float: right;
		font-size: 12px;
		 color: #000;
    	font-weight: bold;
	}
	.quizbtns button{
		display: block;
	    margin-top: 52px;
	    margin-left: 39%;
	    padding: 10px;
	    width: 25%;
	    border-radius: 12px;
	    color: red;
	    font-weight: bold;
	}
</style>
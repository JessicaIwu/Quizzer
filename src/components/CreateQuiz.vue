<template>
	
<div class="container createq" id="createquiz">
	<div class="panel panel-default">
			<div class="panel-heading">
				<h2>Create Quiz</h2>
			</div>	
			<div class="panel-body">
				<form action="">
					<div>
						<p>Quiz Title: &nbsp;
							<span>
						<input id="quiztitle" v-model="quiztitle" type="text">
							</span></p>
								<p>Set Test Duration (in Seconds): &nbsp;
							<span>
								<input id="timer" type="text" v-model="testduration">
							</span>
						</p>
					</div>
					
				</form>
				<button v-on:click="submit">Create Quiz</button>
			</div>
			<div style="margin-top: 30px;">	
				<h2>My Quizzes</h2>
				<div  class="row" style="background-color: #007bff; color: #fff; ">
					<div class="col-md-2">Quiz id</div>
						<div class="col-md-2">Title</div>

						<div class="col-md-1">Duration</div>
						<div class="col-md-2">Status</div>
						<div class="col-md-2">Created at</div>
						<div class="col-md-3">Actions</div>
				</div>
				<div>
					<div v-for="(quiz, index) in myQuizzes" >
					<div  v-for="(quizObject, quizObjectIndex) in quiz" class="row" style="background-color: #eee;">

						<div class="col-md-2">{{index}}</div>
						<div class="col-md-2">{{quizObject.title}}</div>

						<div class="col-md-1">{{quizObject.duration}}</div>
						<div class="col-md-2">{{quizObject.status}}</div>
						<div class="col-md-2">{{quizObject.created_at}}</div>
						<div class="col-md-3">
							<button v-on:click="viewQuiz(index)" class="btn btn-success">View</button>
							<button class="btn btn-danger">Delete</button>
						</div>
						
					</div>
				</div>
			</div>
				</div>
	</div>
	</div>
</div>
</template>
<script>
	
import firebase from 'firebase'


export default {
  name: 'CreateQuiz',
  // firebase:{
  // 		usertab:database().ref('usertable')
  // },
  data (){
	  return  {
	  		currentuser: null,
	  		myQuizzes: null,
	  		i: 5,
	  		rows:5,
	  		quiztitle: '',
	  		testduration: '',
	  		questionindex:1,
	  		questions:{ 
		  		testduration:'',
		  		quiztitle: '',
		  		question: '',
		  		options: {
			        option1: 'a',
			        option2: 'b',
			        option3: 'c',
			        option4: 'd',
			        answer: 'c'
		  		},
	  		 },
	    //     submitted: false 
	           }
         },

  methods: {

  			viewQuiz: function(quizId) {
  				this.$router.replace('/ViewQuiz/'+quizId);
  			},

			submit: function(){
					//get current authenticated firebase user
					const firebaseUserObj = firebase.auth();
					//get authenticated  user ID
					const userId = firebaseUserObj.currentUser.uid;

					//generate unique quiz id
					const quizId =Math.floor( Math.random() * (10000-1+1) +1);

					var today = new Date();
					var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
					var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
					var dateTime = date+' '+time;

					console.log(dateTime);

					firebase.database().ref(`users/${userId}/quizzes/${quizId}`)
					.push({
						quizId: quizId,
						title: this.quiztitle,
						duration: this.testduration,
						created_at: dateTime,
						status: 'pending',
						userId: userId
					})
					.then((res) => {
						firebase.database().ref(`quizzes/${quizId}/head`)
						.push({ 
							title: this.quiztitle,
							duration: this.testduration,
							created_at: dateTime,
							status: 'pending',
							userId: userId
						})
						.then((res) => this.$router.replace('/SetQuestions'))
						.catch((error) => console.log(error));
					});


					
 			}
 },

 	mounted() {
 		//get current authenticated firebase user
					const firebaseUserObj = firebase.auth();
					//get authenticated  user ID
					const userId = firebaseUserObj.currentUser.uid;

					firebase.database().ref(`/users/${userId}/quizzes`)
					.on('value', snapshot => {
						this.myQuizzes = snapshot.val()
					});
 	}
}
</script>
<style scoped>
/*p:nth-of-type(odd){
	background-color: #ccc;
}*/
p{
	padding: 11px; 
	font-weight: bold;
}
div{
	padding-top: 5px;
	padding-bottom: 5px;
}
.questions-box{
	border: 1px dashed #ccc;
	margin-bottom: 5%;

}
.questions-box	p:first-child{
	background-color: #ded;
}
table{
	border: 1px solid black;
}
</style>
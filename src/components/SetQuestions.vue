<template>
	
<div class="container createq" id="createquiz">
	<div class="panel panel-default" style="text-align: left">
			<div class="panel-heading">
				<h2>{{ (quiz.title !== null) ? quiz.title : '' }}</h2>
				<span>Duration: {{quiz.duration}}</span><br />
				<span>Status: {{quiz.status}}</span><br />
				<span>Created At: {{quiz.created_at}}</span>
			</div>	
		<div class="panel-body">
			<form action="">[]
				<div class="questions-box">
					<p>Enter Question details
					</p>
					<p>
						<label  for="question">Type your question</label>		
						<span>
							<textarea  class="form-control" id="question" v-model ="questions.question" cols="30" rows="3"></textarea>	
						</span>
					</p>
					<p>
						<label for="option1">Option 1</label>
						<span>
							<input class="form-control" id="option1" v-model="questions.options.option1" type="text">
						</span>
					</p>
					<p>
						<label for="option2">Option 2</label>
						<span>
							<input class="form-control" id="option2" v-model="questions.options.option2" type="text">
						</span>
					</p>
					<p>
						<label for="option3">Option 3</label>
						<span>
							<input class="form-control" id="option1" v-model="questions.options.option3" type="text">
						</span>
					</p>
					<p>
						<label for="option4">Option 4</label>
						<span>
							<input  class="form-control"id="option4" v-model="questions.options.option4" type="text">
						</span>
					</p>
					<p>
						<label for="answer">Correct Answer</label>

						<select class="form-control" v-model="questions.options.answer">
								<option disabled >Select an option</option>
								<option value="A">Option 1</option>
								<option value="B">Option 2</option>
								<option value="C">Option 3</option>
								<option value="D">Option 4</option>
							</select>
					</p>
	<button v-on:click.prevent="addQuestion" class="btn btn-primary">Add question</button>
				</div>
				
			</form>
		</div>

		<div style="margin-top: 30px;">	
				<h2>Questions</h2>
				<div  class="row" style="background-color: #007bff; color: #fff; ">
						<div class="col-md-2">Question</div>
						<div class="col-md-2">Option1</div>
						<div class="col-md-2">Option1</div>
						<div class="col-md-2">Option1</div>
						<div class="col-md-2">Option1</div>
						<div class="col-md-1">Answer</div>
						<div class="col-md-1">Actions</div>
				</div>
				<div>
					<div v-for="(quizRow, index) in quizBody"  class="row" style="background-color: #eee; margin-bottom: 10px;">
						<div class="col-md-2">{{quizRow.questions.question}}</div>

						<div class="col-md-2">{{quizRow.questions.options.option1}}</div>
						<div class="col-md-2">{{quizRow.questions.options.option2}}</div>
						<div class="col-md-2">{{quizRow.questions.options.option3}}</div>
						<div class="col-md-2">{{quizRow.questions.options.option4}}</div>
						<div class="col-md-1">{{quizRow.questions.options.answer}}</div>

						<div class="col-md-1">
							<button v-on:click="viewQuiz(index)" class="btn btn-success">View</button>
							<button class="btn btn-danger">Delete</button>
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
	props: ['quizId'],
  name: 'SetQuestions',
  // firebase:{
  // 		usertab:database().ref('usertable')
  // },
  data (){
	  return  {
	  		quiz: {
	  			title: '',
				duration: '',
				created_at: '',
				status: ''
	  		},
	  		i: 5,
	  		questionindex:1,
	  		questions:{ 
	  			question: '',
		  		options: {
			        option1: 'a',
			        option2: 'b',
			        option3: 'c',
			        option4: 'd',
			        answer: 'c'
		  		},
	  		 },
	  		 quizBody: null,
	    //     submitted: false 
	           }
         },

  methods: {

			addQuestion: function() {
				const quizId = this.quizId;
 				firebase.database().ref(`quizzes/${quizId}/body`)
						.push({ 
							questions: this.questions
						})
						.then((res) => console.log(res))
						.catch((error) => console.log(error));
 			},
 },

 		mounted(){
 			//get current authenticated firebase user
					const firebaseUserObj = firebase.auth();
					//get authenticated  user ID
					const userId = firebaseUserObj.currentUser.uid;
					const quizId = this.quizId;

					firebase.database().ref(`/users/${userId}/quizzes/${quizId}`)
					.on('value', snapshot => {
						const quizObj = snapshot.val();
						for(var obj in quizObj ) {
							this.quiz = quizObj[obj];
						}

						firebase.database().ref(`quizzes/${quizId}/body`)
						.on('value', snapshot => {
						 this.quizBody = snapshot.val();

						 console.log(this.quizBody);
						});

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
</style>
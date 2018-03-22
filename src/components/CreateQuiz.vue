<template>
	
<div class="container createq" id="createquiz">
	<div class="panel panel-default">
			<div class="panel-heading">
				<h2>Create your multiple-choice question here</h2>
			</div>	
		<div class="panel-body">
				<table class="table table-striped">
					<tbody>
					<tr>
						<td>Quiz Title: &nbsp;
						<input id="quiztitle" type="text"></td>
					</tr>
					<tr>
						<td>Set Test Duration (in Seconds): &nbsp;
						<input id="timer" type="text"></td>
					</tr>
					<tr>
						<td>Question. &nbsp; {{questionindex}}</td>
					</tr>
				</tbody>
				<tbody v-if="questionindex == 1">
					<tr>
						<td>
							<label for="question">Type your question</label>						<textarea id="question" cols="30" rows="3"></textarea>					
						</td>
					</tr>
					<tr>
						<td>
							<label for="option1">Option 1</label>							
							<input id="option1" type="text">
						</td>
					</tr>
					<tr>
						<td>
							<label for="option2">Option 2</label>							
							<input id="option2" type="text">
						</td>
					</tr>
					<tr>
						<td>
							<label for="option3">Option 3</label>							
							<input id="option3" type="text">
						</td>
					</tr>
					<tr>
						<td>
							<label for="option4">Option 4</label>							
							<input id="option4" type="text">
						</td>
					</tr>
					</tbody>
					<tbody v-else-if="questionindex == 2">
					<tr>
						<td>
							<label for="question">Type yoor question 2</label>						<textarea id="question" cols="30" rows="3"></textarea>					
						</td>
					</tr>
					<tr>
						<td>
							<label for="option1">Option 1</label>							
							<input id="option1" type="text">
						</td>
					</tr>
					<tr>
						<td>
							<label for="option2">Option 2</label>							
							<input id="option2" type="text">
						</td>
					</tr>
					<tr>
						<td>
							<label for="option3">Option 3</label>							
							<input id="option3" type="text">
						</td>
					</tr>
					<tr>
						<td>
							<label for="option4">Option 4</label>							
							<input id="option4" type="text">
						</td>
					</tr>
					</tbody>
					<tbody v-else-if="questionindex == 3">
					<tr>
						<td>
							<label for="question">Type your question 3</label>						<textarea id="question" cols="30" rows="3"></textarea>					
						</td>
					</tr>
					<tr>
						<td>
							<label for="option1">Option 1</label>							
							<input id="option1" type="text">
						</td>
					</tr>
					<tr>
						<td>
							<label for="option2">Option 2</label>							
							<input id="option2" type="text">
						</td>
					</tr>
					<tr>
						<td>
							<label for="option3">Option 3</label>							
							<input id="option3" type="text">
						</td>
					</tr>
					<tr>
						<td>
							<label for="option4">Option 4</label>							
							<input id="option4" type="text">
						</td>
					</tr>
					</tbody>
					<tbody v-else-if="questionindex == 4">
					<tr>
						<td>
							<label for="question">Type your question 4</label>						<textarea id="question" cols="30" rows="3"></textarea>					
						</td>
					</tr>
					<tr>
						<td>
							<label for="option1">Option 1</label>							
							<input id="option1" type="text">
						</td>
					</tr>
					<tr>
						<td>
							<label for="option2">Option 2</label>							
							<input id="option2" type="text">
						</td>
					</tr>
					<tr>
						<td>
							<label for="option3">Option 3</label>							
							<input id="option3" type="text">
						</td>
					</tr>
					<tr>
						<td>
							<label for="option4">Option 4</label>							
							<input id="option4" type="text">
						</td>
					</tr>
					</tbody>
					<tbody v-else="questionindex == 5">
					<tr>
						<td>
							<label for="question">Type yor question 5</label>						<textarea id="question" cols="30" rows="3"></textarea>					
						</td>
					</tr>
					<tr>
						<td>
							<label for="option1">Option 1</label>							
							<input id="option1" type="text">
						</td>
					</tr>
					<tr>
						<td>
							<label for="option2">Option 2</label>							
							<input id="option2" type="text">
						</td>
					</tr>
					<tr>
						<td>
							<label for="option3">Option 3</label>							
							<input id="option3" type="text">
						</td>
					</tr>
					<tr>
						<td>
							<label for="option4">Option 4</label>							
							<input id="option4" type="text">
						</td>
					</tr>
					</tbody>

				</table>
		</div>
	 <!-- <button v-on:click="prev" v-if="questionindex >= 1 ">Prev</button> -->
	<button v-on:click="next" v-if="questionindex <=4 ">Next</button>
	<button v-on:click="add" v-if="questionindex == 5 ">Add</button>
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
  		i: 1,
  		questionindex:1,
  		testduration: '',
  		quiztitle: '',
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: ''
  
  
  
      }
  },
  methods: {
  			next: function (){
   					this.questionindex++;
   					this.i++;
   			   		},
   		// 	prev: function() {
					// this.questionindex--;
					// this.i--;
					// }
			add: function(){
					  const key =Math.floor( Math.random() * (10000-1+1) +1);
					  console.log(key)
					  const id =  `${key}`;
					  this.createquizId = id;
					}

   }
  }
</script>
<style>

	
</style>
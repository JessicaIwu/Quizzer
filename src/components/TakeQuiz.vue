<template>
	
<div class="container">
	<div class="panel panel-default">
			<div class="panel-heading">
				<h2>Take Quiz</h2>
			</div>	
		<div class="panel-body align-middle">

			<div class="row" style="background-color: #ccc; color: black; text-align: left; padding: 5px;">
					    <div class="col-md-12">Quiz Title:</div>
						<div class="col-md-12">Set Test Duration: _  Seconds:</div>

						<div class="col-md-12">Question: _ &nbsp;</div>
						
			</div>
			<br>
			<div class="col-md-12">Question: _ &nbsp;</div>
			<div v-for="(quiz, index) in quizez" v-show="index === questionindex" class="row" style="background-color: #ccc; color: black; text-align: left; padding: 5px; margin-top: 20px;">
					    <div class="col-md-12">{{ quiz.question }}</div>
						<div class="col-md-12">
							<div v-for="answer in quiz.incorrect_answers">
								<label>
								<!-- bind the options to the array index of the answers array that matches this index -->
								<input type="radio" name="answer" v-model="answers[index]" :value="answer"> {{answer}}
							</label>
							</div>
						</div>

						
						
			</div>
				<br>
				<div v-if="questionindex < quizez.length"></div>
				<button v-if="questionindex > 0" v-on:click="prev">
				prev
				</button>
				<button v-on:click="next">Next</button>
	 	</div>
<span v-if="questionindex == quizez.length">Your Total score is {{score}} / {{quizez.length}}</span>	
    </div>
</div>
</template>
<script>

var quiz_questions = [
  {
  "question": "Who is my bestie?",
  "answer": "Steven Spielberg",
  "incorrect_answers": ["Steven Spielberg", "Stanley Kubrick", "James Cameron","Tim Burton"]
  },
   {
  "question": "Who is lily?",
  "answer": "Steven",
  "incorrect_answers": ["Steven", "Stanley", "James","Tim"]
  }
]

import firebase from 'firebase'
export default {
  name: 'TakeQuiz',
  data (){
  return  {
       questionindex:0,
       quizez:quiz_questions,
       answers:Array(quiz_questions.length).fill('')
      }
  },
  methods: {
   		next: function (){
   					this.questionindex++;
   			   		},
   		prev: function() {
					this.questionindex--;
					}
   },
   computed:{
  score: function() {
		  var total = 0;
		  for (var i =0; i <this.answers.length; i++) {
		  if(this.answers[i]==this.quizez[i].correct_answer){
		  total +=1;
		  }
		  }
		  return total;
	  }
	 }
  }
</script>
<style>
#countdown {
  width: 100%;
}
label {
  clear: both;
  display: block;
}
#countdown span {
  background: #313233;
  color: #FFF;
  font-size: 26px;
  font-weight: normal;
  text-align: center;
  width: 25%;
  dispaly: block;
  float: left;
  border-right: 1px solid #FFF;
}
#countdown span:last-child {
  border-right: 1px solid #313233;
}
	
</style>
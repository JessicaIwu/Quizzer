# quizApp

### How to Use 
1. Clone the Repo

  >git clone https://github.com/gloong/quizapp.git

2. Make Changes by providing your solution 

3. Do a PR(Pull Request)

# Task 

> In this task the candidates are required to develop a Quiz application using VueJS. This task is to test the candidates proficiency in the language and also their problem solving abilities.  Features will include: 
1. Sign-in/Sign-out functionality 
2. Ability to create quiz questions 
3. Ability to Time quiz and transition when the specified time elapses
4. Ability to disable a quiz 
5. Leaderboard

# Functionalities 
## Sign-in / Sign-out functionality 
Quiz should not be created anonymously, all quiz should be created by a verified user.


## Quiz Creation
Users should be presented with an easy to use interface for quiz creation. This interface will require from the user the title of the quiz, questions not more than 5 and the corresponding answer to each question. Being a multi-choice question, the user will be presented with four different question, of which one is the correct answer. For capturing the answer for a quiz question, there should be a radio button beside each answer to indicate if that is the correct answer or not.  On submitting the created quiz, the application should generate a unique 4-digit number that will be used to access the quiz on the frontend.

## Timing
The Quiz creation form will have an input box that specifies the maximum time needed to answer the question. The UI should show a timer running down to zero for each question. On zero, the application should save the current answer and transition to the next question if there are others left or display the leaderboard if that was the final question.


## LeaderBoard 
This will be displayed after a user is done answering all the quiz questions. Here they will be shown a list of all the users that attempted the quiz and their final scores.



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

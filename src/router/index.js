import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Home from '@/components/Home'
import CreateQuiz from '@/components/CreateQuiz'
import TakeQuiz from '@/components/TakeQuiz'
import SetQuestions from '@/components/SetQuestions'

import Vuefire from 'vuefire'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({

	  routes: [
	{
      path: '*',
      redirect: '/Login',
    },
     {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp  
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
      	requiresAuth: true
      }
    },
      {
      path: '/CreateQuiz',
      name: 'CreateQuiz',
      component: CreateQuiz
    },
     {
      path: '/TakeQuiz',
      name: 'TakeQuiz',
      component: TakeQuiz
    },
     {
      path: '/ViewQuiz/:quizId',
      name: 'ViewQuiz',
      component: SetQuestions,
      props: true
    }
  ]
})

router.beforeEach((to, from, next)=> {
	let currentUser = firebase.auth().currentUser;
	let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

	if(requiresAuth && !currentUser) next ('Login')
	// else if (!requiresAuth && currentUser) next ('Home')
	else next()
})
export default router

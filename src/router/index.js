import Vue from 'vue'
import Router from 'vue-router'
import Student from '@/views/student/index'
import Teacher from '@/views/teacher/index'
import Login from '@/views/login/index'
import Exam from '@/views/student/exam'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/student',
      name: 'Student',
      component: Student,
      children: [
        {
          path: '/student/exam',
          name: 'Exam',
          component: Exam,
        }
      ]
    },
    {
      path: '/exam',
      name: 'Exam',
      component: Exam,
    },
    {
      path: '/teacher',
      name: 'Teacher',
      component: Teacher
    },



  ],

})

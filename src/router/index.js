import Vue from 'vue'
import Router from 'vue-router'
import Student from '@/views/student/index'
import Teacher from '@/views/teacher/index'
import Login from '@/views/login/index'
import SExam from '@/views/student/exam'
import TExam from '@/views/teacher/exam'

import Node from '@/views/student/node'


import Summary from '@/views/teacher/summary'
import Scoring from '@/views/teacher/scoring'

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
      // children: [
      //   {
      //     path: '/student/exam',
      //     name: 'Exam',
      //     component: Exam,
      //   }
      // ]
    },
    {
      path: '/student/exam',
      name: 'SExam',
      component: SExam,
    },
    {
      path: '/student/EnglishExam',
      name: 'SExam',
      component: SExam,
    },
    {
      path: '/student/MathExam',
      name: 'SExam',
      component: SExam,
    },
    {
      path: '/student/ChineseExam',
      name: 'SExam',
      component: SExam,
    },
    {
      path: '/student/ComputerExam',
      name: 'SExam',
      component: SExam,
    },









    {
      path: '/teacher',
      name: 'Teacher',
      component: Teacher
    },
    {
      path: '/teacher/exam',
      name: 'TExam',
      component: TExam,
    },
    {
      path: '/teacher/summary',
      name: 'Summary',
      component: Summary,
    },
    {
      path: '/teacher/scoring',
      name: 'Scoring',
      component: Scoring,
    },
    {
      path: '/node',
      name: 'Node',
      component: Node,
    },



  ],

})

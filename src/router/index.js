import Vue from 'vue'
import Router from 'vue-router'
import Student from '@/components/Student'
import Teacher from '@/components/Teacher'
import Login from '@/views/login/index'

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
          path: '/student',
          name: 'Student',
          component: Student,
        }
      ]
    },
    {
      path: '/teacher',
      name: 'Teacher',
      component: Teacher
    },



  ],

})

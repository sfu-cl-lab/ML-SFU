import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Seminars from '@/components/Seminars'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/seminars',
      name: 'seminars',
      component: Seminars
    }
  ]
})

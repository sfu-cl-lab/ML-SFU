import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import Pubs from '@/components/Pubs'
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
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/pubs',
      name: 'pubs',
      component: Pubs
    },
    {
      path: '/pubs/:year/:venue',
      name: 'pubs-year-venue',
      component: Pubs,
      props: true
    }
  ]
})

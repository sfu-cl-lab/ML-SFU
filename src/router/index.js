import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import NewsItemPage from '@/components/NewsItemPage'
import PubsPage from '@/components/PubsPage'
import Seminars from '@/components/Seminars'
import SeminarsPage from '@/components/SeminarsPage'

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
      component: SeminarsPage
    },
    {
      path: '/seminars/:date',
      name: 'seminars-by-date',
      component: Seminars
    },
    {
      path: '/seminar/:key',
      name: 'seminars-by-key',
      component: Seminars
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/news/:id',
      name: 'news-item',
      component: NewsItemPage
    },
    {
      path: '/pubs',
      name: 'pubs',
      component: PubsPage
    },
    {
      path: '/pubs/:year',
      name: 'pubs-year',
      component: PubsPage,
      props: true
    },
    {
      path: '/pubs/:year/:venue',
      name: 'pubs-year-venue',
      component: PubsPage,
      props: true
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

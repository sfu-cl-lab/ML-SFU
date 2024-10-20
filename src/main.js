// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/reset.css'
require.context('../contents/', true, /.*\.(jpg|png|gif)$/)

Vue.use(ElementUI)
Vue.config.productionTip = false

const fixIdScrolling = {
  watch: {
    $route(to, from) {
      const currentRoute = this.$router.currentRoute
      const idToScrollTo = currentRoute.hash
      this.$nextTick(() => {
        if (idToScrollTo && document.querySelector(idToScrollTo)) {
          document.querySelector(idToScrollTo).scrollIntoView()
        }
      })
    }
  }
}

/* eslint-disable no-new */
new Vue({
  mixins: [fixIdScrolling],
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

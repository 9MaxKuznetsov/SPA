import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Main from './components/Main.vue'
import About from './components/About.vue'
import Faq from './components/Faq.vue'
import Id from './components/id.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Main },
    { path: '/about', component: About },
    { path: '/faq', component: Faq },
    { path: '/id:id', component: Id }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Main from './components/Main.vue'
import About from './components/About.vue'
import Faq from './components/Faq.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Main },
    { path: '/about', component: About },
    { path: '/faq', component: Faq }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')

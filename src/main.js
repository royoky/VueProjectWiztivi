import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MovieList from './components/MovieList.vue'
import MovieForm from './components/MovieForm.vue'
import VueSocket from 'vue-socket.io'

Vue.use(new VueSocket({
  connection: 'http://localhost:5010'
}))


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: MovieList },
  { path: '/MovieForm/:id?', component: MovieForm }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

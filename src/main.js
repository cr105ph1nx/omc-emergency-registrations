import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'
import Home from "@/views/Home.vue";
import Register from "@/views/Register.vue";

Vue.use(Vuetify)

export default new Vuetify({
  theme: { dark: true },
})

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
  ]
})


Vue.config.productionTip = false

new Vue({
  router, // we tell our vue instance to use this vue router
  render: h => h(App),
}).$mount('#app')


import Vue from 'vue'
  import VueRouter from 'vue-router'
  Vue.use(VueRouter) 

  import Dolar from './components/Dolar.vue'

  export const router= new VueRouter ({
      mode: 'history',
      routes: [
          {path:'/', component: Dolar},
      ]
  })
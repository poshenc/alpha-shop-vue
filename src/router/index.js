import Vue from 'vue'
import Router from 'vue-router'
import Checkout from '../views/Checkout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Checkout from '../views/Checkout.vue'
import FormPanelStep1 from '../components/FormPanelStep1.vue'
import FormPanelStep2 from '../components/FormPanelStep2.vue'
import FormPanelStep3 from '../components/FormPanelStep3.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
      redirect: '/checkout/address',
      children: [
        {
          path: 'address',
          name: 'Address',
          component: FormPanelStep1
        },
        {
          path: 'delivery',
          name: 'Delivery',
          component: FormPanelStep2
        },
        {
          path: 'payment',
          name: 'Payment',
          component: FormPanelStep3
        }
      ]
    },
    {
      path: '*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

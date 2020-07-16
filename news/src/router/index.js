import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import New from '@/components/New'
import Single from '@/components/Single'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/single/:id',
      name: 'Single',
      component: Single
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      component: Count
    }
  ]
})

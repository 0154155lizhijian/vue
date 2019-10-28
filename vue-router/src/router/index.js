import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstPage from '@/components/FirstPage'
import Daluandou from '@/components/Daluandou'
import Moni from '@/components/Moni'
import Zhuangbei from '@/components/Zhuangbei'
import Hero from '@/components/Hero'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: Zhuangbei,
        right: Hero
      }
    },
    {
      path: '/firstPage',
      name: 'FirstPage',
      component: FirstPage,
      children: [
        // {
        //   path: '/',
        //   component: FirstPage
        // },
        {
          path: 'moni',
          name: 'Moni',
          component: Moni
        },
        {
          path: 'daluandou/:userName',
          name: 'Daluandou',
          component: Daluandou
        }
      ]
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '*',
      component: Error
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import firstPage from '@/components/first-page/first-page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/guo',
      name: 'first-page',
      component: firstPage
    }
  ]
})

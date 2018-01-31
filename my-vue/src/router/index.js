import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
import List from '@/components/List'
import Chowhound from '@/components/Chowhound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/chowhound',
      name: 'Chowhound',
      component: Chowhound
    }
  ]
})

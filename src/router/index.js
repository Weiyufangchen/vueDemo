/*
创建路由器
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../pages/about'
import Home from '../pages/home'
import News from '../pages/news'
import Message from '../pages/message'
import MessageDetail from '../pages/messageDetail'

//声明使用路由插件
Vue.use(VueRouter)

export default new VueRouter({

  routes: [
    //路由
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/news',
          component: News
        },
        {
          //默认会找跟路由home，可以省略不写 '/home'
          path: 'message',
          component: Message,
          children: [
            {
              path: '/home/message/detail/:id',
              component: MessageDetail
            }
          ]
        },
        { //自动跳转的路由
          path: '',
          redirect: '/home/news'
        }
      ]
    },
    {
      path: '',
      redirect: '/about'
    }
  ]
})




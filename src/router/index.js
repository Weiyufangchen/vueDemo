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
  //配置路由模式，mode
  // 类型string，
  // 默认'hash'(浏览器环境) | 'abstract'(Node.js环境)
  // 可选['hash' | 'history' | 'abstract']
  // mode: 'history',
  //配置所有路由
  routes: [
    //每一个对象代表路由
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/news',  //最左侧的斜杠永远代表根路径
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

/*
1. 一个构造函数VueRouter
2. 2个对象$router/$route
3. 3个组件router-link/router-view/keep-alive
 */

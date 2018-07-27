/*
入口js
 */
import Vue from 'vue'

import App from './App'
import router from './router'  //默认找index文件
import './main.css'

// Vue.component(Button.name, Button)  //全局注册组件

new Vue({
  el: '#app',
  components: {  //注册组件
    App
  },
  template: '<App/>',  //将App组件渲染到el对应的div中
  router  //注册路由器，给所有组件对象添加$route(代表当前路由的对象)的data数据，$router(代表路由器)
})

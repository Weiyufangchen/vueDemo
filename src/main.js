/*
入口js
 */
import Vue from 'vue'
import App from './App'

import './main.css'

new Vue({
  el: '#app',
  components: {  //注册组件
    App
  },
  template: '<App/>'  //将App组件渲染到el对应的div中
})

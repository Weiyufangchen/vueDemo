/*
入口js
 */
import Vue from 'vue'
import {Button} from 'mint-ui'

import App from './App'
import './main.css'

Vue.component(Button.name, Button)  //全局注册组件

new Vue({
  el: '#app',
  components: {  //注册组件
    App
  },
  template: '<App/>'  //将App组件渲染到el对应的div中
})

/*
入口js
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'

import './main.css'
//声明使用插件
Vue.use(VueResource)  //内部会给vm/组件对象添加一个属性 $http 对象（get()/post()）

new Vue({
  el: '#app',
  components: {  //注册组件
    App
  },
  template: '<App/>'  //将App组件渲染到el对应的div中
})

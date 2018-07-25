<template>
  <div>
    <h2 v-show="firstView">请求输入关键字搜索</h2>
    <h2 v-show="loading">loading...</h2>
    <h2 v-show="errorMsg">{{errorMsg}}</h2>
    <div class="row" v-show="users && users.length > 0">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>
<!--
请求写在main组件中，这样search组件与main组件只通信一次，
如果写在search组件中，更新状态之前发送一次，为firstView，更新时改为loading，更新后，成功/失败又发送一次通信，这样效率低，代码复杂
-->
<script>
  import Pubsub from 'pubsub-js'
  import axios from 'axios'
  export default {
    data(){
      return {
        firstView: true, //上来显示的第一个界面
        loading: false, //是否请求中
        users: [],  //请求成功，显示的用户列表
        errorMsg: ''  //请求错误的提示信息
      }
    },
    mounted() {
      //订阅消息（search）
      Pubsub.subscribe('search', (msg, searchName) => {
        //更新状态数据(请求中)
        this.firstView = false
        this.loading = true
        //发送ajax请求
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
          .then(response => {
            const result = response.data
            const users = result.items.map(item => ({
              url: item.html_url,
              avatar_url: item.avatar_url,
              name: item.login
            }))
            this.loading = false
            this.users = users
          })
          .catch(err => {
            //请求失败，更新状态数据失败
            this.loading = false
            this.errorMsg = '请求失败：' + err
          })
      })
    }
  }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }
  .card>a{
    display: block;
  }
  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>

<template>
  <div>
    <h2 v-if="!repoName">loading...</h2>
    <h2 v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></h2>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        repoName: '',
        repoUrl: ''
      }
    },
    mounted() {
      //发送异步ajax请求
      const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
      /*//使用Vue.$http发送请求
      this.$http.get(url)
        .then(
          response => {
            const result = response.data
            const mostStarRepo = result.items[0]
            //更新状态数据
            this.repoName = mostStarRepo.name
            this.repoUrl = mostStarRepo.html_url
          })
        .catch(
          error => console.log(error)
        )*/
      axios.get(url)
        .then(response => {
          const result = response.data
          const mostStarRepo = result.items[0]
          //更新状态数据
          this.repoName = mostStarRepo.name
          this.repoUrl = mostStarRepo.html_url
        })
        .catch(
          error => console.log(error)
        )
    }
  }
</script>

<style>

</style>
<!--
1. 下载依赖：npm install vue-resource --save
2. 引入模块
3. 使用插件 Vue.use(VueResource)  非官方库
4. 通过vue/组件对象发送ajax请求
-->

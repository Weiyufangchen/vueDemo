<template>
  <div>
    <ul>
      <li v-for="(message, index) in messages" :key="index">
        <router-link :to='`/home/message/detail/${message.id}`'>{{message.title}}</router-link>
        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <hr>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        messages: []
      }
    },
    mounted(){
      //定时器模拟从后台获取数据
      setTimeout(()=>{  //箭头函数解决this问题
        const messages = [
          {id: 1, title: 'message001'},
          {id: 2, title: 'message002'},
          {id: 3, title: 'message003'},
          {id: 4, title: 'message004'},
        ]
        this.messages = messages
      }, 1000)
    },
    methods: {
      pushShow(id){
        console.log(this);
        this.$router.push(`/home/message/detail/${id}`)
      },
      replaceShow(id){
        this.$router.replace(`/home/message/detail/${id}`)
      }
    }
  }
</script>

<style scoped>

</style>

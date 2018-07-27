<template>
  <ul>
    <li>id: {{messageDetail.id}}</li>
    <li>title: {{messageDetail.title}}</li>
    <li>content: {{messageDetail.content}}</li>
  </ul>
</template>

<script>
  const allMessageDetails = [
    {id: 1, title: 'message001', content: '空山新雨后，'},
    {id: 2, title: 'message002', content: '天气晚来秋。'},
    {id: 3, title: 'message003', content: '明月松间照，'},
    {id: 4, title: 'message004', content: '清泉石上流。'},
  ]
  export default {
    data() {
      return {
        messageDetail: {}
      }
    },
    mounted() { //如果是同路由切换(只是改变了参数，组件对象是同一个，不会再调用mounted())
      //获取请求参数中的id
      const id = +this.$route.params.id
    //  从allMessageDetails中找到对象的messageDetail
      const messageDetail = allMessageDetails.find(md => md.id === id)
      //更新数据
      this.messageDetail = messageDetail
    },
    watch: {
      '$route': function (value) {
        const id = +value.params.id
        const messageDetail = allMessageDetails.find(md => md.id === id)
        this.messageDetail = messageDetail
      }
    }
  }
</script>

<style scoped>

</style>

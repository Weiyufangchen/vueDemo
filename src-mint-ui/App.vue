<template>
  <div>
    <mt-button type="danger" style="width: 100%;" @click="handleClick">测试mint-ui</mt-button>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default {

    methods: {
      handleClick () {
        // Toast('点击了测试')
        Toast({
          message: '提示',
          position: 'bottom',
          duration: 5000
        })
      }
    }
  }
</script>

<style>

</style>

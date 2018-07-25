<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
    <commentItem/>
  </div>
</template>

<script>
  import commentItem from './commentItem'
  export default {
    components: {
      commentItem
    }
  }
</script>

<style>
  .reply {
    margin-top: 0px;
  }

</style>

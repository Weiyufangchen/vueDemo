<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="isShow">暂无评论，点击左侧添加评论！！！</h2>
    <commentItem :comments="comments" :deleteComment="deleteComment"/>
  </div>
</template>

<script>
  import commentItem from './commentItem'
  export default {
    props: ['comments', 'deleteComment'],
    data(){
      return {
        isShow: this.comments.length ? false : true,  //默认不显示，没有评论时再显示
      }
    },
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

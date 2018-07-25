<template>
  <div>
    <CommentHeader/>
    <div class="container">
      <AddComment :addComment="addComment"/>
      <CommentsList :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
  import Header from './components/header'
  import AddComment from './components/addComment'
  import CommentsList from './components/commentsList'
  export default {
    data(){
      return {
        comments: []
      }
    },
    mounted(){
      //读取localStorage中的comments数据
      this.comments = JSON.parse(localStorage.getItem('comments_key') || '[]')
    },
    watch: {
      comments: {
        deep: true,
        handler: function (value) {
          localStorage.setItem('comments_key', JSON.stringify(value))
        }
      }
    },
    methods: {
      //添加评论
      addComment (comment) {
        this.comments.unshift(comment)
      },
      //删除评论
      deleteComment (comment) {
        if (window.confirm(`您确定删除 ${comment.name} 的评论吗？`)) {
          this.comments.splice(this.comments.indexOf(comment), 1);
        }
      }
    },
    components: {
      CommentHeader: Header,
      AddComment,
      CommentsList
    }
  }
</script>

<style>

</style>

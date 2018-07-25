<template>
  <div>
    <CommentHeader/>
    <div class="container">
      <AddComment/>
      <CommentsList/>
    </div>
  </div>
</template>

<script>
  import Header from './components/header'
  import AddComment from './components/addComment'
  import CommentsList from './components/commentsList'
  export default {

    components: {
      CommentHeader: Header,
      AddComment,
      CommentsList
    }
  }
</script>

<style>

</style>

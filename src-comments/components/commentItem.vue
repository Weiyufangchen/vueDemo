<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="(comment, index) in comments" :key="index">
      <div class="handle">
        <a href="javascript:;" @click="deleteComment(comment, index)">删除</a>
      </div>
      <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
      <p class="centence">{{comment.content}}</p>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['comments', 'deleteComment'],
  }
</script>

<style>
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }

</style>

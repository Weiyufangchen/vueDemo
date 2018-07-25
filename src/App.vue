<template>
  <div class="container">
    <Search/>
    <UsersMain/>
  </div>
</template>

<script>
  import Search from './components/search'
  import Main from './components/main'
  export default {

    components: {
      Search,
      UsersMain: Main
    }
  }
</script>

<style>

</style>

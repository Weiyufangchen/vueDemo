<template>
  <ul>
    <EmployeeItem :employees="employees"/>
  </ul>
</template>

<script>
  import EmployeeItem from './employeeItem'
  export default {
    props: ['employees'],

    components: {
      EmployeeItem,
    }
  }
</script>

<style scoped>

</style>

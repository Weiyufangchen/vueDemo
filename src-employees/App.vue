<template>
  <div>
    <EmployeesList :employees="employees"/>
  </div>
</template>

<script>
  import EmployeesList from './components/employeesList'
  export default {

    data(){
      return {
        employees: [
          {name: 'A', sex: '男', age: 21, salary: 10000},
          {name: 'B', sex: '女', age: 25, salary: 12000},
          {name: 'C', sex: '男', age: 24, salary: 13000},
          {name: 'D', sex: '男', age: 24, salary: 12500},
          {name: 'E', sex: '女', age: 21, salary: 14000},
          {name: 'F', sex: '男', age: 24, salary: 16000},
        ]
      }
    },
    components: {
      EmployeesList,
    }

  }
</script>

<style>

</style>

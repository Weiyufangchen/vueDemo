<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <!--<todo-header/> 中间大写变小写需要加 '-' -->
      <List :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :selectAll="selectAll" :clearAllCompletes="clearAllCompletes"/>
    </div>
  </div>
</template>

<script>
  import Header from './components/header.vue'
  import List from './components/list.vue'
  import Footer from './components/footer'
  import StorageUtils from './utils/utils.js'
  export default {  //vue中能写哪些配置这里就能写哪些

    data () {  //只能使用函数形式
      return {
        todos: []
      }
    },
    mounted(){
      this.todos = StorageUtils.readTodos()
    },

    methods: {
      //添加元素
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      //删除指定元素（接收元素的下标）
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },
      //全选/全不选
      selectAll (isSelectAll) {
        this.todos.forEach(todo => todo.complete = isSelectAll)
      },
      //清除已完成任务
      clearAllCompletes () {
        this.todos = this.todos.filter(todo => !todo.complete)
      }
    },
    watch: {
      todos: {
        deep: true,  //深度监视
        handler: StorageUtils.saveTodos
      }
    },
    components: {  //注册组件，指定组件所对应的标签名
      TodoHeader: Header,
      List,
      TodoFooter: Footer
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>



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
  export default {  //vue中能写哪些配置这里就能写哪些

    data () {  //只能使用函数形式
      return {
        todos: []
      }
    },
    mounted(){
      /*
        缓存数据，将todos保存到localStorage中，下次打开浏览器，打开上次的todos数据
        1. todos
        2. 更新（不能update，update是对所有的数据，如果todos没有更改，就没有必要，用watch监视todos数据）
        3. 缓存（只要更新，就可以保存）
        4. 读取 todos
        再考虑将这个功能拆成组件封装出去
      */
      //读取local中保存的todos（对应的口令todos_key）
      this.todos = JSON.parse(localStorage.getItem('todos_key') || '[]')
      //
    },
    watch: {
      todos: {
        deep: true,  //深度监视
        handler: function (value) {  //todos最新的值
          localStorage.setItem('todos_key', JSON.stringify(value))
        }
      }
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



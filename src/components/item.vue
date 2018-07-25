<template>
  <li :style="{background: bgColor}"
      @mouseenter="handleEnter(true)"
      @mouseleave="handleEnter(false)"
      @click="checkItem"
  >
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
  export default {
    props: {
      todo: Object,  //指定属性名和属性值的类型
      deleteTodo: Function,
      index: Number
    },
    data(){
      return {
        isShow: false,
        bgColor: 'white'
      }
    },
    methods: {

      handleEnter(isEnter){
        if (isEnter) {
          this.isShow = true
          this.bgColor = '#ccc'
        } else {
          this.isShow = false
          this.bgColor = '#fff'
        }
      },
      checkItem(){
        this.todo.complete = !this.todo.complete
      },
      deleteItem () {
        if (window.confirm(`您确认删除 ${this.todo.title} 吗？`)) {
          this.deleteTodo(this.index)
        }
      }
    }

  }
</script>

<style>

</style>

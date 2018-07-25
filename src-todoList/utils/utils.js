/*
  缓存数据，将todos保存到localStorage中，下次打开浏览器，打开上次的todos数据
  1. todos
  2. 更新（不能update，update是对所有的数据，如果todos没有更改，就没有必要，用watch监视todos数据）
  3. 缓存（只要更新，就可以保存）
  4. 读取 todos
  再考虑将这个功能拆成组件封装出去
*/
const TODOS_KEY = 'todos_key'
export default {
  readTodos () {
    //读取local中保存的todos（对应的口令todos_key）
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  },
  saveTodos (todos) {  //todos最新的值
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  }
}

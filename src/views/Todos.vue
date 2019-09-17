<template>
  <div class="todos">
    <div class="header">
      <Form />
    </div>
    <div class="body">

      <ul class="todos-list" v-if="todos.length >= 1">
        <li v-for="todo in todos" v-bind:key="todo.id" class="todo-item">
          <button class="edit">edit</button>
          <span class="todo"> {{ todo.desc }} </span>
          <button class="todo-btn">X</button>
        </li>
      </ul>

      <p v-else class="no-todos">You Have No Todos</p>

    </div>
  </div>
</template>

<script>
import Form from '../components/Form'
export default {
  name: "todos",
  components: {
    Form
  },
  data() {
    return {
      todos: [
        {
          desc: "To Work Tonight",
          id: 1
        },
        {
          desc: "To Work Tonight And To",
          id: 1
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .todos-list {
    /* background: green; */
    padding: 0;
    width: 50%;
    margin: auto;
    border-radius: 20px;
  }

  .todo-item {
    /* padding-top: 5px;
    padding-bottom: 5px; */
    list-style-type: none;
    /* background: yellow; */
    width: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    margin-top: 2px;
    margin-bottom: 2px;
  }

  .edit {
    flex: 1;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    height: 30px;
    cursor: pointer;
    border: none;
    outline: none;
  }

  .edit:hover {
    background: gray;
  }

  .todo {
    flex: 5;
    background: darkolivegreen;
    text-align: center;
    padding-top: 7px;
    color: white;
  }

  .todo-btn {
    flex: 1;
    height: 30px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    border: none;
    outline: none;
  }

  .todo-btn:hover {
    background: gray;
  }
</style>
<template>
  <div class="todos">
    <div class="header">
      <Form />
    </div>
    <div class="body">

      <ul class="todos-list" v-if="todos.length >= 1">
        <li v-for="todo in todos" v-bind:key="todo.id" class="todo-item">
          <span> {{ todo.desc }} </span>
          <span>
            <div class="delete">x</div>
          </span>
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
        }
      ]
    }
  },
  methods: {

  }
}
</script>

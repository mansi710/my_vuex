<template>
  <div>
    <TodoData v-for="(todo, index) in todos" :key="index" :todo="todo" />
  </div>
</template>
<script>
import TodoData from "./TodoData.vue";
import { mapState } from "vuex";
export default {
  components: {
    TodoData,
  },
  computed: {
    // todos() {
    //   return this.$store.state.todos;
    // },
    ...mapState({
      todos: "todos",
    }),
  },
};
</script>

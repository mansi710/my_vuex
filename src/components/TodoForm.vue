<template>
  <div>Todo Form</div>
  <input type="text" v-model="newTodoItem" />
  <button @click="addNewTodoItem()">Add New Todo</button>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addNewTodoItem() {
      this.$store.dispatch("addNewTodo", this.newTodoItem);
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped></style>

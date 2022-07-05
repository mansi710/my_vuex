<template>
  <div id="app">
    <HelloWorld />
    <h1>Todos</h1>
    <h3>completed:{{ completedTodos }}</h3>
    <h3>Pending:{{ pendingTodos }}</h3>
    <TodoList />
    <TodoForm />
  </div>
  <div>
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
  <div>
    <RegisterC />
  </div>

  <div>
    <h1>Login</h1>
    <LoginC />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoForm from "./components/TodoForm.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import ProductList from "./components/ProductList.vue";
import RegisterC from "./components/RegisterC.vue";
import LoginC from "./components/LoginC.vue";
import { mapGetters } from "vuex";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    TodoList,
    TodoForm,
    ProductList,
    ShoppingCart,
    RegisterC,
    LoginC,
    HelloWorld,
  },
  computed: {
    ...mapGetters({
      completedTodos: "completedTodos",
      pendingTodos: "pendingTodos",
    }),
    // computedTodos() {
    //   return this.$store.getters.completedTodos;
    // },
    // pendingTodos() {
    //   return this.$store.getters.pendingTodos;
    // },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

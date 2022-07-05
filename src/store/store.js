// import Vue from "vue";
// import VueX from "vuex";

// Vue.use(VueX);

// export default new VueX.Store({
//   state: {
//     todos: [
//       {
//         title: "todo item completed A",
//         completed: false,
//       },
//       {
//         title: "todo item completed B",
//         completed: false,
//       },
//     ],
//   },
//   getters: {},
//   mutations: {},
//   actions: {},
// });

import { createStore } from "vuex";
// import shop from "./shop";
import actions from "./actions";
import cart from "./modules/cart";
import products from "./modules/products";

export default createStore({        
  state: {
    todos: [
      {
        title: "todo item completed A",
        completed: false,
      },
      {
        title: "todo item completed B",
        completed: false,
      },
    ],

    //like data
    // products: [],
  },

  modules: {
    cart,
    products,
  },
  getters: {
    completedTodos(state) {
      return state.todos.filter((todo) => {
        return todo.completed === true;
      }).length;
    },
    pendingTodos(state) {
      return state.todos.filter((todo) => {
        return todo.completed === false;
      }).length;
    },
    productsCount() {},
    // cartProducts(state, getters, rootState) {

    // availableProducts(state) {
    //   return state.products.filter((product) => product.inventory > 0);
    // },

    // //for cart
    // cartProducts(state) {
    //   return state.cart.map((cartItem) => {
    //     const product = state.products.find(
    //       (product) => product.id === cartItem.id
    //     );
    //     return {
    //       title: product.title,
    //       price: product.price,
    //       quantity: cartItem.quantity,
    //     };
    //   });
    // },

    // //cart to total
    // cartTotal(state, getters) {
    //   return getters.cartProducts.reduce(
    //     (total, product) => total + product.price * product.quantity,
    //     0
    //   );
    // },

    //product is in stock
    // productIsInStock() {
    //   return (product) => {
    //     return product.inventory > 0;
    //   };
    // },
  },
  mutations: {
    NEW_TODO(state, todoItem) {
      state.todos.push({
        title: todoItem,
        completed: false,
      });
    },
    DELETE_TODO(state, todoItem) {
      let index = state.todos.indexOf(todoItem);
      state.todos.splice(index, 1);
    },
    TOGGLE_TODO_STATUS(state, todoItem) {
      todoItem.completed = !todoItem.completed;
    },

    //setting and updating state
    //when state change
    //and only responsible for updating just a piece of the state.
    // setProducts(state, products) {
    //   state.products = products;
    // },
    // pushProductToCart(state, productId) {
    //   state.cart.push({
    //     id: productId,
    //     quantity: 1,
    //   });
    // },

    // incrementItemQuantity(state, cartItem) {
    //   cartItem.quantity++;
    // },

    // decrementProductInventory(state, product) {
    //   product.inventory--;
    // },
    // setCheckoutStatus(state, status) {
    //   state.checkoutStatus = status;
    // },
    // emptyCart(state) {
    //   state.cart = [];
    // },
  },
  actions,
});

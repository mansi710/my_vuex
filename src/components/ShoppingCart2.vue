<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price }} - {{ product.qunatity }}
      </li>
    </ul>
    <p>Total:{{ total }}</p>
    <!-- <button @click="$store.dispatch('checkout')">Checkout</button> -->
    <button @click="checkout">Checkout with map helpers</button>
    <!-- <p v-if="$store.state.checkoutStatus">{{ $store.state.checkoutStatus }}</p> -->
    <!-- <p v-if="checkoutStatus">{{ checkoutStatus }}</p> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  namespaced: true,
  computed: {
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotal",
    }),

    ...mapGetters({
      productIsInStock: "productIsInStock",
    }),
    ...mapState("cart", {
      // checkoutStatus: "checkoutStatus",
      checkoutStatus: (state) => state.cart.checkoutStatus,
    }),
    // products() {
    //   return this.$store.getters.cartProducts;
    // },
    // total() {
    //   return this.$store.getters.cartTotal;
    // },
  },
  methods: {
    ...mapActions("cart",["checkout"]),
  },
};
</script>

<style scoped></style>

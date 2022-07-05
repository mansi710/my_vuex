<template>
  <div>
    <h1>Product List</h1>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" />
    <ul v-else>
      <li v-for="product in products" :key="product.name">
        {{ product.title }} - {{ product.price }} - {{ product.inventory }}
        <button :disabled="!productIsInStock(product)" @click="addProductToCart(product)">
          Add To Cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
// import shop from "@/store/shop";
// import store from "@/store/store";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  namespaced: true,
  data() {
    return {
      // products: [],
      loading: false,
      productIndex: 1,
    };
  },

  computed: {
    ...mapState({
      products: (state) => state.products.items,
    }),
    ...mapGetters("products", ["productIsInStock"]),
  },

  //  computed: {
  //   //return the product from the state.
  //   products() {
  //     // return store.state.products;

  //     // for available product to fetch getter
  //     // return store.getters.availableProducts;

  //     //using getter
  //     return this.$store.state.products;
  //   },

  //   productIsInStock() {
  //     return this.$store.getters.productIsInStock;
  //   },
  // },
  methods: {
    ...mapActions("products", ["fetchProducts"]),
    ...mapActions("cart", ["addProductToCart"]),

    // addProductToCart(product) {
    //   store.dispatch("addProductToCart", product);
    // },
  },
  created() {
    // shop.getProducts((products) => {
    //   //   store.state.products = products;
    //   //commit mutation
    //   store.commit("setProducts", products);
    // });

    this.loading = true;
    // store.dispatch("fetchProducts").then(() => (this.loading = false));
    this.fetchProducts().then(() => (this.loading = false));
  },
};
</script>

<style scoped></style>

import shop from "@/store/shop";

export default {
  namespaced: true,

  state: {
    // {id, quantity}
    items: [],
    checkoutStatus: null,
  },

  getters: {
    cartProducts(state, getters, rootGetters) {
      return state.items.map((cartItem) => {
        const product = rootGetters.products.items.find(
          (product) => product.id === cartItem.id
        );
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity,
        };
      });
    },

    cartTotal(state, getters) {
      return getters.cartProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
  },

  mutations: {
    pushProductToCart(state, productId) {
      state.items.push({
        id: productId,
        quantity: 1,
      });
    },

    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++;
    },

    setCheckoutStatus(state, status) {
      state.checkoutStatus = status;
    },

    emptyCart(state) {
      state.items = [];
    },
  },

  actions: {
    addProductToCart({ state, commit, rootGetters }, product) {
      if (rootGetters["products/productIsInStock"](product)) {
        const cartItem = state.items.find((item) => item.id === product.id);
        if (!cartItem) {
          commit("pushProductToCart", product.id);
        } else {
          commit("incrementItemQuantity", cartItem);
        }
        commit("products/decrementProductInventory", product, { root: true });
      }
    },

    checkout({ state, commit }) {
      shop.buyProducts(
        state.items,
        () => {
          commit("emptyCart");
          commit("setCheckoutStatus", "success");
        },
        () => {
          commit("setCheckoutStatus", "fail");
        }
      );
    },
  },
};

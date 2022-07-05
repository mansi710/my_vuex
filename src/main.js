import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/store.js";
import "./axios";

// import vuetify from "@/plugins/vuetify.js"; // path to vuetify export

// import { currency } from "@/currency";

createApp(App).use(store).mount("#app");

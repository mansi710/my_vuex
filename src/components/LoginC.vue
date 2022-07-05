<template>
  <div>
    <form @submit.prevent="CreatePost">
      <div>
        <label for="email">User Name</label>
        <input type="text" id="email" v-model="data.email" />
      </div>
      <div>
        <label for="Country Dial Code">Password</label>
        <input type="text" id="password" v-model="data.password" />
      </div>
      <button>Save Country</button>
      <button>Forot Password</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreatePost",
  data() {
    return {
      data: {
        // userId: "",

        email: "",
        password: "",
      },
    };
  },
  methods: {
    async CreatePost() {
      const response = await axios.post("login", {
        email: this.data.email,
        password: this.data.password,
      });
      localStorage.setItem("token", response.data.access_token);
    },
    // CreatePost() {
    //   axios
    //     .post("http://127.0.0.1:8000/api/login", this.data)
    //     .then((response) => console.log("response", response.data.access_token))
    //     .catch((error) => console.log("error", error));

    //   localStorage.setItem("token", response.data.access_token);
    // },
  },
};
</script>

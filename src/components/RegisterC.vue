<template>
  <div>
    <form @submit.prevent="CreatePost">
      <div>
        <label for="name">User Name</label>
        <input type="text" id="name" v-model="formData.name" />
      </div>
      <div>
        <label for="email">User Email</label>
        <input type="text" id="email" v-model="formData.email" />
      </div>
      <div>
        <label for="password">password</label>
        <input type="text" id="password" v-model="formData.password" />
      </div>
      <div>
        <label for="C_pwd">Confirm Password</label>
        <input type="text" id="c_password" v-model="formData.confirm_password" />
      </div>
      <button>Sign Up</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreatePost",
  data() {
    return {
      formData: {
        // userId: "",
        name: "",
        email: "",
        password: "",
        confirm_password: "",
      },
    };
  },
  methods: {
    CreatePost() {
      axios
        .post("register", this.formData)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
  },
};
</script>

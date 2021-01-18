<template>
  <div class="container">
    <div>
      <h1 class="title">Login</h1>
      <p id="my-message">{{ message }}</p>
      <button @click="auth">Login</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from "firebase";

import {Auth, Provider} from "@/services/auth";
export default Vue.extend({
  data() {
    return {
      message: "Hello, Client",
      token:""
    };
  },
  async asyncData() {
    let data = await fetch("http://localhost:5000/").then((res) => res.json());
    console.log(data);
    return { message: data.message };
  },
  methods: {
    async auth() {
      const auth = new Auth(this.$accessor);
      await auth.login(Provider.Twitter);
      this.$router.push("/secret");
    },
  },
});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

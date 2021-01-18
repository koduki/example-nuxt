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

export default Vue.extend({
  data() {
    return {
      message: "Hello, Client",
    };
  },
  async asyncData({ $axios }) {
    let data = await $axios.$get("http://localhost:5000/");
    console.log(data);
    return { message: data.message };
  },
  methods: {
    auth() {
      this.$router.push('/secret')
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

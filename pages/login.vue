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
    auth() {
      const config = {
        apiKey: process.env.NUXT_ENV_AUTH_API_KEY,
        authDomain: process.env.NUXT_ENV_AUTH_API_DOMAIN,
      };
      firebase.initializeApp(config);
      const self = this;
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((res:any) => {
          res.user.getIdToken()
            .then((token: string) => {
              self.token = token
              console.log(token);
              })
            .catch((error:any) => {
              console.log(error);
            });
        });

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

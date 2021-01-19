<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Hello, {{ $accessor.user.name }}</h1>
      <ul>
        <li><a href="/posts/koduki/1/">/posts/koduki/1/</a></li>
        <li><a href="/posts/koduki/2/">/posts/koduki/2/</a></li>
        <li><a href="/posts/misuzu/1/">/posts/misuzu/1/</a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  middleware: ["auth-filter"],
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

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>

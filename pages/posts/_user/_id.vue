<template>
  <section>
    <h1>{{ message }}</h1>
    <p>{{ $route.params.user + ":" + $route.params.id }}</p>
  </section>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      message: "",
      title: "",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "about " + this.message,
        },
      ],
    };
  },
  async asyncData({ params, $config, $axios }) {
    let data = await $axios.$get(
      `${$config.baseURLAPI1}/${params.user}/${params.id}`
    );
    return { message: data.message, title: data.title };
  },
});
</script>
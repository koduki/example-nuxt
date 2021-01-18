<template>
  <section>
    <p>{{ $route.params.user + ":" + $route.params.id }}</p>
  </section>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      token: "",
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
  async asyncData({ params, $axios}) {
    let data = await $axios.$get(
      `http://localhost:5000/${params.user}/${params.id}`
    )
    return { message: data.message, title: data.title };
  },
};
</script>
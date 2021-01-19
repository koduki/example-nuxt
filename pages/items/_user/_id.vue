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
  async asyncData({ params, $config, $axios }) {
      console.log(`${$config.baseURLAPI1}/${params.user}/${params.id}`)
    let data = await $axios.$get(
      `${$config.baseURLAPI1}/${params.user}/${params.id}`
    );
    return { message: data.message, title: data.title };
  },
};
</script>
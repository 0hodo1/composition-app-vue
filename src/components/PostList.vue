<template>
  <div v-for="post in posts" :key="post.id">
    <h3>{{ post.title }}</h3>
  </div>
  <div v-if="errors">
    {{ errors }}
  </div>
</template>

<script>
import { ref } from "vue";
import getPosts from "../composables/getPosts";
import { useRoute, useRouter } from "vue-router";

export default {
  props: ["posts"],
  setup(props) {
    const route = useRoute();
    const router = useRouter();

    console.log(route);
    console.log(router);

    const { posts, errors, loadData } = getPosts();

    loadData();

    return {
      posts,
      errors,
    };
  },
};
</script>

<style></style>

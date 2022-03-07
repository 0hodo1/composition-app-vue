<template>
  <div class="home">
    <PostList :posts="posts" />
  </div>
</template>

<script>
// @ is an alias to /src

import PostList from "../components/PostList.vue";

import { ref } from "vue";

export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        id: 1,
        title: "Hello World",
        body: "This is my first post",
      },
      {
        id: 2,
        title: "Second Post",
        body: "This is my second post",
      },
    ]);
    return { posts };
  },
};
</script>

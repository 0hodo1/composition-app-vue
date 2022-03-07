import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const errors = ref(null);

  const loadData = async () => {
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      posts.value = await data.json();

      if (!data.ok) {
        throw new Error("Error loading data");
      }
    } catch (error) {
      errors.value = error.message;
    }
  };
  return { posts, errors, loadData };
};

export default getPosts;

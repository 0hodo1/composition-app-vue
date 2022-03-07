<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- 1 -->
    <!-- <p>{{ name }} -- {{ role }}</p> -->
    <!-- <p>p tag</p> -->
    <!-- 3 -->
    <!-- <p>{{ name }}</p>
  <input type="text" v-model="name" />
  <button @click="buttonClick">Click</button> -->
    <!-- 4 -->
    <!-- <p>{{ name }}--{{ rolesObject.role }}</p>
    <button @click="buttonClick">Click</button> -->

    <!-- 5 -->
    <br />
    <input type="text" v-model="search" />
    <div v-for="name in founded" :key="name">
      <p>{{ name }}</p>
    </div>
    <!-- 6 -->
    <button @click="stop">Stop</button>
  </div>
</template>

<script>
// @ is an alias to /src

import { onMounted, ref, reactive, computed, watch, watchEffect } from "vue";

export default {
  name: "HomeView",
  components: {},
  setup() {
    // 5
    const names = ref(["omer", "hodo", "md", "hd", "yc"]);
    const search = ref("");

    const founded = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    // 6
    const watchN = watch(search, () => {
      console.log("watch start");
    });

    const watchEffectN = watchEffect(() => {
      console.log("watchEffect start", names.value);
      console.log("watchEffect start", search.value);
    });

    const stop = () => {
      watchN();
      watchEffectN();
    };

    return { names, search, founded, stop };

    // 4
    // let name = ref("hodo");
    // let rolesObject = reactive({ role: "admin" });
    // const buttonClick = () => {
    //   name.value = "omer";
    //   rolesObject.role = "user";
    // };
    // return { buttonClick, name, rolesObject };

    // 3
    // let name = ref("hodo");
    // const buttonClick = () => {
    //   name.value = "omer";
    // };
    // return { name, buttonClick };

    // 2
    // const information = ref("hodo");
    // const buttonClick = () => {
    //   console.log(information, information.value);
    //   information.value = "button clicked";
    // };
    // return { buttonClick, information };

    // 1
    // let name = "hodo";
    // let role = "admin";
    // const buttonClick = () => {
    //   console.log("button clicked");
    // };
    // return { name, role, buttonClick };
  },
};
</script>

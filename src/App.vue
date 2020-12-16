<template>
  <div id="app">
    <Navbar />

    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<script>
import { setPageTitle } from "@/utils";
import store from "@/store";

import Navbar from "@/components/layout/Navbar.vue";

export default {
  components: { Navbar },
  name: "App",
  created() {
    setPageTitle();
  },
  store,
};
</script>

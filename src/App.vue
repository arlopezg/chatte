<template>
  <div id="app">
    <Navbar />

    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar.vue";
export default {
  components: { Navbar },
  name: "App",
};
</script>

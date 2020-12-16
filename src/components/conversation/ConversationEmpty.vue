<template>
  <div class="flex flex-col justify-center items-center h-full">
    <Logo class="w-1/6" />
    <h2 class="block text-xl bold my-6">Welcome to Chatte</h2>
    <p class="text-center">
      Chatte connects you with your nearest friends. <br />
      <i>Let's meet for coffee.</i>
    </p>
  </div>
</template>

<script>
import Logo from "../generic/Logo.vue";
export default {
  components: { Logo },
};
</script>

<style></style>

<template>
  <div class="flex flex-col justify-center items-center h-screen md:h-full">
    <Logo class="w-1/6" />
    <h2 class="block text-xl bold my-6">Welcome to Chatte</h2>
    <p class="text-center">
      Chatte connects you <br class="md:hidden" />
      with your nearest friends.
      <br />
      <br />
      <i>Let's meet for coffee.</i>
    </p>
    <p class="md:hidden">
      <RouterLink to="/contacts" class="text-blue-500 mt-5 block"
        >Start by messaging someone</RouterLink
      >
    </p>
  </div>
</template>

<script>
import Logo from "../generic/Logo.vue";

export default {
  name: "ConversationEmpty",
  components: { Logo },
};
</script>

<style></style>

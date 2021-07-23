<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-400 p-6">
    <RouterLink to="/" class="flex items-center flex-shrink-0 text-white mr-6">
      <Logo class="max-h-10 mr-2" />
      <span class="font-semibold text-xl tracking-tight">Chatte</span>
    </RouterLink>
    <div
      class="w-1/2 md:w-full block flex-grow lg:flex lg:items-center lg:w-auto"
    >
      <div class="text-sm lg:flex-grow"></div>
      <div>
        <a
          href="https://github.com/arlopezg/chatte"
          target="_blank"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-blue-500"
          >Check the code</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "../generic/Logo.vue";
export default {
  components: { Logo },
  name: "Navbar",
};
</script>

<template>
  <header class="chat--header flex items-center px-5 h-20 bg-blue-200">
    <img :src="activeChat.picture" :alt="activeChat.name" class="h-15 w-15 rounded-full mr-4" />
    <strong>{{ activeChat.name }}</strong>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("chat", ["activeChat"]),
  },
};
</script>

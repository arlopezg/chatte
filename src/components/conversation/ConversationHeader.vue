<template>
  <header class="chat--header flex justify-between px-5 h-20 bg-blue-200">
    <div class="flex items-center">
      <img
        :src="activeChat.picture"
        :alt="activeChat.name"
        class="h-15 w-15 rounded-full mr-4"
      />
      <strong>{{ activeChat.name }}</strong>
    </div>
    <button type="button" class="px-3" title="Close chat" @click="closeChat">
      <span class="mr-2 text-xl text-blue-600">✕</span>
    </button>
  </header>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("chat", ["activeChat"]),
  },
  methods: {
    ...mapActions("chat", ["openChatWithContact"]),
    closeChat() {
      this.openChatWithContact(null);
    },
  },
};
</script>

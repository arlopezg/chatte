<template>
  <form class="px-4" @submit.prevent="send">
    <div class="flex pt-2 relative mx-auto text-gray-600">
      <input
        class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
        type="text"
        v-model="message"
        placeholder="Type your message"
      />
      <button type="submit" class="bg-blue-200 px-3 ml-2 rounded">Send</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ConversationInput",
  data: () => ({ message: "" }),
  methods: {
    ...mapActions("chat", ["sendMessage"]),
    send() {
      if (!this.message) {
        return;
      }

      this.sendMessage(this.message);
      this.message = "";
    },
  },
};
</script>

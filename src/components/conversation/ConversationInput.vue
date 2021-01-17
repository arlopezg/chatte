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
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "ConversationInput",
  data: () => ({ message: "" }),
  computed: {
    ...mapState("chat", ["activeChat", "drafts"]),
  },
  watch: {
    "activeChat.id": {
      handler(newId, previousId) {
        const hasDraft = this.hasDraft()(newId);

        if (hasDraft) {
          const draft = this.getDraft()(newId);
          this.message = draft;
          return;
        }

        const { message } = this;
        message && this.setDraft({ id: previousId, message });
        this.message = "";
      },
    },
  },
  methods: {
    ...mapActions("chat", ["sendMessage", "setDraft"]),
    ...mapGetters("chat", ["hasDraft", "getDraft"]),
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

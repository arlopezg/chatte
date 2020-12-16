<template>
  <div class="w-full bg-gray-100">
    <Conversation v-if="activeChat" />
    <ConversationEmpty v-else />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Conversation from './Conversation.vue';

import ConversationEmpty from "./ConversationEmpty.vue";

export default {
  name: "ConversationContainer",
  components: { ConversationEmpty, Conversation },
  computed: {
    ...mapState("chat", ["activeChat"]),
  },
};
</script>

<style></style>

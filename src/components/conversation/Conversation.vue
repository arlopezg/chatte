<template>
  <!-- Group header, body & footer -->
  <section class="chat flex flex-col justify-between">
    <ConversationHeader />
    <List
      :children="messages"
      :childComponent="bubble"
      bindToProp="message"
      class="chat--messages scrollable__y p-2"
    />
    <Loader v-if="state === 'loading'" />
    <footer>
      <ConversationInput />
    </footer>
  </section>
</template>

<script>
import List from "../generic/List.vue";
import Loader from "../generic/Loader.vue";
import ConversationInput from "./ConversationInput.vue";
import ConversationBubble from "./ConversationBubble";
import ConversationHeader from "./ConversationHeader.vue";
import { mapState } from "vuex";

export default {
  name: "Conversation",
  components: { List, Loader, ConversationInput, ConversationHeader },
  data: () => ({ bubble: ConversationBubble }),
  computed: {
    ...mapState("chat", ["messages", "state"]),
  },
};
</script>

<style lang="scss">
.chat {
  height: inherit;
  &--header {
    img {
      height: 75px;
      width: 75px;
      object-fit: cover;
    }
  }
  &--messages {
    height: calc(100vh - 270px);
  }
}
</style>

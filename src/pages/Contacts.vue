<template>
  <div>
    <Conversation v-if="activeChat" />
    <ContactList v-else class="scrollable__y h-screen w-full" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import ContactList from "@/components/contacts/ContactList.vue";
import Conversation from "@/components/conversation/Conversation.vue";

export default {
  components: { ContactList, Conversation },
  name: "Contacts",
  computed: {
    ...mapState("chat", ["activeChat"]),
  },
};
</script>

<style lang="scss">
.contacts {
  &--contacts {
    height: calc(100vh - 100px);
  }
}
</style>

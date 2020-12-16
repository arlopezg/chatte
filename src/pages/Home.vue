<template>
  <section class="home flex">
    <ContactList
      class="home--contacts scrollable__y hidden md:block md:w-1/4"
    />
    <ConversationContainer />
  </section>
</template>

<script>
import ContactList from "@/components/contacts/ContactList.vue";
import ConversationContainer from "../components/conversation/ConversationContainer.vue";

export default {
  components: { ContactList, ConversationContainer },
  name: "Home",
};
</script>

<style lang="scss">
.home {
  &--contacts {
    height: calc(100vh - 100px);
  }
}
</style>

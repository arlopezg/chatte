<template>
  <ContactList
    class="scrollable__y h-screen w-full"
  />
</template>

<script>
import ContactList from "@/components/contacts/ContactList.vue";

export default {
  components: { ContactList },
  name: "Contacts",
};
</script>

<style lang="scss">
.contacts {
  &--contacts {
    height: calc(100vh - 100px);
  }
}
</style>

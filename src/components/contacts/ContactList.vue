<template>
  <div class="bg-gray-100">
    <List :children="[1, 2, 3]" :child-component="contactCard" />
  </div>
</template>

<script>
import List from "@/components/generic/List.vue";
import ContactCard from "@/components/contacts/ContactCard.vue";

export default {
  components: { List },
  name: "ContactList",
  data: () => ({
    contactCard: ContactCard,
  }),
};
</script>

<style></style>

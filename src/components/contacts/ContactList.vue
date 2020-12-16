<template>
  <div class="bg-gray-300">
    <SearchBar class="px-3" @input="filterContactsByName" />

    <List
      :children="filteredContacts()"
      :child-component="contactCard"
      class="p-3"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

import List from "@/components/generic/List.vue";
import ContactCard from "@/components/contacts/ContactCard.vue";
import SearchBar from "../generic/SearchBar.vue";

export default {
  components: { List, SearchBar },
  name: "ContactList",
  data: () => ({
    contactCard: ContactCard,
  }),
  mounted() {
    this.fetchAllContacts();
  },
  computed: {
    ...mapState("contacts", ["contacts", "filters"]),
  },
  methods: {
    ...mapGetters("contacts", ["filteredContacts"]),
    ...mapActions("contacts", ["fetchAllContacts", "setContactFilters"]),
    filterContactsByName(name = "") {
      this.filters.name = name;
      this.setContactFilters(this.filters);
    },
  },
};
</script>

<style></style>

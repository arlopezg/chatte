<template>
  <div class="bg-gray-200">
    <SearchBar
      class="px-3"
      placeholder="Search a contact"
      @input="filterContactsByName"
    />

    <p
      v-show="!filteredContacts().length"
      class="text-center text-gray-500 m-3"
    >
      No contacts found
    </p>
    <List
      v-show="filteredContacts().length"
      bind-to-prop="contact"
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

import { contactCollection } from "@/plugins/firebase";

import mutation from "./mutation";

export default {
  namespaced: true,
  state: () => ({
    contacts: [],
    filters: { name: "" },
  }),
  getters: {
    /**
     * @method getContactsByName
     * @description Retrieve currently fetched contacts by matching their name to a RegExp
     * @param {String} name Name to filter by
     * @returns Name-matching contact list
     */
    filteredContacts: (state) => {
      const { contacts = [], filters } = state;

      return contacts.filter((contact) => {
        const nameRegexp = new RegExp(filters.name, "ig");

        return contact.name.match(nameRegexp);
      });
    },
  },
  mutations: { mutation },
  actions: {
    async fetchAllContacts({ commit }) {
      const { docs } = await contactCollection.get();
      const contacts = docs.map((doc) => doc.data());
      commit("mutation", { prop: "contacts", value: contacts });
    },
    setContactFilters({ commit }, filters = {}) {
      commit("mutation", { prop: "filters", value: filters });
    }
  },
};

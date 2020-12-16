import mutation from "./mutation";

export default {
  namespaced: true,
  state: () => ({
    activeChat: null,
    messages: [],
  }),
  getters: {
    /**
     * @method filteredContacts
     * @description Apply filters to current fetched contacts
     */
    filteredContacts: ({ filters, contacts }) => {
      return contacts.filter((contact) => {
        const nameRegexp = new RegExp(filters.name, "ig");

        return contact.name.match(nameRegexp);
      });
    },
  },
  mutations: { mutation },
  actions: {
    openChatWithContact({ commit }, contact = {}) {
      commit("mutation", { prop: "activeChat", value: contact });
    },
    sendMessage({ commit, state }, message = "") {
      const { messages } = state;
      const messageData = {
        timestamp: new Date().getTime(),
        message,
        fromMe: true,
      };
      const newMessages = [...messages, messageData];

      commit("mutation", { prop: "messages", value: newMessages });
    },
  },
};

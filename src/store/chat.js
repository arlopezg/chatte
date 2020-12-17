import { setPageTitle } from "@/utils";
import { messageCollection } from "@/plugins/firebase";

import mutation from "./mutation";

export default {
  namespaced: true,
  state: () => ({
    activeChat: null,
    messages: [],
    state: "idle",
    drafts: {},
  }),
  getters: {
    hasDraft(state) {
      return (contactId) => !!state.drafts[contactId];
    },
    getDraft(state) {
      return (contactId) => state.drafts[contactId];
    },
  },
  mutations: { mutation },
  actions: {
    openChatWithContact({ commit, dispatch }, contact = {}) {
      commit("mutation", { prop: "messages", value: [] });
      commit("mutation", { prop: "activeChat", value: contact });
      if (contact) {
        dispatch("fetchPreviousMessages", contact.id);
        setPageTitle(contact.name);
      }
    },
    sendMessage({ commit, state }, message = "") {
      const { messages, activeChat } = state;
      const messageData = {
        timestamp: new Date().getTime(),
        message,
        fromMe: true,
        threadId: activeChat.id,
      };
      const newMessages = [...messages, messageData];

      commit("mutation", { prop: "messages", value: newMessages });
      messageCollection.doc().set(messageData);
    },
    async fetchPreviousMessages({ commit }, threadId) {
      commit("mutation", { prop: "state", value: "loading" });
      const { docs } = await messageCollection
        .orderBy("timestamp")
        .where("threadId", "==", threadId)
        .get();
      const messages = docs.map((doc) => doc.data());
      commit("mutation", { prop: "state", value: "idle" });
      commit("mutation", { prop: "messages", value: messages });
    },
    setDraft({ commit, state }, { id, message }) {
      const { drafts: newDrafts } = state;
      newDrafts[id] = message;
      commit("mutation", { prop: "drafts", value: newDrafts });
    },
  },
};

import Vue from "vue";
import Vuex from "vuex";

import chat from "./chat";
import contacts from "./contacts";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    chat,
    contacts,
  },
});

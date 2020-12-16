import Vue from "vue";
import VueRouter from "vue-router";

// Layouts
import DefaultLayout from "./layouts/DefaultLayout.vue";

// Pages
import HomeView from "./pages/Home.vue";
import ContactsView from "./pages/Contacts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: { layout: DefaultLayout },
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: ContactsView,
    meta: { layout: DefaultLayout },
  },
];

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

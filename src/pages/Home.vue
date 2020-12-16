<template>
  <section class="home">
    <ContactList class="home--contacts scrollable__y" />
  </section>
</template>

<script>
import ContactList from "@/components/contacts/ContactList.vue";

export default {
  components: { ContactList },
  name: "Home",
};
</script>

<style lang="scss">
.home {
  &--contacts {
    width: 100%;
    height: 100vh;
    @screen md {
      max-width: 35%;
    }
  }
}
</style>

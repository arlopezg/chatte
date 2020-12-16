<template>
  <div
    :title="contact.name"
    class="contact flex items-center cursor-pointer"
    @click="openChatWithContact(contact)"
  >
    <figure class="flex items-center">
      <img
        :src="contact.picture"
        :alt="contact.name"
        class="contact--avatar rounded-full bg-blue-300 mx-auto md:mr-3"
      />
      <figcaption class="contact--name">
        <span>{{ contact.name }}</span>
        <span class="block text-gray-500 text-xs">{{ contact.status }}</span>
      </figcaption>
    </figure>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ContactCard",
  props: {
    contact: { type: Object, required: true },
  },
  methods: {
    ...mapActions("chat", ["openChatWithContact"]),
  },
};
</script>

<style lang="scss">
.contact {
  height: 80px;
  &--avatar {
    height: 55px;
    width: 55px;
    object-fit: cover;
  }
}
</style>

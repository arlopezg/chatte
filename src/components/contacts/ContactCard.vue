<template>
  <div :title="name" class="contact flex items-center cursor-pointer">
    <figure class="flex items-center">
      <img
        :src="picture"
        :alt="name"
        class="contact--avatar rounded-full bg-blue-300 mx-auto md:mr-3"
      />
      <figcaption class="contact--name">
        <span>{{ name }}</span>
        <span class="block text-gray-500 text-xs">{{ status }}</span>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: "ContactCard",
  props: {
    name: { type: String, default: "" },
    picture: { type: String, default: "" },
    status: { type: String, default: "" },
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

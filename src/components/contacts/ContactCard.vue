<template>
  <div class="contact flex items-center">
    <figure class="flex items-center">
      <!-- <img src="" alt=""> -->
      <span class="contact--avatar bg-gray-200 rounded-full inline-block m-2" />
      <figcaption class="contact--name">Nombre del contacto</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: "ContactCard",
};
</script>

<style lang="scss">
.contact {
  height: 80px;
  &--avatar {
    height: 45px;
    width: 45px;
  }
}
</style>

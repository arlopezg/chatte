<template>
  <ul class="list list-style-none">
    <li v-for="(item, index) in children" :key="index">
      <component v-bind:[bindToProp]="item" :is="childComponent" />
    </li>
  </ul>
</template>

<script>
const defaultListOptions = {
  direction: "vertical",
  style: "none",
};

export default {
  props: {
    bindToProp: { type: String, required: true },
    childComponent: { required: true },
    children: { type: Array, default: () => [] },
    options: {
      type: Object,
      default: () => defaultListOptions,
    },
  },
};
</script>

<style></style>

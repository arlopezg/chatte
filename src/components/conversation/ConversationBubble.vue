<template>
  <div
    class="flex justify-between bg-gray-200 w-3/4 md:w-1/3 min-h-5 mb-3 rounded py-3 px-5"
    :class="{
      'ml-auto mr-0 bg-blue-100': message.fromMe,
    }"
  >
    <span class="break-words pr-5">{{ message.message }}</span>
    <span class="text-gray-400">{{ timestamp }}</span>
  </div>
</template>

<script>
import { formatDate } from "@/utils";

export default {
  name: "ConversationBubble",
  props: {
    message: { type: Object, required: true },
  },
  computed: {
    timestamp() {
      return formatDate(this.message.timestamp, "hh:mm");
    },
  },
};
</script>

<style></style>

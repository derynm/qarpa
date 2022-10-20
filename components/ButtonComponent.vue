<template>
  <button class="button-global" @click="$emit('clicked')">
    {{ textFill }}
  </button>
</template>

<script>
export default {
  props: {
    textFill: { type: String, default: '' }
  },
  emits: ['clicked']
}
</script>

<style lang="postcss" scoped>
.button-global {
  background-color: #b1b1b1;
  @apply px-10 py-3 rounded-lg font-bold text-white;
  &:hover {
    @apply bg-gray-800;
  }
  &:disabled {
    @apply bg-gray-400;
  }
}
</style>

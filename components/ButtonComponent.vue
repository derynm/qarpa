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
  @apply px-10 py-3 rounded-lg bg-primary font-bold text-white;
  &:hover {
    @apply bg-secondary;
  }
  &:disabled {
    @apply bg-disabled;
  }
}
</style>

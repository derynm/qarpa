<template>
  <button
    :class="outlined ? 'button-outlined' : 'button-global'"
    @click="$emit('clicked')"
  >
    {{ textFill }}
  </button>
</template>

<script>
export default {
  props: {
    textFill: { type: String, default: '' },
    outlined: { type: Boolean, default: false }
  },
  emits: ['clicked']
}
</script>

<style lang="postcss" scoped>
.button-global {
  @apply rounded-lg bg-primary font-bold text-white;
  &:hover {
    @apply bg-secondary;
  }
  &:disabled {
    @apply bg-disabled;
  }
}
.button-outlined {
  @apply rounded-lg bg-none font-bold text-primary border-2 border-primary;
  &:hover {
    @apply border-secondary;
  }
  &:disabled {
    @apply bg-disabled;
  }
}
</style>

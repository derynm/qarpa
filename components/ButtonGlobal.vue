<template>
  <button
    :class="`${padding} ${color} ${textColor} ${
      outlined ? 'button-outlined' : ''
    } rounded-lg disabled:bg-disabled font-bold`"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: { type: String, default: '' },
    color: { type: String, default: '' },
    textColor: { type: String, default: 'text-white' },
    padding: { type: String, default: '' },
    outlined: { type: Boolean, default: false }
  },
  emits: ['click']
}
</script>

<style lang="postcss" scoped>
.button-outlined {
  @apply bg-none font-bold text-primary border-2 border-primary;
  &:hover {
    @apply border-secondary;
  }
  &:disabled {
    @apply bg-disabled;
  }
}
</style>

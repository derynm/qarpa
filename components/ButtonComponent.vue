<template>
  <button class="button-global">
    {{ textFill }}
  </button>
</template>

<script>
export default {
  props: {
    textFill: { type: String, default: '' }
  }
}
</script>

<style lang="postcss" scoped>
.button-global {
  @apply bg-gray-700 px-10 py-3 rounded-lg font-bold text-white;
  &:hover {
    @apply bg-gray-800;
  }
  &:disabled {
    @apply bg-gray-400
  }
}
</style>

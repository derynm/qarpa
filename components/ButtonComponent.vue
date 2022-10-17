<template>
  <button class="button-global" @click="customFunction">
    {{ textFill }}
  </button>
</template>

<script>
export default {
  props: {
    textFill: { type: String, default: '' },
    customEmit: { type: String, default: '' }
  },
  methods: {
    customFunction () {
      this.$emit(this.customEmit)
    }
  }
}
</script>

<style lang="postcss" scoped>
.button-global {
  background-color: #2e60af;
  @apply px-10 py-3 rounded-lg font-bold text-white;
  &:hover {
    @apply bg-gray-800;
  }
  &:disabled {
    @apply bg-gray-400;
  }
}
</style>

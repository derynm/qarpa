<template>
  <fieldset
    class="my-2 flex rounded-md border-2 border-solid border-black p-1 bg-white"
  >
    <legend class="ml-6 px-2 text-lg">
      {{ label }}
    </legend>
    <IconsDiscountIcon />
    <input
      type="number"
      :placeholder="placeholder"
      :value="value"
      class="w-full px-3 pb-2"
      required
      min="0"
      max="100"
      @input="updateValue($event.target.value)"
    >
  </fieldset>
</template>

<script>
export default {
  props: {
    label: { type: String, default: null },
    placeholder: { type: String, default: null },
    value: { type: String, default: '' }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
input {
  background-color: rgba(255, 255, 255, 0);
}
</style>

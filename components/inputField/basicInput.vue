<template>
  <fieldset
    class="my-2 rounded-md border-2 border-solid border-black p-1 bg-white"
  >
    <legend class="ml-6 px-2 text-lg">
      {{ label }}
    </legend>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      class="w-full rounded-xl px-3 pb-2"
      :min="min !== null ? min : ''"
      @input="updateValue($event.target.value)"
    >
  </fieldset>
</template>

<script>
export default {
  props: {
    label: { type: String, default: null },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: null },
    value: null,
    min: { type: Number, default: null }
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

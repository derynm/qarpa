<template>
  <fieldset
    class="my-2 rounded-md border-2 border-solid border-black p-1 bg-white"
  >
    <legend class="ml-6 px-2 text-lg">
      {{ label }}
    </legend>
    <textarea
      :placeholder="placeholder"
      :value="value"
      class="w-full rounded-xl px-3 pb-2"
      :rows="row"
      @input="updateValue($event.target.value)"
    />
  </fieldset>
</template>

<script>
export default {
  props: {
    label: { type: String, default: null },
    row: { type: Number, default: 3 },
    placeholder: { type: String, default: null },
    value: null
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
textarea {
  outline: none;
}
</style>

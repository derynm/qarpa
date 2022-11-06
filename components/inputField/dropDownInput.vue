<template>
  <fieldset
    class="my-2 rounded-md border-2 border-solid border-black p-1 bg-white"
  >
    <legend class="ml-6 px-2 text-lg">
      {{ label }}
    </legend>
    <select class="w-full rounded-xl px-3 pb-2">
      <option selected hidden>
        {{ placeHolder }}
      </option>
      <option v-for="(value, index) in item" :key="index" :value="value.value">
        {{ value.value }}
      </option>
    </select>
  </fieldset>
</template>

<script>
export default {
  props: {
    item: {
      type: Array,
      default: () => []
    },
    placeHolder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
select:focus {
  outline: none;
}
select {
  background-color: rgba(255, 255, 255, 0);
}
</style>

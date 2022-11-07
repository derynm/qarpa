<template>
  <select class="p-3 shadow-md rounded-md border-2 dropdown-style">
    <option selected hidden>
      {{ placeHolder }}
    </option>
    <option v-for="(value, index) in item" :key="index" :value="value.value">
      {{ value.value }}
    </option>
  </select>
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
    }
  }
}
</script>

<style lang="postcss" scoped></style>

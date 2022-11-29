<template>
  <select
    class="p-3 shadow-md rounded-md border-2 dropdown-style"
    @input="updateValue($event.target.value)"
  >
    <option v-if="placeHolder" selected hidden>
      {{ placeHolder }}
    </option>
    <option v-if="showAll" value="Semua">
      Semua
    </option>
    <option
      v-for="(value, index) in item"
      :key="index"
      :value="useId ? value.id : value.value"
    >
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
    useId: {
      type: Boolean,
      default: false
    },
    placeHolder: {
      type: String,
      default: null
    },
    showAll: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="postcss" scoped></style>

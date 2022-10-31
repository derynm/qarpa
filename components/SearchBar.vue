<template>
  <div
    class="search-bar flex items-center shadow-md py-3 px-8 rounded-md justify-between"
  >
    <input class="p-1 w-full" type="text" :placeholder="placeholder">
    <IconsSearchIcon />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: { type: String, default: '...' }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
</style>

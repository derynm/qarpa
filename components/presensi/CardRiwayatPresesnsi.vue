<template>
  <div class="flex flex-col rounded-md border shadow-md round py-3 px-3 mb-3">
    <p class="mb-3">{{ date }}</p>
    <div class="flex justify-between">
      <p>Waktu Kerja</p>
      <p>{{ time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: { type: String, default: '' },
    time: { type: String, default: '' }
  }
}
</script>

<style></style>

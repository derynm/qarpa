<template>
  <div class="flex flex-col border rounded-lg shadow-md p-3 mb-3">
    <div class="flex w-full justify-between mb-3">
      <h2 class="text-lg font-bold">
        {{ destinasi }}
      </h2>

      <p>{{ tipe }}</p>
    </div>
    <div class="mb-2">
      <p>
        Dikirim : <span class="font-semibold text-warm">{{ date }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    destinasi: { type: String, default: null },
    tipe: { type: String, default: null },
    date: { type: String, default: null }
  },
  emits: ['done']
}
</script>

<style></style>

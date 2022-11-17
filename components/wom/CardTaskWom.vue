<template>
  <div
    class="flex flex-col justify-between bg-white shadow-md rounded-md border-2 p-3 mb-2"
  >
    <div class="flex justify-between mb-3">
      <p class="font-semibold">
        {{ item.name }}
      </p>
      <p class="text-xs flex items-center">
        {{ item.end_at + ' ( ' + item.number_of_days + ' hari )' }}
      </p>
    </div>
    <div class="flex justify-between items-center">
      <p>{{ item.task }}</p>
      <wom-status-bar :status="item.status" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, default: () => ({}) }
  }
}
</script>

<style></style>

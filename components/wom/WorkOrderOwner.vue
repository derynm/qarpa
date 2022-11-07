<template>
  <div class="px-3">
    <drop-down :item="dataSort" class="w-full"/>
    <div class="py-3">
      <wom-card-task-wom />
    </div>
    <button-global class="absolute bottom-3 right-3" text="+ Tugas Baru" color="bg-primary" padding="p-2"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataSort: [
        { id: 1, value: 'Semua' },
        { id: 2, value: 'Selesai' },
        { id: 3, value: 'Proses' }
      ]
    }
  }
}
</script>

<style></style>

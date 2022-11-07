<template>
  <div class="flex flex-col px-3">
    <h3 class="font-semibold mb-6">
      Tugas Baru
    </h3>
    <div class="flex flex-col shadow-md rounded-md border-2 p-3">
      <div class="flex justify-between">
        <h3 class="font-semibold">
          Harry Styles
        </h3>
        <h3 class="font-semibold text-warm">
          Lihat Detail
        </h3>
      </div>
      <div class="flex justify-between my-3">
        <p class="text-sm">
          Melakukan Penjualan di pos
        </p>
        <p class="text-xs">
          10 Oktober 2022 ( 3 hari )
        </p>
      </div>
      <button-global
        text="Tandai Selesai"
        color="bg-warm"
        padding="p-3"
        class="max-w-[240px] mx-auto"
      />
    </div>
    <h3 class="font-semibold my-6">
      Tugas Selesai
    </h3>
    <div>
      <wom-card-task-wom />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

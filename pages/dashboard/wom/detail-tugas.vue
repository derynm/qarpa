<template>
  <div>
    <div class="flex justify-center">
      <img src="@/assets/img/Filing system-rafiki 1.png" alt="detail-image">
    </div>
    <div class="rounded-3xl border-t-2 px-3">
      <h3 class="font-semibold text-lg text-center my-4">
        Detail Tugas
      </h3>

      <div class="flex flex-col">
        <div class="mb-3">
          <h4 class="font-semibold">
            Tugas
          </h4>
          <p>Melakukan Penjualan di POS</p>
        </div>
        <div class="mb-3">
          <h4 class="font-semibold">
            Deskripsi
          </h4>
          <p>
            Silahkan buka toko hari ini. Kamu menangani transaksi penjualan di
            POS Cabang 1. Saya ke Toko nanti sore.
          </p>
        </div>
        <div class="mb-3">
          <h4 class="font-semibold">
            Durasi Mulai
          </h4>
          <p>20 Oktober 2022</p>
        </div>
        <div class="mb-3">
          <h4 class="font-semibold">
            Durasi Berakhir
          </h4>
          <p>22 Oktober 2022</p>
        </div>
      </div>
      <div class="flex">
        <button-global
          color="bg-warm"
          padding="py-1 px-2"
          text="Tandai Selesai"
          class="mx-auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'navigation'
}
</script>

<style></style>

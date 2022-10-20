<template>
  <div class="bg-white flex justify-between shadow-md my-5 p-3 flex-wrap">
    <div>
      <h3 class="font-semibold text-xl">
        Ahmad Zakkan Ativana
      </h3>
      <p>Nama Barang : Cappucino</p>
      <p>Kategori Barang : Bahan Baku</p>
      <p>Status Pengiriman : Sedang Mengirim</p>
      <p>Tanggal Pengiriman : 10 / 19 / 2022</p>
      <p>Alamat Pengiriman : Jl.sukun 62, RT02/RW14, Yogyakartaa</p>
    </div>
    <div class="flex items-center">
      <ButtonComponent text-fill="Tandai Diterima" />
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../ButtonComponent.vue'
export default {
  components: { ButtonComponent }
}
</script>

<style></style>

<template>
  <div class="container mx-auto flex h-screen items-center">
    <div class="mx-auto max-w-lg bg-white shadow w-full text-center p-5">
      <h1 class="text-3xl font-bold mb-8">
        Transaksi Berhasil
      </h1>
      <SuccessShippingCostumer class="h-72 mx-auto" />
      <div class="flex justify-between my-4 font-bold">
        <p>Jenis Pembayaran</p>
        <p>Tunai</p>
      </div>
      <div class="flex justify-between my-4 font-bold">
        <p>Total Tagihan</p>
        <p>Rp. 101.000</p>
      </div>
      <div class="flex justify-between my-4 font-bold">
        <p>Diterima</p>
        <p>Rp. 150.000</p>
      </div>
      <div class="flex justify-between my-4 font-bold">
        <p>Kembalian</p>
        <p>Rp. 49.000</p>
      </div>
      <button-component class="w-full" text-fill="Selesai" />
    </div>
  </div>
</template>

<script>
import SuccessShippingCostumer from '~/components/icons/icons-shipping/successShippingCostumer.vue'

export default {
  components: { SuccessShippingCostumer }
}
</script>

<style></style>

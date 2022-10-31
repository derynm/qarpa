<template>
  <div class="container flex flex-col gap-10 px-4">
    <div class="header text-center">
      <p class="title text-2xl font-semibold pt-10">
        Pembayaran Berhasil
      </p>
      <div class="icon flex flex-col gap-2 items-center">
        <IconsPosReport />
        <p>05 Okt 2022, 17:56</p>
      </div>
    </div>
    <div class="content">
      <div class="title text-center py-2">
        <p>Rincian Pembayaran</p>
      </div>
      <div class="detail flex justify-between">
        <div class="left flex flex-col gap-1">
          <p>Jenis Pembayaran</p>
          <p>Total Tagihan</p>
          <p>Diterima</p>
          <p>Total Tagihan</p>
        </div>
        <div class="right flex flex-col gap-1 font-semibold text-right">
          <p>Tunai</p>
          <p>Rp.101.000</p>
          <p>Rp.150.000</p>
          <p>Rp.49.000</p>
        </div>
      </div>
    </div>
    <div class="btn pt-8 flex flex-col gap-4">
      <ButtonComponent class="w-full p-2" text-fill="Transaksi Baru" />
      <ButtonComponent class="w-full p-2" text-fill="Kirim Receipt" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard'
}
</script>

<style></style>

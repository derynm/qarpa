<template>
  <div class="container w-[70%] md:w-[50%] m-auto">
    <p class="title text-3xl font-semibold text-center pt-10">
      Transaksi Berhasil
    </p>
    <div class="icon flex justify-center pt-8 pb-16">
      <IconsSuccessIcon />
    </div>
    <div class="detail">
      <div class="jenis-pembayaran flex justify-between pt-1">
        <p>Jenis Pembayaran</p>
        <p>Tunai</p>
      </div>
      <div class="total-tagihan flex justify-between pt-1">
        <p>Total Tagihan</p>
        <p>Rp.101.000</p>
      </div>
      <div class="pay flex justify-between pt-1">
        <p>Diterima</p>
        <p>Rp.150.000</p>
      </div>
      <div class="change flex justify-between pt-1">
        <p>Total Tagihan</p>
        <p>Rp.49.000</p>
      </div>
    </div>
    <div class="btn pt-8">
      <ButtonComponent class="w-full" text-fill="Selesai" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

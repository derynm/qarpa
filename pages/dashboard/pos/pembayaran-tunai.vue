<template>
  <div class="container w-[70%] md:w-[40%] m-auto text-center">
    <p
      class="text-center text-xl md:text-3xl font-semibold pt-10 pb-10 md:pb-44"
    >
      Pembayaran
    </p>
    <div class="card-total border py-4">
      <p>Total Pembayaran</p>
      <p>Rp.101.000</p>
    </div>
    <div class="card-input py-4">
      <p class="text-left font-semibold pb-4">
        Input Uang Diterima
      </p>
      <input
        class="w-full p-2 border-black border-2"
        type="text"
        placeholder="Tuliskan jumlah uang yang diterima"
      >
    </div>
    <div class="btn">
      <ButtonComponent class="w-full" text-fill="Validasi Pembayaran" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
input:focus {
  outline: none;
}
</style>

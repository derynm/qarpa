<template>
  <div class="container w-[70%] md:w-[40%] m-auto">
    <p
      class="text-center text-xl md:text-3xl font-semibold pt-10 pb-10 md:pb-44"
    >
      Pembayaran Transfer
    </p>
    <div class="container">
      <div class="title flex items-center px-3 py-5 shadow-md mb-4">
        <IconsBankIcon />
        <p class="font-bold text-xl pl-2">
          List Rekening
        </p>
      </div>
      <div class="content">
        <PosCardBank />
        <PosCardBank />
      </div>
    </div>
    <div class="btn">
      <ButtonComponent class="w-full mt-4" text-fill="Konfirmasi Pembayaran" />
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

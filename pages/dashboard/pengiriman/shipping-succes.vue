<template>
  <div class="max-w-2xl mx-auto w-full bg-white h-screen px-3 flex flex-col justify-center">
    <div class="flex flex-col text-center">
      <div class="mx-auto">
        <h2 class="font-semibold text-xl">
          Pengiriman Berhasil
        </h2>
        <img
          src="@/assets/img/Confirmed-cuate 1.png"
          class="max-w-[196px]"
          alt="confirm-image mt-3"
        >
        <p>05 Okt 2022, 17:56</p>
        <h3 class="font-semibold text-lg">
          Rincian Pengiriman
        </h3>
      </div>
      <div class="mt-3 mb-6">
        <div class="flex justify-between">
          <p>Nama Cabang</p>
          <p class="font-semibold">
            Cabang 1
          </p>
        </div>
        <div class="flex justify-between">
          <p>Kontak</p>
          <p class="font-semibold">
            08239976338
          </p>
        </div>
        <div class="flex justify-between">
          <p>Total Produk</p>
          <p class="font-semibold">
            200
          </p>
        </div>
        <div class="flex justify-between">
          <p>Alamat</p>
          <p class="font-semibold">
            Jl. Dr Wahidin Sudirohuso Husodo
          </p>
        </div>
      </div>
      <button-global text="Pengiriman Baru" padding="py-3" color="bg-primary" class="mb-3"/>
      <button-global text="Lihat Pengiriman" :outlined="true" padding="py-3" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

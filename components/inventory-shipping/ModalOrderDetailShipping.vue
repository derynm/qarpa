<template>
  <div class="modal-overlay">
    <div class="modal-body">
      <BackIcon @click="$emit('closeModal')" />
      <h2 class="font-bold text-2xl">
        Order Details
      </h2>
      <div class="bg-white rounded shadow p-3">
        <div class="flex">
          <LocationPoint />
          <h3 class="text-xl font-semibold">
            Alamat Cabang
          </h3>
        </div>
        <div class="grid grid-cols-2 my-4">
          <div>
            <div class="flex items-center mb-7">
              <p>Cabang 1</p>
              <button class="border-2 py-1 px-2 rounded-md">
                Ubah
              </button>
            </div>
            <p class="text-left text-xs">
              Kontak : 0878 -8758-6851
            </p>
          </div>
          <div>
            <p class="text-justify text-xs">
              Kos Al Kindi Pagar putih dekat laundry, Jalan Sukun No.62,
              RT.2/RW.14, Condongcatur, Depok (dekat laundry), KAB. SLEMAN -
              DEPOK, DI YOGYAKARTA, ID 55283
            </p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded shadow p-3 my-2">
        <h3 class="text-xl font-semibold">
          Produk
        </h3>
        <div class="grid grid-cols-12">
          <p class="col-span-7 text-left">
            Cappucino
          </p>
          <div
            class="flex col-span-5 md:col-span-3 justify-around items-center"
          >
            <button
              class="bg-primary w-[36px] h-[36px] rounded text-white font-extrabold"
            >
              -
            </button>
            <p>2</p>
            <button
              class="bg-primary w-[36px] h-[36px] rounded text-white font-extrabold"
            >
              +
            </button>
          </div>
          <p class="col-span-2">
            Rp.160006
          </p>
        </div>
      </div>
      <div class="bg-white rounded shadow p-3 mb-2">
        <hr class="border-dashed border-t-2 border-black">
        <div class="flex justify-between font-semibold my-9">
          <p>Subtotal</p>
          <p>Rp.101.000</p>
        </div>
        <hr class="border-t-2 border-black">
        <div class="flex justify-between font-bold my-4 text-xl">
          <p>Total</p>
          <p>Rp.101.000</p>
        </div>
      </div>
      <button-component :text-fill="'Bayar Sekarang'" />
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../ButtonComponent.vue'
import BackIcon from '../icons/backIcon.vue'
import LocationPoint from '../icons/location-point.vue'
export default {
  components: { BackIcon, LocationPoint, ButtonComponent },
  emits: ['closeModal']
}
</script>

<style lang="postcss" scoped>
.modal-overlay {
  background-color: #0000004e;
  @apply fixed flex justify-center top-0 bottom-0 left-0 right-0 items-center;
}
.modal-body {
  @apply flex flex-col justify-around text-center bg-slate-50 shadow rounded-md max-w-2xl w-full p-6;
}
</style>

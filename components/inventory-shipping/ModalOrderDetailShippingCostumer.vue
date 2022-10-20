<template>
  <div class="modal-overlay" @click="$emit('closeModal')">
    <div class="modal-body" @click.stop="">
      <div class="w-7 cursor-pointer" @click="$emit('closeModal')">
        <BackIcon />
      </div>
      <h2 class="font-bold text-2xl">
        Order Details Customer - COD
      </h2>
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
        <div class="mb-3">
          <p class="text-left">Discount</p>
          <div class="my-2 rounded-xl border-2 border-solid border-black p-1">
            <input
              v-model="DiscountOrder"
              type="text"
              class="w-full rounded-xl p-2"
              placeholder="Discount"
            >
          </div>
        </div>
        <hr class="border-dashed border-t-2 border-black">
        <div class="flex justify-between font-semibold my-9">
          <p>Subtotal</p>
          <p>Rp.101.000</p>
        </div>
        <div class="flex justify-between font-semibold my-9">
          <p>Discount</p>
          <p>-</p>
        </div>
        <hr class="border-t-2 border-black">
        <div class="flex justify-between font-bold my-4 text-xl">
          <p>Total</p>
          <p>Rp.101.000</p>
        </div>
      </div>
      <nuxt-link to="/dashboard/shipping/shipping-costumer-success">
        <button-component :text-fill="'Bayar Sekarang'" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../ButtonComponent.vue'
import BackIcon from '../icons/backIcon.vue'
export default {
  components: { BackIcon, ButtonComponent },
  emits: ['closeModal'],
  data () {
    return {
      DiscountOrder: null
    }
  }
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

<template>
  <div class="flex flex-col px-7">
    <nuxt-link to="/dashboard/shipping/shipping-branch">
      <button
        class="shadow-md bg-white py-14 my-2 w-full hover:bg-primary hover:text-white rounded-sm text-2xl md:text-4xl font- bold"
      >
        Pengiriman Barang Ke Cabang
      </button>
    </nuxt-link>
    <nuxt-link to="/dashboard/shipping/shipping-costumer">
      <button
        class="shadow-md bg-white py-14 my-2 w-full hover:bg-primary hover:text-white rounded-sm text-2xl md:text-4xl font- bold"
      >
        Pengiriman Barang Ke Costumer
      </button>
    </nuxt-link>
    <nuxt-link to="/dashboard/shipping/shipping-supply">
      <button
        class="shadow-md bg-white py-14 my-2 w-full hover:bg-primary hover:text-white rounded-sm text-2xl md:text-4xl font- bold"
      >
        Penerimaan Barang dari Supplier
      </button>
    </nuxt-link>
    <nuxt-link to="/dashboard/shipping/shipping-status">
      <button
        class="shadow-md bg-white py-14 my-2 w-full hover:bg-primary hover:text-white rounded-sm text-2xl md:text-4xl font- bold"
      >
        Lihat status pengiriman barang
      </button>
    </nuxt-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'dashboard-pos',
  created () {
    this.setPageTitle('Inventory Shipping')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style></style>

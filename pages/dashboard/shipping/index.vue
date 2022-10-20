<template>
  <div class="flex flex-col px-7">
    <button
      class="shadow-md bg-white py-14 my-2 w-full hover:bg-primary hover:text-white rounded-sm text-2xl md:text-4xl font- bold"
    >
      Pengiriman Barang Ke Cabang
    </button>
    <button
      class="shadow-md bg-white py-14 my-2 w-full hover:bg-primary hover:text-white rounded-sm text-2xl md:text-4xl font- bold"
    >
      Pengiriman Barang Ke Costumer
    </button>
    <button
      class="shadow-md bg-white py-14 my-2 w-full hover:bg-primary hover:text-white rounded-sm text-2xl md:text-4xl font- bold"
    >
      Penerimaan Barang dari Supplier
    </button>
    <button
      class="shadow-md bg-white py-14 my-2 w-full hover:bg-primary hover:text-white rounded-sm text-2xl md:text-4xl font- bold"
    >
      Lihat status pengiriman barang
    </button>
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

<template>
  <div class="px-3">
    <SearchBar placeholder="Cari Produk" class="my-5" />
    <drop-down v-model="sort" :item="dataSort" class="w-full" />
    <h3 class="font-semibold text-lg my-4">
      Daftar Produk
    </h3>
    <div class="flex flex-col">
      <div class="min-h-[40vh]">
        <card-product
          v-for="(value, index) in stokBarang"
          :key="index"
          :item="value"
        />
      </div>
      <div class="flex flex-col mb-3">
        <hr class="mb-3">
        <div class="flex w-ful justify-between mb-6">
          <p class="font-semibold">
            Total Produk :
          </p>
          <p>40</p>
        </div>
        <button-global text="Detail Order" color="bg-primary" padding="py-3" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  data () {
    return {}
  },
  async fetch ({ store }) {
    await store.dispatch('stok/getStokBarang')
  },
  computed: {
    ...mapState('stok', ['stokBarang'])
  }
}
</script>

<style></style>
x

<template>
  <div class="container mx-auto px-4 md:px-8 lg:px-12">
    <div class="container-inner shadow-md p-4">
      <div
        class="total-stok text-center shadow-md py-5 mb-4 flex flex-col gap-4"
      >
        <p class="font-semibold text-6xl">
          80
        </p>
        <p class="font-semibold text-xl">
          Total Stok Gudang
        </p>
      </div>
      <div class="kelola-stok">
        <div class="dropdown">
          <fieldset
            class="my-2 rounded-md border-2 border-solid border-black bg-white"
          >
            <select id="" class="w-full rounded-xl px-3 py-2" name="">
              <option value="">
                Semua
              </option>
              <option value="">
                Minuman
              </option>
              <option value="">
                Makanan
              </option>
            </select>
          </fieldset>
        </div>
        <div class="content">
          <div class="dynamic-component flex flex-col gap-5">
            <StokCardBarang />
            <StokCardBarang />
            <StokCardBarang />
          </div>
          <div class="btn flex justify-end my-4">
            <nuxt-link to="stok/tambah-produk">
              <ButtonComponent class="p-2" text-fill="+ Produk" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  created () {
    this.setPageTitle('Total Stok')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style>
select {
  outline: none;
}
</style>

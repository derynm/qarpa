<template>
  <div class="container mx-auto px-4 md:px-8 lg:px-12">
    <div class="container-inner shadow-md p-4">
      <div class="total-stok text-center shadow-md py-5 mb-4">
        <p class="font-semibold text-xl">
          Total Stok Barang Inventori
        </p>
        <p class="font-semibold text-2xl">
          570
        </p>
      </div>
      <div class="kelola-stok">
        <div class="title">
          <p class="font-semibold text-xl">
            Kelola Stok
          </p>
        </div>
        <div class="content">
          <div class="tab-btn flex justify-evenly my-5">
            <p>Stok Jualan</p>
            <p>Stok Suplai</p>
          </div>
          <div class="dynamic-component flex flex-col gap-3">
            <StokCardBarang />
            <StokCardBarang />
            <StokCardBarang />
          </div>
          <div class="btn flex justify-center my-4">
            <nuxt-link to="stok/tambah-produk">
              <ButtonComponent text-fill="+ Tambah Produk" />
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
  layout: 'dashboard-pos',
  created () {
    this.setPageTitle('Inventory Stok')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style></style>

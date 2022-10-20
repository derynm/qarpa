<template>
  <div class="container mx-auto px-4 md:px-8 lg:px-12 pb-8">
    <div class="title text-center text-2xl font-semibold mb-4">
      <p>Tambah Produk</p>
    </div>
    <div class="content">
      <div class="img flex flex-col items-center">
        <IconsPosIcon
          class="rounded-full border border-black w-[180px] h-[180px] my-4"
        />
        <button class="border p-2">
          Upload Gambar
        </button>
      </div>
      <div class="form">
        <form>
          <div class="nama">
            <label>Nama Produk</label>
            <input
              class="w-full border border-black rounded-md p-2 mb-4"
              type="text"
              placeholder="Masukkan Nama Produk..."
            >
          </div>
          <div class="harga">
            <label>Harga Jual</label>
            <input
              class="w-full border border-black rounded-md p-2 mb-4"
              type="text"
              placeholder="Tuliskan Harga..."
            >
          </div>
          <div class="stok">
            <label>Stok Produk</label>
            <input
              class="w-full border border-black rounded-md p-2 mb-4"
              type="text"
              placeholder="Tuliskan Stok..."
            >
          </div>
          <div class="jenis">
            <label>Jenis Stok</label>
            <select
              id=""
              name=""
              class="w-full border border-black rounded-md p-2 mb-4"
            >
              <option value="1">
                Jenis 1
              </option>
              <option value="2">
                Jenis 2
              </option>
            </select>
          </div>
          <div class="btn mt-2">
            <ButtonComponent class="w-full" text-fill="Simpan" />
          </div>
        </form>
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

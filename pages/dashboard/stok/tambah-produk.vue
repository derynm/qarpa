<template>
  <div class="container px-4">
    <div class="header-text px-6 my-4 flex flex-col items-center gap-2">
      <IconsPosIcon />
      <ButtonGlobal padding="p-2" text="upload gambar" color="bg-primary" />
    </div>
    <form
      class="flex flex-col justify-between min-h-[60vh]"
      @submit.prevent="handleSubmit"
    >
      <div class="input">
        <InputFieldBasicInput
          v-model="stokBarang.nama"
          label="Nama Produk"
          placeholder="..."
        />
        <InputFieldBasicInput
          v-model="stokBarang.harga"
          label="Harga"
          placeholder="..."
        />
        <InputFieldBasicInput
          v-model="stokBarang.stok"
          label="Stok"
          placeholder="..."
        />
        <div class="dropdown">
          <select
            id=""
            v-model="stokBarang.tipe"
            class="w-full rounded-md px-3 py-4 border-2 border-black"
            name=""
          >
            <option value="" selected>
              Pilih Kategori
            </option>
            <option value="minuman">
              Minuman
            </option>
            <option value="makanan">
              Makanan
            </option>
            <option value="berhala">
              Berhala
            </option>
          </select>
        </div>
      </div>
      <div class="btn">
        <ButtonGlobal
          class="w-full"
          padding="py-2"
          text="Simpan Data"
          color="bg-primary"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  data () {
    return {
      stokBarang: {
        nama: '',
        harga: '',
        stok: null,
        tipe: ''
      }
    }
  },
  created () {
    this.setPageTitle('Tambah Produk')
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    handleSubmit () {
      // console.log(this.stokBarang)
      this.$store
        .dispatch('stok/postNewStok', this.stokBarang)
        .then(this.$router.replace('/dashboard/stok'))
    }
  }
}
</script>

<style>
select {
  outline: none;
}
</style>

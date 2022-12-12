<template>
  <div class="container px-4">
    <div class="header-text px-6 my-4 flex flex-col items-center gap-2">
      <IconsPosIcon />
      <!-- <ButtonGlobal padding="p-2" text="upload gambar" color="bg-primary" /> -->
    </div>
    <form
      class="flex flex-col justify-between min-h-[60vh]"
      @submit.prevent="handleSubmit"
    >
      <div class="input">
        <InputFieldBasicInput
          v-model="stokBarang.nama"
          label="Nama Produk"
          placeholder="Barang"
        />
        <InputFieldBasicInput
          v-model="stokBarang.harga"
          type="number"
          label="Harga"
          placeholder="Harga"
        />
        <InputFieldBasicInput
          v-model="stokBarang.stok"
          type="number"
          label="Stok"
          placeholder="Stok"
        />
        <div class="dropdown">
          <select
            id=""
            v-model="stokBarang.tipe"
            class="w-full rounded-md px-3 py-4 border-2 border-black"
            name=""
          >
            <option :value="null" selected>
              Pilih Kategori
            </option>
            <option
              v-for="(item, index) in categories"
              :key="index"
              :value="item.id"
            >
              {{ item.value }}
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
import { mapMutations, mapState } from 'vuex'
export default {
  layout: 'navigation',
  data () {
    return {
      stokBarang: {
        nama: '',
        harga: null,
        stok: null,
        tipe: null,
        cabangId: parseInt(this.$route.query.cabang)
      }
    }
  },
  async fetch ({ store }) {
    await store.dispatch('dropdown/getCategoriesDropdown')
  },
  created () {
    this.setPageTitle('Tambah Produk')
  },
  computed: {
    ...mapState('dropdown', ['categories'])
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

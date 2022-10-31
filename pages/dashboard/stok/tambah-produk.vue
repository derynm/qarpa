<template>
  <div class="container px-4">
    <div class="header-text px-6 my-4 flex flex-col items-center gap-2">
      <IconsPosIcon />
      <ButtonComponent class="p-2" text-fill="upload gambar" />
    </div>
    <form class="flex flex-col justify-between min-h-[60vh]">
      <div class="input">
        <InputFieldBasicInput
          v-model="dataCustomer.nama"
          label="Nama Produk"
          placeholder="..."
        />
        <InputFieldBasicInput
          v-model="dataCustomer.harga"
          label="Harga"
          placeholder="..."
        />
        <InputFieldBasicInput
          v-model="dataCustomer.stok"
          label="Stok"
          placeholder="..."
        />
        <div class="dropdown">
          <fieldset
            class="my-2 rounded-md border-2 border-solid border-black bg-white"
          >
            <select id="" class="w-full rounded-xl px-4 py-3" name="">
              <option value="">
                Minuman
              </option>
              <option value="">
                Makanan
              </option>
            </select>
          </fieldset>
        </div>
      </div>
      <div class="btn">
        <ButtonComponent class="w-full py-2" text-fill="Simpan Data" />
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
      dataCustomer: {
        nama: '',
        harga: '',
        tipe: '',
        stok: null
      }
    }
  },
  created () {
    this.setPageTitle('Tambah Produk')
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

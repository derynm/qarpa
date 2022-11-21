<template>
  <div class="container px-4">
    <div class="header-text px-6 my-4 flex flex-col items-center gap-2">
      <IconsPosIcon />
      <ButtonComponent class="p-2" text-fill="upload gambar" />
    </div>
    <form class="flex flex-col justify-between min-h-[60vh]">
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
    <ButtonGlobal
      class="w-full mb-4 mt-2"
      padding="py-2"
      text="Hapus Produk"
      :outlined="true"
      @click="handleDelete(params)"
    />
    <ModalValidate
      v-show="deleteModal"
      :text="modalText"
      @decline="deleteModal = false"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  data () {
    return {
      params: this.$route.params.id,
      stokBarang: {
        nama: '',
        harga: '',
        tipe: '',
        stok: null
      },
      deleteModal: false,
      modalText: {
        content: 'Yakin ingin Hapus Produk ?',
        btn1: 'Batal',
        btn2: 'Yakin'
      }
    }
  },
  created () {
    this.setPageTitle('Edit Produk')
  },
  mounted () {
    console.log(this.$route.params.id)
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    handleDelete (id) {
      this.$store
        .dispatch('stok/deleteStok', id)
        .then(this.$router.push('/dashboard/stok'))
    }
  }
}
</script>

<style>
select {
  outline: none;
}
</style>

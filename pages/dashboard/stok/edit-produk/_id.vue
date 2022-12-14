<template>
  <div class="container px-4">
    <div class="header-text px-6 my-4 flex flex-col items-center gap-2">
      <IconsPosIcon />
      <!-- <ButtonComponent class="p-2" text-fill="upload gambar" /> -->
    </div>
    <form
      class="flex flex-col justify-between min-h-[60vh]"
      @submit.prevent="handleUpdate"
    >
      <div class="input">
        <InputFieldBasicInput
          v-model="stokBarang.nama"
          label="Nama Produk"
          placeholder="Nama"
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
    <ButtonGlobal
      class="w-full mb-4 mt-2"
      padding="py-2"
      text="Hapus Produk"
      :outlined="true"
      @click="deleteModal = true"
    />
    <ModalValidate
      v-if="deleteModal"
      :text="modalText"
      @accept="handleDelete(params)"
      @decline="deleteModal = false"
    />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  data () {
    return {
      params: this.$route.params.id,
      stokBarang: {
        nama: '',
        harga: null,
        tipe: null,
        stok: null,
        cabangId: parseInt(this.$route.query.cabang)
      },
      deleteModal: false,
      modalText: {
        content: 'Yakin ingin Hapus Produk ?',
        btn1: 'Batal',
        btn2: 'Yakin'
      }
    }
  },
  async fetch ({ store, params }) {
    await store.dispatch('stok/getProductById', params.id)
    await store.dispatch('dropdown/getCategoriesDropdown')
  },
  created () {
    this.setPageTitle('Edit Produk')
  },
  mounted () {
    console.log(this.$route.params.id)
    this.stokBarang.nama = this.productById.name
    this.stokBarang.harga = this.productById.selling_price
    this.stokBarang.stok = this.productById.qty
    this.stokBarang.tipe = this.productById.category
    // this.stokBarang.cabangId = parseInt(this.$route.query.cabang)
  },
  computed: {
    ...mapState('stok', ['productById']),
    ...mapState('dropdown', ['categories'])
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    handleDelete (id) {
      this.$store.dispatch('stok/deleteStok', id).then(() => {
        this.deleteModal = false
        this.$router.replace('/dashboard/stok')
      })
    },
    handleUpdate () {
      this.$store
        .dispatch('stok/updateProduct', {
          product: this.stokBarang,
          params: this.params
        })
        .then(() => this.$router.replace('/dashboard/stok'))
    }
  }
}
</script>

<style>
select {
  outline: none;
}
</style>

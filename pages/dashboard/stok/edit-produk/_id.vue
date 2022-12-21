<template>
  <div class="container px-4">
    <div class="header-text px-6 my-4 flex flex-col items-center gap-2">
      <div class="relative">
        <IconsPosIcon v-if="!stokBarang.photo" class="rounded-full" />
        <div
          v-else
          class="rounded-full h-[72px] w-[72px] bg-slate-400 border border-red overflow-hidden flex justify-center"
        >
          <img
            :src="previewImg ? previewImg : stokBarang.photo"
            alt="product"
          >
        </div>
        <div
          class="absolute rounded-full top-12 -right-1 cursor-pointer w-[27] h-[27]"
        >
          <input
            id="file_upload"
            type="file"
            name="file"
            @change="handleUploadPhoto($event)"
          >
          <icons-camera />
        </div>
      </div>
      <div v-if="isNotImageValid" class="pl-3 my-1 flex">
        <IconsWarningIcon />
        <p class="ml-1 text-danger text-[10px] font-semibold">
          Ukuran gambar maksimum 1MB
        </p>
      </div>
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
          :min="0"
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
        cabangId: parseInt(this.$route.query.cabang),
        photo: null
      },
      previewImg: null,
      deleteModal: false,
      isNotImageValid: null,
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
    this.stokBarang.photo = this.productById.image
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
    },
    handleUploadPhoto (e) {
      if (e.target.files[0]?.size > 1000000) {
        this.isNotImageValid = true
        this.previewImg = null
        this.stokBarang.photo = null
      } else {
        this.stokBarang.photo = e.target.files[0]
        if (this.stokBarang.photo) {
          const reader = new FileReader()
          reader.onload = (e) => {
            this.previewImg = e.target.result
          }
          this.isNotImageValid = false
          reader.readAsDataURL(this.stokBarang.photo)
        }
      }
    }
  }
}
</script>

<style scoped>
select {
  outline: none;
}
input[type='file'] {
  position: absolute;
  width: 100%;
  height: 27px;
  opacity: 0;
  cursor: pointer;
  left: 0px;
  top: 0px;
  z-index: 10;
}
</style>

<template>
  <div class="container px-4">
    <div class="header-text px-6 my-4 flex flex-col items-center gap-2">
      <div class="relative">
        <IconsPosIcon v-if="!stokBarang.photo" class="rounded-full" />
        <div
          v-else
          class="rounded-full h-[72px] w-[72px] bg-slate-400 border border-red overflow-hidden flex justify-center"
        >
          <img :src="previewImg" alt="product">
        </div>
        <div
          class="absolute rounded-full top-12 -right-1 cursor-pointer w-[27] h-[27]"
        >
          <input
            id="file_upload"
            type="file"
            name="file"
            accept="image/png, image/jpeg, image/jpg"
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
        cabangId: parseInt(this.$route.query.cabang),
        photo: null
      },
      previewImg: null,
      isNotImageValid: null
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

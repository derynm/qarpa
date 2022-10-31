<template>
  <div class="container px-4">
    <div class="header-text px-6 my-4 flex flex-col items-center gap-2">
      <IconsPosIcon />
      <ButtonComponent class="p-2" text-fill="upload gambar" />
    </div>
    <form class="flex flex-col justify-between min-h-[60vh]" @submit.prevent="">
      <div class="input">
        <InputFieldBasicInput
          v-model="dataProduk.nama"
          label="Nama Produk"
          placeholder="..."
        />
        <InputFieldBasicInput
          v-model="dataProduk.harga"
          label="Harga"
          placeholder="..."
        />
        <InputFieldBasicInput
          v-model="dataProduk.stok"
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
      <div class="btn flex flex-col gap-4">
        <ButtonComponent class="w-full py-2" text-fill="Simpan Data" />
        <ButtonComponent
          :outlined="true"
          class="w-full py-2"
          text-fill="Hapus Produk"
          @clicked="deleteModal = true"
        />
      </div>
    </form>
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
      dataProduk: {
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

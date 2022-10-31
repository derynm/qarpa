<template>
  <div class="container px-4">
    <div class="header-text px-6 my-4">
      <p class="text-center">
        Lengkapi form dibawah ini dengan data yang valid
      </p>
    </div>
    <form class="flex flex-col justify-between min-h-[70vh]">
      <div class="input">
        <InputFieldBasicInput
          v-model="dataCustomer.nama"
          label="Nama Pelanggan"
          placeholder="..."
        />
        <InputFieldBasicInput
          v-model="dataCustomer.alamat"
          label="Alamat"
          placeholder="..."
        />
        <InputFieldBasicInput
          v-model="dataCustomer.noHp"
          label="Nomor Handphone"
          placeholder="..."
        />
        <InputFieldBasicInput
          v-model="dataCustomer.email"
          label="email"
          type="email"
          placeholder="..."
        />
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
        alamat: '',
        email: '',
        noHp: null
      }
    }
  },
  created () {
    this.setPageTitle('Tambah Pelanggan Baru')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style></style>

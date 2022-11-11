<template>
  <div class="container px-4">
    <div class="header-text px-6 my-4">
      <p class="text-center">
        Lengkapi form dibawah ini dengan data yang valid
      </p>
    </div>
    <form
      class="flex flex-col justify-between min-h-[70vh]"
      @submit.prevent="handleSubmit"
    >
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
          type="number"
          label="Nomor Handphone"
          placeholder="..."
        />
        <InputFieldBasicInput
          v-model="dataCustomer.email"
          label="Email"
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
import { mapActions, mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
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
    ...mapMutations(['setPageTitle']),
    ...mapActions('pos', ['postNewCustomer']),
    handleSubmit () {
      this.$store
        .dispatch('pos/postNewCustomer', this.dataCustomer)
        .then(this.$router.push('/dashboard/pelanggan/pilih-pelanggan'))
    }
  }
}
</script>

<style></style>

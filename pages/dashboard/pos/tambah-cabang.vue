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
          v-model="dataCabang.nama"
          label="Nama Cabang"
          placeholder="..."
        />
        <InputFieldBasicInput
          v-model="dataCabang.alamat"
          label="Alamat"
          placeholder="..."
        />
        <InputFieldBasicInput
          v-model="dataCabang.noHp"
          label="Nomor Handphone"
          placeholder="..."
        />
      </div>
      <div class="btn">
        <ButtonGlobal
          text="Simpan Data"
          class="w-full"
          padding="py-2"
          color="bg-primary"
        />
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
      dataCabang: {
        nama: '',
        alamat: '',
        noHp: null
      }
    }
  },
  created () {
    this.setPageTitle('Tambah Cabang')
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    ...mapActions('pos', ['postNewCabang']),
    handleSubmit () {
      this.$store
        .dispatch('pos/postNewCabang', this.dataCabang)
        .then(this.$router.push('/dashboard/pos'))
    }
  }
}
</script>

<style></style>

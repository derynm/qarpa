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
    handleSubmit () {
      console.log(this.dataCabang)
      this.$axios
        .$post('branches', {
          branch: {
            name: this.dataCabang.nama,
            full_address: this.dataCabang.alamat,
            phone: this.dataCabang.noHp
          }
        })
        .then(this.$router.push('/dashboard/pos'))
    }
  }
}
</script>

<style></style>

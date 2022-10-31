<template>
  <div class="container px-4">
    <div class="header-text px-6 my-4">
      <p class="text-center">
        Lengkapi form dibawah ini dengan data yang valid
      </p>
    </div>
    <form
      class="flex flex-col justify-between min-h-[75vh]"
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
          v-model="dataCabang.kodePos"
          label="Kode Pos"
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
        kodePos: null,
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
        .$post(
          'branches',
          {
            branch: {
              name: this.dataCabang.nama,
              full_address: this.dataCabang.alamat,
              postal_code: this.dataCabang.kodePos
            }
          },
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyNiwiZXhwIjoxNjY3MDY2MzA3fQ.nOh2C2sYoH9u85YgM2gLABgMmtYPh1b9q4mrBEhkFXU'
            }
          }
        )
        .then(this.$router.push('/dashboard/pos'))
    }
  }
}
</script>

<style></style>

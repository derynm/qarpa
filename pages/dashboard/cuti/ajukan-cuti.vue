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
        <div class="dropdown">
          <fieldset
            class="my-2 rounded-md border-2 border-solid border-black bg-white"
          >
            <select
              id=""
              v-model="dataCuti.jenisIzin"
              class="w-full rounded-xl px-3 py-4"
              name=""
            >
              <option value="">
                Sakit/Izin/Liburan
              </option>
              <option value="Sakit">
                Sakit
              </option>
              <option value="Izin">
                Izin
              </option>
              <option value="Liburan">
                Liburan
              </option>
            </select>
          </fieldset>
        </div>
        <InputFieldBasicInput
          v-model="dataCuti.catatan"
          label="Catatan"
          placeholder="..."
        />
        <InputFieldDateInput
          v-model="dataCuti.tglMulai"
          label="Tanggal Mulai"
          placeholder="..."
        />
        <InputFieldDateInput
          v-model="dataCuti.tglBerakhir"
          label="Tanggal Berakhir"
          placeholder="..."
        />
      </div>
      <div class="btn">
        <ButtonGlobal
          text="Ajukan Cuti"
          color="bg-primary"
          class="w-full"
          padding="p-2"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  data () {
    return {
      dataCuti: {
        jenisIzin: '',
        catatan: '',
        tglMulai: null,
        tglBerakhir: null
      }
    }
  },
  created () {
    this.setPageTitle('Cuti')
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    ...mapActions('cuti', ['postNewCuti']),
    handleSubmit () {
      console.log(this.dataCuti)
      this.$store
        .dispatch('cuti/postNewCuti', this.dataCuti)
        .then(this.$router.push('/dashboard/cuti'))
    }
  }
}
</script>

<style></style>

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
          :min-date="DateNow"
        />
        <InputFieldDateInput
          v-model="dataCuti.tglBerakhir"
          label="Tanggal Berakhir"
          placeholder="..."
          :min-date="dataCuti.tglMulai"
        />
      </div>
      <div class="btn">
        <ButtonGlobal
          text="Ajukan Cuti"
          color="bg-primary"
          class="w-full"
          padding="p-2"
          :disabled="isDisabled"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import moment from 'moment'
export default {
  layout: 'navigation',
  data () {
    return {
      dataCuti: {
        jenisIzin: '',
        catatan: '',
        tglMulai: null,
        tglBerakhir: null
      },
      isDisabled: true
    }
  },
  computed: {
    DateNow () {
      return moment(new Date()).format('YYYY-MM-DD')
    }
  },
  created () {
    this.setPageTitle('Cuti')
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    ...mapActions('cuti', ['postNewCuti']),
    handleSubmit () {
      this.$store
        .dispatch('cuti/postNewCuti', this.dataCuti)
        .then(() => this.$router.replace('/dashboard/cuti'))
    },
    disabledButton () {
      if (
        this.dataCuti.jenisIzin &&
        this.dataCuti.catatan &&
        this.dataCuti.tglMulai &&
        this.dataCuti.tglBerakhir !== null
      ) {
        this.isDisabled = false
      } else {
        this.isDisabled = true
      }
    }
  },
  watch: {
    'dataCuti.jenisIzin' () {
      this.disabledButton()
    },
    'dataCuti.catatan' () {
      this.disabledButton()
    },
    'dataCuti.tglMulai' () {
      this.disabledButton()
    },
    'dataCuti.tglBerakhir' () {
      this.disabledButton()
    }
  }
}
</script>

<style></style>

<template>
  <div class="container px-4">
    <form
      class="flex flex-col justify-between min-h-[70vh]"
      @submit.prevent="handleSubmit"
    >
      <div class="input">
        <InputFieldBasicInput
          v-model="dataBank.nama"
          label="Nama Pemilik Rekening"
          placeholder="Nama"
        />
        <div class="dropdown">
          <fieldset
            class="my-2 rounded-md border-2 border-solid border-black p-1 bg-white"
          >
            <legend class="ml-6 px-2 text-lg">
              Bank
            </legend>
            <select
              id=""
              v-model="dataBank.bank"
              class="w-full rounded-xl px-3 pb-2"
              name=""
            >
              <option value="">
                Bank
              </option>
              <option value="bri">
                BRI
              </option>
              <option value="bca">
                BCA
              </option>
              <option value="mandiri">
                Mandiri
              </option>
              <option value="bni">
                BNI
              </option>
              <option value="btn">
                BTN
              </option>
            </select>
          </fieldset>
        </div>
        <InputFieldBasicInput
          v-model="dataBank.noRekening"
          type="number"
          :min="0"
          label="Nomor Rekening"
          placeholder="Rekekning"
        />
      </div>
      <div class="btn">
        <ButtonGlobal
          class="w-full"
          padding="py-2"
          text="Simpan Data"
          color="bg-primary"
          :disabled="isDisable"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  layout: 'header',
  middleware: 'auth',
  data () {
    return {
      dataBank: {
        nama: '',
        bank: '',
        noRekening: ''
      },
      isDisable: true
    }
  },
  watch: {
    dataBank: {
      deep: true,
      handler () {
        this.checkInput()
      }
    }
  },
  created () {
    this.setPageTitle('Tambah Bank')
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    ...mapActions('pos', ['postNewBank']),
    handleSubmit () {
      this.$store
        .dispatch('pos/postNewBank', this.dataBank)
        .then(() =>
          this.$router.replace(
            `/dashboard/pos/${this.$route.params.id}/pembayaran/pilih-bank`
          )
        )
    },
    checkInput () {
      this.isDisable = !Object.keys(this.dataBank).every(
        e => this.dataBank[e] !== ''
      )
    }
  }
}
</script>

<style>
select {
  outline: none;
}
</style>

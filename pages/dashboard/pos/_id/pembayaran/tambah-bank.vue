<template>
  <div class="container px-4">
    <!-- <div class="header-text px-6 my-4">
      <p class="text-center">
        Lengkapi form dibawah ini dengan data yang valid
      </p>
    </div> -->
    <form
      class="flex flex-col justify-between min-h-[70vh]"
      @submit.prevent="handleSubmit"
    >
      <div class="input">
        <InputFieldBasicInput
          v-model="dataBank.nama"
          label="Nama Pemilik Rekening"
          placeholder="..."
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
                ...
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
            </select>
          </fieldset>
        </div>
        <InputFieldBasicInput
          v-model="dataBank.noRekening"
          type="number"
          label="Nomor Rekening"
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
  data () {
    return {
      dataBank: {
        nama: '',
        bank: '',
        noRekening: null
      }
    }
  },
  created () {
    this.setPageTitle('Tambah Bank')
  },
  mounted () {
    console.log(this.$route.params.id)
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    ...mapActions('pos', ['postNewBank']),
    handleSubmit () {
      console.log(this.dataBank)
      this.$store.dispatch('pos/postNewBank', this.dataBank).then(
        this.$router.replace(
          `/dashboard/pos/${this.$route.params.id}/pembayaran/pilih-bank`
        )
        // this.$router.go(-1)
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

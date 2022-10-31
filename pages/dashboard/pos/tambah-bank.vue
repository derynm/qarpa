<template>
  <div class="container px-4">
    <!-- <div class="header-text px-6 my-4">
      <p class="text-center">
        Lengkapi form dibawah ini dengan data yang valid
      </p>
    </div> -->
    <form class="flex flex-col justify-between min-h-[70vh]">
      <div class="input">
        <InputFieldBasicInput
          v-model="dataCustomer.nama"
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
            <select id="" class="w-full rounded-xl px-3 pb-2" name="">
              <option value="">
                ...
              </option>
              <option value="BRI">
                BRI
              </option>
              <option value="BCA">
                BCA
              </option>
              <option value="Mandiri">
                Mandiri
              </option>
            </select>
          </fieldset>
        </div>
        <InputFieldBasicInput
          v-model="dataCustomer.noHp"
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
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  data () {
    return {
      dataCustomer: {
        nama: '',
        alamat: '',
        noRekening: null
      }
    }
  },
  created () {
    this.setPageTitle('Tambah Bank')
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

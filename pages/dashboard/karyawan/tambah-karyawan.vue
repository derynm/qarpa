<template>
  <div class="content flex flex-col justify-between min-h-[80vh] px-2">
    <div class="top">
      <form>
        <InputFieldBasicInput
          v-model="dataKaryawan.nama"
          label="Nama Karyawan"
        />
        <InputFieldEmailInput v-model="dataKaryawan.email" label="Email" />
        <InputFieldPasswordInput
          v-model="dataKaryawan.password"
          label="Password"
        />
      </form>
    </div>
    <div class="outlet border shadow-lg rounded-md pl-2 pr-4 py-2">
      <div class="outlet-btn flex justify-between">
        <p class="font-bold">
          Outlet
        </p>
        <div class="dropdown">
          <fieldset
            class="my-2 rounded-md border-2 border-solid border-[#344397] bg-white"
          >
            <select id="" class="w-full rounded-xl px-3" name="">
              <option value="">
                Pilih Outlet
              </option>
              <option value="1">
                1
              </option>
              <option value="2">
                2
              </option>
            </select>
          </fieldset>
        </div>
      </div>
      <div class="upgrade-info">
        <p>Tekan 'Pilih Outlet' untuk memilih tempat karyawan bekerja.</p>
      </div>
    </div>
    <div class="bot-btn flex">
      <ButtonComponent class="p-2 w-full" text-fill="Simpan Data" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  data () {
    return {
      dataKaryawan: {
        nama: '',
        email: '',
        password: ''
      }
    }
  },
  created () {
    this.setPageTitle('Karyawan')
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

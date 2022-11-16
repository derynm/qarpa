<template>
  <div class="content flex flex-col justify-between min-h-[80vh] px-2">
    <form @submit.prevent="handleSubmit">
      <div class="top">
        <InputFieldBasicInput
          v-model="dataKaryawan.nama"
          label="Nama Karyawan"
        />
        <InputFieldEmailInput v-model="dataKaryawan.email" label="Email" />
        <InputFieldPasswordInput
          v-model="dataKaryawan.password"
          label="Password"
        />
      </div>
      <div class="outlet border shadow-lg rounded-md pl-2 pr-4 py-2">
        <div class="outlet-btn flex justify-between">
          <p class="font-bold">
            Outlet
          </p>
          <div class="dropdown">
            <select
              id=""
              class="w-full rounded-sm px-3 my-2 border-2 border-solid border-[#344397] !bg-white overflow-y-auto"
              name=""
            >
              <option value="">
                Pilih Outlet
              </option>
              <option
                v-for="item in branchDropdown"
                :key="item.id"
                :value="item.id"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="upgrade-info">
          <p>Tekan 'Pilih Outlet' untuk memilih tempat karyawan bekerja.</p>
        </div>
      </div>
    </form>
    <div class="bot-btn flex">
      <ButtonGlobal
        text="Simpan Data"
        padding="py-2"
        class="w-full"
        type="submit"
        color="bg-primary"
        @click="handleSubmit"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  data () {
    return {
      dataKaryawan: {
        nama: '',
        email: '',
        password: '',
        cabang: null
      },
      size: 1
    }
  },
  async fetch ({ store }) {
    await store.dispatch('karyawan/getBranchDropdown')
  },
  computed: {
    ...mapState('karyawan', ['branchDropdown'])
  },
  created () {
    this.setPageTitle('Karyawan')
  },
  mounted () {
    console.log(this.branchDropdown)
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    ...mapActions('karyawan', ['getBranchDropdown', ['postNewEmployee']]),
    handleSubmit () {
      this.$store
        .dispatch('karyawan/postNewEmployee', this.dataKaryawan)
        .then(this.$router.push('/dashboard/karyawan'))
    }
  }
}
</script>

<style>
select {
  outline: none;
}
</style>

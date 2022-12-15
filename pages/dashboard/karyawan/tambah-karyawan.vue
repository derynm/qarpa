<template>
  <div class="content flex flex-col justify-between min-h-[80vh] px-2">
    <form @submit.prevent="handleSubmit">
      <div class="top">
        <InputFieldBasicInput
          v-model="dataKaryawan.nama"
          label="Nama Karyawan"
          placeholder="Karyawan"
        />
        <InputFieldEmailInput
          v-model="dataKaryawan.email"
          label="Email"
          placeholder="Email"
        />
        <InputFieldPasswordInput
          v-model="dataKaryawan.password"
          placeholder="Password"
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
              v-model="dataKaryawan.cabang"
              class="w-full rounded-sm px-3 my-2 border-2 border-solid border-[#344397] !bg-white overflow-y-auto"
              name=""
            >
              <option value="null">
                Pilih Outlet
              </option>
              <option v-for="item in branch" :key="item.id" :value="item.id">
                {{ item.value }}
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
        :disabled="isDisabled"
        @click="handleSubmit"
      />
    </div>
    <ModalConfirmModal
      v-if="errorStatus"
      title="Error"
      :text="modalText"
      @closeModal="clearModal()"
    />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  data () {
    return {
      dataKaryawan: {
        nama: null,
        email: null,
        password: null,
        cabang: null
      },
      size: 1,
      isDisabled: true
    }
  },
  async fetch ({ store }) {
    await store.dispatch('dropdown/getBranchDropdown')
  },
  computed: {
    ...mapState('dropdown', ['branch']),
    ...mapState('karyawan', ['errorMsg', 'errorStatus']),
    modalText () {
      const text = []
      Object.keys(this.errorMsg).forEach(e =>
        text.push(`${e} ${this.errorMsg[e].toString()}`)
      )
      return text.toString().replace(/,/g, ' and ')
    }
  },
  watch: {
    'dataKaryawan.nama' () {
      this.disabledButton()
    },
    'dataKaryawan.email' () {
      this.disabledButton()
    },
    'dataKaryawan.password' () {
      this.disabledButton()
    },
    'dataKaryawan.cabang' () {
      this.disabledButton()
    }
  },
  created () {
    this.setPageTitle('Karyawan')
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    ...mapMutations('karyawan', ['setErrorStatus', 'setErrorMsg']),
    handleSubmit () {
      this.$store.dispatch('karyawan/postNewEmployee', this.dataKaryawan)
    },
    disabledButton () {
      if (
        this.dataKaryawan.nama &&
        this.dataKaryawan.email &&
        this.dataKaryawan.password &&
        this.dataKaryawan.cabang !== null
      ) {
        this.isDisabled = false
      } else {
        this.isDisabled = true
      }
    },
    clearModal () {
      this.setErrorStatus(false)
      this.setErrorMsg('')
    }
  }
}
</script>

<style>
select {
  outline: none;
}
</style>

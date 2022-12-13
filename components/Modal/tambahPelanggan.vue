<template>
  <div
    class="modal-overlay fixed top-0 bottom-0 right-0 left-0 flex justify-center bg-gray-400/40"
  >
    <div
      class="modal text-center bg-white h-[90%] w-[90%] md:w-[500px] p-2 my-auto rounded-md"
    >
      <div class="close-btn flex justify-end mb-3">
        <IconsClose class="cursor-pointer" @close="closeModal" />
      </div>
      <div class="header-text px-6 my-6">
        <p class="text-center">
          Lengkapi form dibawah ini dengan data yang valid
        </p>
      </div>
      <form
        class="flex flex-col justify-between min-h-[70vh] px-2 text-left"
        @submit.prevent="handleSubmit"
      >
        <div class="input">
          <InputFieldBasicInput
            v-model="dataCustomer.nama"
            label="Nama Pelanggan"
            placeholder="Nama"
          />
          <InputFieldBasicInput
            v-model="dataCustomer.alamat"
            label="Alamat"
            placeholder="Alamat"
          />
          <InputFieldBasicInput
            v-model="dataCustomer.noHp"
            type="number"
            label="Nomor Handphone"
            placeholder="Nomor Handphone"
          />
          <InputFieldBasicInput
            v-model="dataCustomer.email"
            label="Email"
            type="email"
            placeholder="Email Pelanggan"
          />
        </div>
        <div class="btn">
          <ButtonGlobal
            text="Simpan Data"
            padding="py-2"
            class="w-full"
            type="submit"
            color="bg-primary"
            :disabled="isDisable"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  data () {
    return {
      dataCustomer: {
        nama: '',
        alamat: '',
        email: '',
        noHp: ''
      },
      isDisable: true
    }
  },
  watch: {
    dataCustomer: {
      deep: true,
      handler () {
        this.checkInput()
      }
    }
  },
  created () {
    this.setPageTitle('Tambah Pelanggan Baru')
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    ...mapActions('pos', ['postNewCustomer']),
    handleSubmit () {
      this.$store
        .dispatch('pos/postNewCustomer', this.dataCustomer)
        .then(this.$emit('closeModal'))
    },
    closeModal () {
      this.$emit('close')
    },
    checkInput () {
      this.isDisable = !Object.keys(this.dataCustomer).every(
        e => this.dataCustomer[e] !== ''
      )
    }
  }
}
</script>

<style></style>

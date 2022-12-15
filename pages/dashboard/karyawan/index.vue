<template>
  <div>
    <div v-if="isLoading" class="loading flex min-h-screen">
      <Loading class="m-auto" />
    </div>
    <div
      v-if="!isLoading"
      class="content flex flex-col justify-between min-h-[80vh] px-2 gap-4 mb-5"
    >
      <div class="top">
        <div
          v-if="dataEmployee.length <= 0"
          class="empty flex flex-col items-center text-center mt-10"
        >
          <IconsKosong />
          <p class="font-semibold">
            Kamu belum punya karyawan, nih?
          </p>
          <p>
            Silahkan tambah karyawan baru, jika kamu sudah memiliki karyawan
            untuk kelola usahamu.
          </p>
        </div>
        <div v-else class="!empty flex flex-col gap-3">
          <div class="title">
            <p>Daftar Karyawan</p>
          </div>
          <div class="content flex flex-col gap-3">
            <KaryawanCardKaryawan
              v-for="item in dataEmployee"
              :key="item.id"
              :item="item"
              @delete="getIdDelete"
            />
          </div>
        </div>
      </div>
      <div class="bot-btn flex justify-end">
        <nuxt-link to="karyawan/tambah-karyawan">
          <ButtonComponent class="p-2" text-fill="+ Tambah" />
        </nuxt-link>
      </div>
    </div>
    <ModalValidate
      v-if="showModalValidateDelete"
      :text="modalDelete"
      @accept="deleteKaryawan"
      @decline="showModalValidateDelete = false"
    />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  data () {
    return {
      showModalValidateDelete: false,
      modalDelete: {
        content: 'Yakin ingin Menghapus Karyawan?',
        btn1: 'Tidak',
        btn2: 'Yakin'
      },
      idEmployee: null
    }
  },
  async fetch ({ store }) {
    await store.dispatch('karyawan/getDataEmployee')
  },
  computed: {
    ...mapState('karyawan', ['dataEmployee', 'isLoading'])
  },
  created () {
    this.setPageTitle('Karyawan')
  },
  mounted () {
    this.getKaryawan()
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    ...mapActions('karyawan', ['getDataEmployee']),
    deleteKaryawan () {
      this.$store.dispatch('karyawan/deleteEmployee', this.idEmployee)
      this.showModalValidateDelete = false
    },
    getKaryawan () {
      this.$store.dispatch('karyawan/getDataEmployee')
    },
    getIdDelete (id) {
      this.showModalValidateDelete = true
      this.idEmployee = id
    }
  }
}
</script>

<style></style>

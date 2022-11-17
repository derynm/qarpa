<template>
  <div class="px-3">
    <form @submit.prevent="newTask(form)">
      <input-field-basic-input
        v-model="form.tugas"
        label="Tugas"
        placeholder="Melakukan penjualan di PoS"
      />
      <input-field-textarea-input
        v-model="form.deskripsi"
        label="Deskripsi"
        placeholder="Deskripsi Tugas"
        :row="2"
      />
      <input-field-date-input
        v-model="form.durasi_mulai"
        label="Durasi Mulai"
      />
      <input-field-date-input
        v-model="form.durasi_akhir"
        label="Durasi Berakhir"
      />
      <input-field-drop-down-input
        v-model="form.karyawan"
        :item="employees"
        label="Karyawan"
        place-holder="Pilih Karyawan"
      />
      <div class="flex">
        <button-global
          text="Simpan Data"
          padding="py-3"
          color="bg-primary"
          class="w-full"
        />
      </div>
    </form>
    <modal-confirm-modal
      v-if="modal"
      title="Tugas Berhasil Ditambahkan"
      @closeModal="modalHandle"
    />
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  data () {
    return {
      form: {
        tugas: '',
        deskripsi: '',
        durasi_mulai: '',
        durasi_akhir: '',
        karyawan: ''
      }
    }
  },
  async fetch ({ store }) {
    await store.dispatch('getEmployee')
    await store.dispatch('dropdown/getEmployeeDropdown')
  },
  created () {
    this.setPageTitle('Buat Tugas Baru')
    // this.$store.dispatch('getEmployee')
  },
  computed: {
    ...mapState('dropdown', ['employees']),
    ...mapState('wom', ['modal'])
  },
  methods: {
    ...mapMutations(['setPageTitle', 'showModal']),
    ...mapActions('wom', ['newTask']),
    modalHandle () {
      this.showModal(false)
      this.$router.push('/dashboard/wom')
    }
  }
}
</script>

<style></style>

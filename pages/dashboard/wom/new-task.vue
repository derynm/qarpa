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
        :minDate="DateNow"
      />
      <input-field-date-input
        v-model="form.durasi_akhir"
        label="Durasi Berakhir"
        :minDate="DateNow"
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
          :disabled="isDisable"
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
import moment from 'moment'

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
      },
      isDisable: true
    }
  },
  async fetch ({ store }) {
    // await store.dispatch('getEmployee')
    await store.dispatch('dropdown/getEmployeeDropdown')
  },
  watch: {
    form: {
      deep: true,
      handler () {
        this.checkInput()
      }
    }
  },
  created () {
    this.setPageTitle('Buat Tugas Baru')
    // this.$store.dispatch('getEmployee')
  },
  computed: {
    ...mapState('dropdown', ['employees']),
    ...mapState('wom', ['modal']),
    DateNow () {
      return moment(new Date()).format('YYYY-MM-DD')
    }
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    ...mapMutations('wom', ['showModal']),
    ...mapActions('wom', ['newTask']),
    modalHandle () {
      this.showModal(false)
      this.$router.replace('/dashboard/wom')
    },
    checkInput () {
      this.isDisable = !Object.keys(this.form).every(e => this.form[e] !== '')
    }
  }
}
</script>

<style></style>

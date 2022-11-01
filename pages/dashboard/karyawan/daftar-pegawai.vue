<template>
  <div class="h-screen mx-4 md:mx-12">
    <div class="btn my-4">
      <ButtonComponent
        text-fill="Tambah Pegawai"
        @clicked="addPegawai = true"
      />
    </div>
    <div class="search">
      <SearchBar />
    </div>
    <div class="content mt-52">
      <p class="text-4xl font-bold text-center">
        Belum ada pegawai, klik menu tambah pegawai untuk menambahkan pegawai
      </p>
    </div>
    <ModalTambahPegawai v-show="addPegawai" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'dashboard-pos',
  data () {
    return {
      isRequest: true,
      addPegawai: false
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

<style></style>

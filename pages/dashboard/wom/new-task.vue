<template>
  <div class="px-3">
    <input-field-basic-input
      label="Tugas"
      placeholder="Melakukan penjualan di PoS"
    />
    <input-field-textarea-input
      label="Deskripsi"
      placeholder="Deskripsi Tugas"
      :row="2"
    />
    <input-field-date-input label="Durasi Mulai" />
    <input-field-date-input label="Durasi Berakhir" />
    <input-field-drop-down-input
      label="Karyawan"
      place-holder="Pilih Karyawan"
    />
    <div class="flex">
      <button-global text="Simpan Data" padding="py-3" color="bg-primary" class="w-full"/>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  created () {
    this.setPageTitle('Buat Tugas Baru')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style></style>

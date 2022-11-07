<template>
  <div class="flex flex-col justify-between px-3 h-screen">
    <div>
      <input-field-basic-input
        label="Nama Pelanggan"
        type="text"
        placeholder="Masukan Nama Pelanggan"
      />
      <input-field-basic-input
        label="Alamat"
        type="text"
        placeholder="Masukan Nama Pelanggan"
      />
      <input-field-basic-input
        label="Nomor Handphone"
        type="number"
        placeholder="Masukan Nama Pelanggan"
      />
      <input-field-basic-input
        label="Email"
        type="text"
        placeholder="Masukan Nama Pelanggan"
      />
    </div>
    <button-global text="Simpan Data" color="bg-primary" padding="py-3" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  layout: 'navigation',
  data () {
    return {
      costumerName: null,
      costumerNumber: null,
      costumerAddress: null
    }
  },
  created () {
    this.setPageTitle('Pelanggan')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
</style>

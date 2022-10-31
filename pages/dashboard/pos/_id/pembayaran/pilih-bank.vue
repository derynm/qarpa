<template>
  <div class="container px-4">
    <nuxt-link
      to="/dashboard/pos/tambah-bank"
      class="header flex items-center p-2 my-4 justify-between"
    >
      <div class="flex gap-2 items-center">
        <IconsBankIcon />
        <p class="px-2">
          Tambah Rekening Bank Baru
        </p>
      </div>
      <IconsArrowRight color="black" />
    </nuxt-link>
    <div class="container">
      <div class="my-6">
        <p class="text-lg font-semibold">
          Pilih Rekening Bank
        </p>
        <p>Pilih Rekning sesuai bank asal transfer pelangganmu</p>
      </div>
      <div class="content flex flex-col gap-2">
        <PosCardBank bank="BRI" />
        <PosCardBank bank="BCA" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  created () {
    this.setPageTitle('Pembayaran Bank')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style>
input:focus {
  outline: none;
}
</style>

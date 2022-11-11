<template>
  <div class="container px-4 mb-6">
    <nuxt-link
      to="tambah-bank"
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
        <PosCardBank v-for="item in dataBank" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  async fetch ({ store }) {
    await store.dispatch('pos/getDataBank')
  },
  created () {
    this.setPageTitle('Pembayaran Bank')
  },
  mounted () {
    console.log(this.dataBank)
    // console.log(this.$route.params.id)
  },
  computed: {
    ...mapState('pos', ['dataBank'])
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    ...mapActions('pos', ['getDataBank'])
  }
}
</script>

<style>
input:focus {
  outline: none;
}
</style>

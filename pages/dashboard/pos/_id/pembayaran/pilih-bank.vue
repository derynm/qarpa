<template>
  <div class="container px-4 mb-6">
    <nuxt-link
      to="tambah-bank"
      class="header flex items-center p-2 my-4 justify-between"
      replace
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
        <PosCardBank
          v-for="item in dataBank"
          :key="item.id"
          :item="item"
          @payment="handlePayment"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
export default {
  layout: 'header',
  middleware: 'auth',
  data () {
    return {
      order: {}
    }
  },
  async fetch ({ store }) {
    await store.dispatch('pos/getDataBank')
  },
  created () {
    this.setPageTitle('Pembayaran Bank')
  },
  mounted () {
    this.getOrder()
    this.getBank()
    console.log(this.dataBank)
  },
  computed: {
    ...mapState('pos', ['dataBank'])
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    getOrder () {
      this.order = this.$cookies.get('order')
    },
    handlePayment (e) {
      this.order.bank = e
      this.$cookies.set('order', this.order)
      this.$router.replace('bank')
    },
    getBank () {
      this.$store.dispatch('pos/getDataBank')
    }
  }
}
</script>

<style>
input:focus {
  outline: none;
}
</style>

<template>
  <div class="container flex flex-col gap-10 px-4">
    <div class="header text-center">
      <p class="title text-2xl font-semibold pt-10">
        Pembayaran Berhasil
      </p>
      <div class="icon flex flex-col gap-2 items-center">
        <IconsPosReport />
        <p>{{ timeNow }}</p>
      </div>
    </div>
    <div class="content">
      <div class="title text-center py-2">
        <p>Rincian Pembayaran</p>
      </div>
      <div class="detail flex justify-between">
        <div class="left flex flex-col gap-1">
          <p>Jenis Pembayaran</p>
          <p>Total Tagihan</p>
          <p>Diterima</p>
          <p>Kembalian</p>
        </div>
        <div class="right flex flex-col gap-1 font-semibold text-right">
          <p>{{ order.payment === 'cash' ? 'Tunai' : 'Transfer Bank' }}</p>
          <p>Rp. {{ order.totalStr }}</p>
          <p>Rp. {{ getPayment }}</p>
          <p>Rp. {{ getChange }}</p>
        </div>
      </div>
    </div>
    <div class="btn pt-8 flex flex-col gap-4">
      <ButtonGlobal
        text="Transaksi Baru"
        class="w-full"
        padding="p-2"
        color="bg-primary"
        @click="newTransaction"
      />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
export default {
  beforeRouteLeave (to, form, next) {
    this.$cookies.remove('order')
    next()
  },
  layout: 'dashboard',
  middleware: 'auth',
  data () {
    return {
      order: {}
    }
  },
  computed: {
    timeNow () {
      return moment(new Date()).format('DD MMM YYYY, HH:mm')
    },
    getPayment () {
      return new Intl.NumberFormat(['ban', 'id']).format(this.order.pay)
    },
    getChange () {
      const temp = this.order.pay - this.order.totalInt
      return new Intl.NumberFormat(['ban', 'id']).format(temp)
    }
  },
  mounted () {
    this.getOrder()
  },
  methods: {
    getOrder () {
      this.order = this.$cookies.get('order')
    },
    newTransaction () {
      // this.$cookies.remove('order')
      this.$router.replace(`/dashboard/pos/${this.$route.params.id}`)
    }
  }
}
</script>

<style></style>

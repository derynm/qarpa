<template>
  <div class="container px-4">
    <div class="card-total border p-2 rounded-lg text-center shadow-md">
      <p class="text-xl">
        Total Pembayaran
      </p>
      <p class="text-3xl">
        Rp. {{ order.totalStr }}
      </p>
    </div>
    <div class="content my-10 flex flex-col gap-4">
      <div class="title">
        <p class="font-semibold text-lg">
          Metode Pembayaran
        </p>
        <p>Pilih sesuai metode pembayaran yang digunakan pelangganmu</p>
      </div>
      <div class="option flex flex-col gap-4">
        <div class="cursor-pointer" @click="handleTunai">
          <div
            class="tunai rounded-lg shadow-md flex justify-between border px-2 py-4 font-semibold"
          >
            <div class="left">
              <p>Tunai</p>
            </div>
            <div class="right flex items-center">
              <IconsArrowRight color="black" />
            </div>
          </div>
        </div>
        <div class="cursor-pointer" @click="handleBank">
          <div
            class="bank rounded-lg shadow-md flex justify-between border font-semibold px-2 py-4"
          >
            <div class="left">
              <p>Transfer Bank</p>
              <p class="font-normal">
                Terima transfer dari berbagai Bank
              </p>
            </div>
            <div class="right flex items-center">
              <IconsArrowRight color="black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
export default {
  layout: 'header',
  middleware: 'auth',
  data () {
    return {
      order: {},
      newOrder: {}
    }
  },
  computed: {
    /* eslint-disable */
    getItemsOrder() {
      const temp = this.order.items.map(
        ({ products_branch_id, qty_product }) => ({
          products_branch_id,
          qty: qty_product
        })
      )
      return temp
    },
    getNewOrder() {
      const { totalInt, totalStr, items, ...item } = this.order
      item.items = this.getItemsOrder
      return item
    }
  },
  created() {
    this.setPageTitle('Pembayaran')
  },
  mounted() {
    this.getOrder()
    console.log(this.order)
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    getOrder() {
      this.order = this.$cookies.get('order')
    },
    handleTunai() {
      this.getNewOrder.payment = 'cash'
      this.order.payment = 'cash'
      this.$cookies.set('order', this.order)
      console.log(this.getNewOrder)
      this.$store
        .dispatch('pos/postNewOrder', this.getNewOrder)
        .then(this.$router.replace('pembayaran/tunai'))
    },
    handleBank() {
      this.getNewOrder.payment = 'transfer'
      this.order.payment = 'transfer'
      this.$cookies.set('order', this.order)
      console.log(this.getNewOrder)
      this.$store
        .dispatch('pos/postNewOrder', this.getNewOrder)
        .then(this.$router.replace('pembayaran/pilih-bank'))
    }
  }
}
</script>

<style>
input:focus {
  outline: none;
}
</style>

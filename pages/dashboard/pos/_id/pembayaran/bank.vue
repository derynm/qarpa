<template>
  <div class="container flex flex-col justify-between my-4 min-h-[80vh] px-2">
    <div class="content mx-auto flex flex-col gap-4 text-center">
      <IconsPosPaid />
      <div>
        <p>Total Tagihan</p>
        <p class="font-semibold text-xl">
          Rp. {{ order.totalStr }}
        </p>
      </div>
      <div>
        <p>Metode Pembayaran</p>
        <p class="font-semibold">
          Transfer dari Bank {{ order.bank }}
        </p>
      </div>
    </div>
    <div class="btn">
      <ButtonGlobal
        text="Buat Pembayaran"
        class="w-full"
        padding="p-2"
        color="bg-primary"
        @click="handlePayment"
      />
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
      order: {}
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
    this.setPageTitle('Pembayaran Bank')
  },
  mounted() {
    this.getOrder()
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    getOrder() {
      this.order = this.$cookies.get('order')
    },
    handlePayment() {
      this.order.pay = this.order.totalInt
      this.$cookies.set('order', this.order)
      this.$store
        .dispatch('pos/postNewOrder', this.getNewOrder)
        .then(() => this.$router.replace('report'))
      // this.$router.replace('report')
    }
  }
}
</script>

<style></style>

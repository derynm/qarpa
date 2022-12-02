<template>
  <div>
    <div class="flex justify-between w-full">
      <p>05 Oktober 2022</p>
      <drop-down
        v-model="cabang"
        place-holder="Pilih Cabang"
        :item="branch"
        :use-id="true"
        class="max-w-[200px]"
      />
    </div>
    <div v-if="branchAddress" class="flex flex-col">
      <div class="flex">
        <icons-icons-shipping-location-point />
        <h3 class="text-xl font-semibold">
          Alamat Cabang
        </h3>
      </div>
      <p class="text-lg font-semibold">
        Kontak : {{ branchAddress.phone }}
      </p>
      <p class="text-sm max-w-[85%] md:max-w-[50%]">
        {{ branchAddress.address }}
      </p>
    </div>
    <div>
      <p class="font-semibold my-5">
        Daftar Produk
      </p>
      <card-product
        v-for="(value, index) in dataOrder.produk"
        :key="index"
        :item="value"
        @incQty="increamentItemShipping"
        @decQty="decreaseItemShipping"
      />
    </div>
    <div class="flex flex-col mb-3">
      <hr class="mb-3">
      <div class="flex w-ful justify-between mb-6">
        <p class="font-semibold">
          Total Produk :
        </p>
        <p>{{ totalOrder }}</p>
      </div>
      <button-global
        text="Kirim Barang"
        color="bg-primary"
        padding="py-3"
        @click="postPengiriman"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
export default {
  props: { data: { type: Object, default: null } },
  data () {
    return {
      cabang: null,
      cabangAsal: this.$route.query.origin_branch,
      dataOrder: {
        produk: []
      },
      totalOrder: 0
    }
  },
  watch: {
    cabang () {
      this.$store.dispatch('getAddressBrach', this.cabang)
    }
  },
  mounted () {
    this.$store.dispatch('dropdown/getBranchDropdown')
    this.dataOrder = this.$cookies.get('order_pengiriman')
    this.totalOrder = this.dataOrder.total_produk
  },
  computed: {
    ...mapState('dropdown', ['branch']),
    ...mapState(['branchAddress'])
  },
  methods: {
    increamentItemShipping (item) {
      const tempId = this.dataOrder.produk.find(val => val.id === item.id)
      if (!tempId) {
        this.dataOrder.produk.push(item)
      } else {
        tempId.qty_product = item.qty_product
      }
      this.setTotalOrder()
    },
    decreaseItemShipping (item) {
      const tempId = this.dataOrder.produk.find(val => val.id === item.id)
      if (item.qty !== 0) {
        tempId.qty_product = item.qty_product
      } else {
        this.dataOrder.produk = this.dataOrder.produk.filter(
          val => val.id !== item.id
        )
      }
      this.setTotalOrder()
    },
    setTotalOrder () {
      if (this.dataOrder.produk.length !== 0) {
        this.totalOrder = this.dataOrder.produk.reduce(
          (sum, cur) => sum + cur.qty_product,
          0
        )
      } else {
        this.totalOrder = 0
      }
    },
    postPengiriman () {
      /* eslint-disable */
      const dataBarang = this.dataOrder.produk.map(({ id, qty_product }) => ({
        product_id: id,
        quantity: qty_product
      }))
      this.$store.dispatch('shipping/postShippingToBranch', {
        shipping: {
          origin_id: parseInt(this.cabangAsal), // branch asal
          destination_id: parseInt(this.cabang), // branch tujuan
          items: dataBarang
        }
      })
    }
  }
}
</script>

<style></style>

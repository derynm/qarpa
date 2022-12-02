<template>
  <div class="px-3">
    <SearchBar placeholder="Cari Produk" class="my-5" />
    <drop-down
      v-model="dataBranch"
      place-holder="Cabang Asal"
      :item="branch"
      :use-id="true"
    />
    <h3 class="font-semibold text-lg my-4">
      Daftar Produk
    </h3>
    <div class="flex flex-col">
      <div v-if="!isLoading" class="min-h-[40vh]">
        <card-product
          v-for="(value, index) in stokByBranch"
          :key="index"
          :item="value"
          @incQty="increamentItemShipping"
          @decQty="decreaseItemShipping"
        />
      </div>
      <div v-else>
        <loading />
      </div>
      <div class="flex flex-col mb-3">
        <hr class="my-3">
        <div class="flex w-ful justify-between mb-6">
          <p class="font-semibold">
            Total Produk :
          </p>
          <p>{{ totalProduk }}</p>
        </div>
        <button-global
          text="Detail Order"
          color="bg-primary"
          padding="py-3"
          @click="handleInput"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
export default {
  layout: 'navigation',
  middleware: 'auth',
  data () {
    return {
      dataPengiriman: {
        produk: []
      },
      dataBranch: null,
      tujuanPengiriman: null,
      totalProduk: 0
    }
  },
  async fetch ({ store }) {
    await store.dispatch('dropdown/getBranchDropdown')
  },
  watch: {
    dataBranch () {
      this.$store.dispatch('stok/getStokByBranch', this.dataBranch)
    }
  },
  methods: {
    increamentItemShipping (item) {
      const tempId = this.dataPengiriman.produk.find(val => val.id === item.id)
      if (!tempId) {
        this.dataPengiriman.produk.push(item)
      } else {
        tempId.qty_product = item.qty_product
      }
      this.setTotalProduk()
    },
    decreaseItemShipping (item) {
      const tempId = this.dataPengiriman.produk.find(val => val.id === item.id)
      if (item.qty !== 0) {
        tempId.qty_product = item.qty_product
      } else {
        this.dataPengiriman.produk = this.dataPengiriman.produk.filter(
          val => val.id !== item.id
        )
      }
      this.setTotalProduk()
    },
    setTotalProduk () {
      if (this.dataPengiriman.produk.length !== 0) {
        this.totalProduk = this.dataPengiriman.produk.reduce(
          (sum, cur) => sum + cur.qty_product,
          0
        )
      } else {
        this.totalProduk = 0
      }
    },
    handleInput () {
      this.dataPengiriman.total_produk = this.totalProduk
      this.$cookies.set('order_pengiriman', this.dataPengiriman)
      this.$router.push({
        path: '/dashboard/pengiriman/detail-order',
        query: { origin_branch: this.dataBranch }
      })
    }
  },
  computed: {
    ...mapState('stok', ['stokByBranch', 'isLoading']),
    ...mapState('dropdown', ['branch'])
  }
}
</script>

<style></style>
x

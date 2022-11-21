<template>
  <div class="container mx-auto px-4 md:px-8 lg:px-12">
    <div class="container-inner shadow-md p-4">
      <div
        class="total-stok text-center shadow-md py-5 mb-4 flex flex-col gap-4"
      >
        <p class="font-semibold text-6xl">
          {{ totalQtyStok }}
        </p>
        <p class="font-semibold text-xl">
          Total Stok Gudang
        </p>
      </div>
      <div class="kelola-stok">
        <div class="dropdown my-4">
          <select
            id=""
            v-model="kategori"
            class="w-full rounded-lg px-3 py-2 border-2 border-black"
            name=""
          >
            <option value="all">
              All
            </option>
            <option
              v-for="item in getCategory"
              :key="item.category"
              :value="item.category"
              class="capitalize"
            >
              {{ item.category }}
            </option>
          </select>
        </div>
        <div class="content">
          <div class="dynamic-component flex flex-col gap-5">
            <StokCardBarang
              v-for="item in filteredStok"
              :key="item.id"
              :item="item"
            />
          </div>
          <div class="btn flex justify-end my-4">
            <nuxt-link to="stok/tambah-produk">
              <ButtonComponent class="p-2" text-fill="+ Produk" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  data () {
    return {
      // stokBarang: {},
      kategori: 'all'
    }
  },
  async fetch ({ store }) {
    await store.dispatch('stok/getStokBarang')
  },
  computed: {
    ...mapState('stok', ['stokBarang']),
    getCategory () {
      return this.stokBarang
        .map(({ category }) => ({ category }))
        .filter(
          (value, index, self) =>
            index ===
            self.findIndex(
              t => t.place === value.place && t.category === value.category
            )
        )
    },
    filteredStok () {
      if (this.kategori !== 'all') {
        return this.stokBarang.filter(e => e.category === this.kategori)
      } else {
        return this.stokBarang
      }
    },
    totalQtyStok () {
      return this.stokBarang.map(e => e.quantity).reduce((a, b) => a + b, 0)
    }
  },
  created () {
    this.setPageTitle('Total Stok')
  },
  mounted () {
    // console.log(this.totalQtyStok)
  },
  updated () {
    // console.log(this.filteredStok)
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style>
select {
  outline: none;
}
</style>

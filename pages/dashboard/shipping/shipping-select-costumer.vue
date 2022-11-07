<template>
  <div class="relative mx-4 md:mx-12 h-screen">
    <div class="flex justify-between mb-5">
      <h1 class="font-bold text-2xl">
        List Customer
      </h1>

    </div>
    <search-bar class="my-4" />
    <card-customer class="shadow-md p-2 mb-3" />
    <card-customer class="shadow-md p-2 mb-3" />
    <card-customer class="shadow-md p-2 mb-3" />
    <card-customer class="shadow-md p-2 mb-3" />
    <nuxt-link to="/dashboard/shipping/new-costumer">
        <button-global class="absolute bottom-0 right-0" text="+ Pelanggan" padding="p-2" color="bg-primary" />
      </nuxt-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import CardCustomer from '~/components/pos/CardCustomer.vue'
import SearchBar from '~/components/SearchBar.vue'
export default {
  components: { CardCustomer, SearchBar },
  layout: 'navigation',
  data () {
    return {}
  },
  created () {
    this.setPageTitle('Kirim Barang Ke Customer')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style></style>

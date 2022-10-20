<template>
  <div class="mx-4 md:mx-12">
    <div class="flex justify-between mb-5">
      <h1 class="font-bold text-2xl">
        List Customer
      </h1>
      <nuxt-link to="/dashboard/shipping/new-costumer">
        <button-component text-fill="Tambah Customer" />
      </nuxt-link>
    </div>
    <search-bar class="my-4"/>
    <card-customer class="shadow-md p-2 mb-3" />
    <card-customer class="shadow-md p-2 mb-3" />
    <card-customer class="shadow-md p-2 mb-3" />
    <card-customer class="shadow-md p-2 mb-3" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import CardCustomer from '~/components/pos/CardCustomer.vue'
import ButtonComponent from '~/components/ButtonComponent.vue'
import SearchBar from '~/components/SearchBar.vue'
export default {
  components: { CardCustomer, ButtonComponent, SearchBar },
  layout: 'dashboard-pos',
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

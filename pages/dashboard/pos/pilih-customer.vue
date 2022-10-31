<template>
  <div class="container p-4">
    <SearchBar placeholder="Cari Pelanggan" class="mb-10" />
    <div class="content min-h-[70vh] flex flex-col justify-between">
      <div class="customer-card flex flex-col gap-3">
        <PosCardCustomer />
        <PosCardCustomer />
        <PosCardCustomer />
      </div>
      <div class="btn flex justify-end">
        <nuxt-link to="tambah-customer">
          <ButtonComponent class="p-2" text-fill="+ Customer" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  created () {
    this.setPageTitle('Pilih Pelanggan')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style></style>

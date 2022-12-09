<template>
  <div class="flex flex-col bg-white px-4 w-full">
    <h3 class="font-semibold mb-2">
      Riwayat Pengiriman
    </h3>
    <div class="h-[472px] overflow-y-auto mb-2">
      <inventory-shipping-card-riwayat-pengiriman
        v-for="(value, index) in shippingHistory"
        :key="index"
        :destinasi="value.branch_name"
        :tipe="value.type"
        :date="value.date"
      />
    </div>
    <div>
      <button-global
        class="w-full mb-3"
        text="Kirim Barang"
        color="bg-primary"
        padding="py-3"
        @click="toNewShipping"
      />
      <button-global
        class="w-full mb-3"
        text="Terima Barang"
        padding="py-3"
        :outlined="true"
        @click="toTerimaBarang"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  async asyncData ({ store }) {
    await store.dispatch('shipping/getShippingHistory')
  },
  created () {
    this.setPageTitle('Pengiriman')
  },
  computed: {
    ...mapState('shipping', ['shippingHistory'])
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    toNewShipping () {
      this.$router.push('/dashboard/pengiriman/pengiriman-baru')
    },
    toTerimaBarang () {
      this.$router.push('/dashboard/pengiriman/terima-barang')
    }
  }
}
</script>

<style></style>

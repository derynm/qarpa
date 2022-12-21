<template>
  <div class="px-4">
    <inventory-shipping-detail-order-pengiriman-cabang />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'DetailOrder',
  layout: 'navigation',
  middleware: 'auth',
  created () {
    this.setPageTitle('Detail Order')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style></style>

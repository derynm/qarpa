<template>
  <div class="h-screen mx-4 md:mx-12">
    <div class="bg-white p-3 shadow">
      <div class="flex">
        <button-component
          text-fill="Costumer"
          class="w-full"
          @clicked="isCostumer = true"
        />
        <div class="vl mx-5" />
        <button-component
          text-fill="Supplier"
          class="w-full"
          @clicked="isCostumer = false"
        />
      </div>
      <div>
        <div v-show="isCostumer">
          <CardShippingCostumerStatus />
        </div>
        <div v-show="!isCostumer">
          <CardShippingSupplierStatus />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import ButtonComponent from '~/components/ButtonComponent.vue'
import CardShippingCostumerStatus from '~/components/inventory-shipping/CardShippingCostumerStatus.vue'
import CardShippingSupplierStatus from '~/components/inventory-shipping/CardShippingSupplierStatus.vue'

export default {
  components: {
    ButtonComponent,
    CardShippingCostumerStatus,
    CardShippingSupplierStatus
  },
  layout: 'dashboard-pos',
  data () {
    return {
      isCostumer: true
    }
  },
  created () {
    this.setPageTitle('Lihat Status pengiriman Barang')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style scoped>
.vl {
  border-left: 2px solid rgb(172, 172, 172);
}
</style>

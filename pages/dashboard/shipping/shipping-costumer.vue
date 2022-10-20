<template>
  <div class="relative h-screen mx-4 md:mx-12">
    <div class="bg-white p-3 shadow">
      <nuxt-link to="/dashboard/shipping/shipping-select-costumer">
        <button-component text-fill="Pilih Costumer" />
      </nuxt-link>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
        <card-product
          v-for="(product, index) in dummyProduct"
          :key="index"
          :product_name="product.product_name"
          :price="product.price"
          :stock="product.stock"
        />
      </div>
      <button-component
        class="absolute right-0 bottom-5"
        :text-fill="'Kirim Barang'"
        @clicked="showOrderList"
      />
    </div>
    <!-- <modal-order-detail-shipping
      v-if="isShowOrderList"
      to="shipping-costumer-success"
      @closeModal="showOrderList"
    /> -->
    <modal-order-detail-shipping-costumer
      v-if="isShowOrderList"
      to="shipping-costumer-success"
      @closeModal="showOrderList"
    />

  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import CardProduct from '~/components/inventory-shipping/CardProductShipping.vue'
import ButtonComponent from '~/components/ButtonComponent.vue'
import ModalOrderDetailShippingCostumer from '~/components/inventory-shipping/ModalOrderDetailShippingCostumer.vue'
export default {
  components: { CardProduct, ButtonComponent, ModalOrderDetailShippingCostumer },
  layout: 'dashboard-pos',
  data () {
    return {
      isShowOrderList: false,
      dummyProduct: [
        {
          product_name: 'cappuccino',
          stock: '120',
          price: '15000'
        },
        {
          product_name: 'Bacon & Egg Toast',
          stock: '190',
          price: '20000'
        }
      ]
    }
  },
  created () {
    this.setPageTitle('Kirim Barang Ke Customer')
  },
  methods: {
    showOrderList () {
      this.isShowOrderList = !this.isShowOrderList
    },
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style></style>

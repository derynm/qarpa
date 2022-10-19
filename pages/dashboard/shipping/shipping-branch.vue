<template>
  <div class="relative h-screen mx-2 md:mx-24">
    <div class="bg-white p-3 shadow">
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
        <card-product-wom
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
    <modal-order-detail-shipping v-if="isShowOrderList" @closeModal="showOrderList" />
  </div>
</template>

<script>
import CardProductWom from '~/components/inventory-shipping/CardProductShipping.vue'
import ButtonComponent from '~/components/ButtonComponent.vue'
import ModalOrderDetailShipping from '~/components/inventory-shipping/ModalOrderDetailShipping.vue'
export default {
  components: { CardProductWom, ButtonComponent, ModalOrderDetailShipping },
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
  methods: {
    showOrderList () {
      this.isShowOrderList = !this.isShowOrderList
    }
  }
}
</script>

<style></style>

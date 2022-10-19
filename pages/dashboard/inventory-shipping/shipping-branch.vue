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
      />
    </div>
  </div>
</template>

<script>
import CardProductWom from '~/components/wom/CardProductWom.vue'
import ButtonComponent from '~/components/ButtonComponent.vue'
export default {
  components: { CardProductWom, ButtonComponent },
  data () {
    return {
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
  }
}
</script>

<style></style>

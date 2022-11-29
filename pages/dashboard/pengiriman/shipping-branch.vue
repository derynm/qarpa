<template>
  <div class="h-screen px-4 w-full">
    <div class="flex flex-col justify-between h-full">
      <div>
        <search-bar class="my-3" />
        <div class="grid grid-cols-1 gap-5">
          <card-product
            v-for="(product, index) in dummyProduct"
            :key="index"
            :product_name="product.product_name"
            :price="product.price"
            :stock="product.stock"
          />
        </div>
      </div>
      <!-- <button-component
        class="absolute right-0 bottom-5"
        :text-fill="'Kirim Barang'"
        @clicked="showOrderList"
      /> -->
      <div class="flex flex-col mb-3">
        <hr class="mb-3">
        <div class="flex w-ful justify-between mb-6">
          <p class="font-semibold">
            Total Produk :
          </p>
          <p>40</p>
        </div>
        <button-global text="Detail Order" color="bg-primary" padding="py-3" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import CardProduct from '~/components/inventory-shipping/CardProductShipping.vue'
import SearchBar from '~/components/SearchBar.vue'
export default {
  components: { CardProduct, SearchBar },
  layout: 'navigation',
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
    this.setPageTitle('Kirim Barang')
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
